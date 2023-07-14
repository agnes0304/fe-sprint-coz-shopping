import React from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Cardlist from "../components/Cardlist";
import Footer from "../components/Footer";

// Header, Filter, Cardlist, Footer 
// filter 온클릭 -> type 전달, setCards()

function Products () {
    const [ activeFilter, setFilter] = useState(null);
  
    const handleFilterClick = (filter) => {
      setFilter((prevFilter) => {
        if(prevFilter === filter) {
          return null;
        } 
        return filter;
      });
    }

    return (
        <>
            <Header />
            <Filter onFilterChange={handleFilterClick} />
            <Cardlist activeFilter={activeFilter} />
            <Footer />
        </>
    )
}

export default Products;