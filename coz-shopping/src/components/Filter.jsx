import imgAll from "../assets/all.jpg";
import imgProduct from "../assets/product.jpg";
import imgExhibition from "../assets/exhibition.jpg";
import imgCategory from "../assets/category.jpg";
import imgBrand from "../assets/brand.jpg";
import './Filter.css';

function Filter() {
  // filter enum으로 변경하기
  const FilterType = {
    ALL: 'all',
    PRODUCT: 'product',
    CATEGORY: 'category',
    EXHIBITION: 'exhibition',
    BRAND: 'brand',
  };

  const filters = [
    {
      type: FilterType.ALL,
      img: imgAll,
      title: "전체",
    },
    {
      type: FilterType.PRODUCT,
      img: imgProduct,
      title: "상품",
    },
    {
      type: FilterType.CATEGORY,
      img: imgCategory,
      title: "카테고리",
    },
    {
      type: FilterType.EXHIBITION,
      img: imgExhibition,
      title: "기획전",
    },
    {
      type: FilterType.BRAND,
      img: imgBrand,
      title: "브랜드",
    },
  ]


  return (
    <>
      <section className="filter-container">
        {filters.map((filter)=>(
          <div className="filter-item" key={filter.type}>
            <div className="filter-item_img">
              <img src={filter.img} alt={filter.title} />
            </div>
            <p className="filter-title">{filter.title}</p>
          </div>
        ))}
        {/* 이하 코드 : filter enum으로 변경 전 */}
        {/* <div className="filter-item">
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
        </div> */}
      </section>
    </>
  );
}

export default Filter;
