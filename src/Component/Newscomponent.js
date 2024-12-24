import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';
function Newscomponent(props) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100);
  }
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} ~ 365 News`
    updateNews();
  }, [])
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}`;
    setPage(page + 1)
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
  };
  return (
    <>
      <h1 className="text-center h1">365News ~ Top {capitalizeFirstLetter(props.category)} Headlines</h1>
      {loading > <Spinner />}
      <InfiniteScroll
        dataLength={articles ? articles.length : 0}
        next={fetchMoreData}
        hasMore={articles && articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container my-3">
          <div className="row">
            {articles &&
              articles.map((element, index) => {
                return (
                  <div className="col-md-4" key={`${element.url}-${index}`}>
                    <Newsitem
                      title={element.title ? element.title.slice(0, 40) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 80)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                    />
                  </div>

                );
              })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

Newscomponent.defaultProps = {
  country: "us",
  pagesize: "8",
};
Newscomponent.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
};
export default Newscomponent;
