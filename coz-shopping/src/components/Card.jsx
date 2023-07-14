import React from "react";
import './Card.module.css';

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
    brand_img_url,
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
          <p className="card-title">{title}</p>
          <p className="card-sub_title">{sub_title}</p>
          <p className="card-sub_label">{discountPercentage}</p>
          <p className="card-sub-content">{price}</p>
        </>
      );
      break;

    case "Category":
      cardContent = (
        <>
          <div className="card-img">
            <img src={image_url} />
          </div>
          <p className="card-title">{title}</p>
          <p className="card-sub_title"></p>
          <p className="card-sub_label"></p>
          <p className="card-sub-content"></p>
        </>
      );
      break;

    case "Exhibition":
      cardContent = (
        <>
          <div className="card-img">
            <img src={image_url} />
          </div>
          <p className="card-title">{title}</p>
          <p className="card-sub_title">{sub_title}</p>
          <p className="card-sub_label"></p>
          <p className="card-sub-content"></p>
        </>
      );
      break;

    case "Brand":
      cardContent = (
        <>
          <div className="card-img">
            <img src={brand_img_url} />
          </div>
          <p className="card-title">{brand_name}</p>
          <p className="card-sub_title"></p>
          <p className="card-sub_label">관심 고객수</p>
          <p className="card-sub-content">{follower}</p>
        </>
      );
      break;
  }

  return <li className="card-container">{cardContent}</li>;
}

export default Card;
