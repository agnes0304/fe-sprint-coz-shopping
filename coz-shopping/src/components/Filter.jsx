import imgAll from "../assets/all.jpg";
import imgProduct from "../assets/product.jpg";
import imgExhibition from "../assets/exhibition.jpg";
import imgCategory from "../assets/category.jpg";
import imgBrand from "../assets/brand.jpg";
import './Filter.css';

function Filter() {
  return (
    <>
      <section className="filter-container">
        <div className="filter-item">
          <div className="filter-item_img">
            <img src={imgAll} />
          </div>
          <p className="filter-title">전체</p>
        </div>
        <div className="filter-item">
          <div className="filter-item_img">
            <img src={imgProduct} />
          </div>
          <p className="filter-title">상품</p>
        </div>
        <div className="filter-item">
          <div className="filter-item_img">
            <img src={imgCategory} />
          </div>
          <p className="filter-title">카테고리</p>
        </div>
        <div className="filter-item">
          <div className="filter-item_img">
            <img src={imgExhibition} />
          </div>
          <p className="filter-title">기획전</p>
        </div>
        <div className="filter-item">
          <div className="filter-item_img">
            <img src={imgBrand} />
          </div>
          <p className="filter-title">브랜드</p>
        </div>
      </section>
    </>
  );
}

export default Filter;
