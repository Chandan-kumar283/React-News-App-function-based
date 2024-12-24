import React from 'react'

function Newsitem  (props)  {

    let{title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="card" style={{backgroundColor:'rgb(213 213 213 / 80%)'}}>
      <img src={!imageUrl?"https://bitsofco.de/img/Qo5mfYDE5v-350.png":imageUrl} className="card-img-top" alt=" not found" />
      <div className="card-body">
        <h5 className="card-title">{title}..!<span className="badge text-bg-danger">{source}</span></h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toUTCString()}
        </small></p>
        <a href={newsUrl} target='_blank' rel="noopener noreferrer"  className="btn btn-sm btn-primary">Read More</a>
      </div>
    </div>
    )
  }

export default Newsitem;

