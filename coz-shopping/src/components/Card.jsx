import React from "react";

function Card(props) {
    // type에 따라서 렌더링되는 구조가 달라지는데....
    // grid로 위치에 이름 지정.
    // type: Product, title(left), discountPercentage(right), price(r) /image_url

    // type:Category title(l) /image_url

    // type:Exhibition title(l), sub_title(l) /image_url

    // type:Brand brand_name(l), 관심 고객수, follower(r) /brand_image_url

    return (
        <li className="card-container">
            <div className="card-img"><img /></div>
            <p className="card-title">{props.title}</p>
            {/* 브랜드인 경우 brand_name */}
            <p className="card-sub_title">{props.subTitle}</p>
            <p className="card-sub_label">percent / 관심고객수</p>
            {/* 상품 혹은 브랜드에 따라서 표시되는게 바뀜 */}
            <p className="card-sub-content">follower / 상품가격</p>
            {/* 상품 혹은 브랜드에 따라서 표시되는게 바뀜 */}
        </li>
    )
}

export default Card;