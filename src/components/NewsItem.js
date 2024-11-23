import React from "react";
import { Link } from "react-router-dom";

const NewsItem =(props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date, source } =props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: 0,
            }}
          >
            <span className=" badge rounded-pill bg-danger">{source}</span>
          </div>

          <img
            src={
              !imageUrl
                ? "https://img1.s3wfg.com/web/img/images_uploaded/b/7/ep_archivo_-_cartel_del_nasdaq_en_times_square_nueva_york_estados_unidos.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <Link
              rel="noreferrer"
              to={newsUrl}
              target="blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
