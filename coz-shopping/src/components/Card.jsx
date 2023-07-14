import React from "react";
import "./Card.css";

function Card(props) {
  const {
    type,
    title,
    sub_title,
    price,
    discountPercentage,
    image_url,
    brand_name,
    follower,
    brand_image_url,
  } = props;

  //   onClick시에 Modal open 되는거 만들어야.

  let cardContent;
  switch (type) {
    case "Product":
      cardContent = (
        <>
          <div className="card-img">
            <img src={image_url} />
          </div>
          <div className="second-row">
            <p className="card-title">{title}</p>
            <p className="card-sub_label percentage">{discountPercentage}%</p>
          </div>
          <div className="third-row">
            <p className="card-sub_title">{sub_title}</p>
            <p className="card-sub-content price">{price}</p>
          </div>
        </>
      );
      break;

    case "Category":
      cardContent = (
        <>
          <div className="card-img">
            <img src={image_url} />
          </div>
          <div className="second-row">
            <p className="card-title">#{title}</p>
          </div>
        </>
      );
      break;

    case "Exhibition":
      cardContent = (
        <>
          <div className="card-img">
            <img src={image_url} />
          </div>
          <div className="second-row">
          <p className="card-title">{title}</p>
          </div>
          <div className="third-row">
          <p className="card-sub_title">{sub_title}</p>
          </div>
        </>
      );
      break;

    case "Brand":
      cardContent = (
        <>
          <div className="card-img">
            <img src={brand_image_url} />
          </div>
          <div className="second-row">
            <p className="card-title">{brand_name}</p>
            <p className="card-sub_label">관심 고객수</p>
          </div>
          <div className="third-row">
            <p className="card-sub_title"></p>
            <p className="card-sub-content">{follower}</p>
          </div>
        </>
      );
      break;
  }

  return <li className="card-container">{cardContent}</li>;
}

export default Card;
