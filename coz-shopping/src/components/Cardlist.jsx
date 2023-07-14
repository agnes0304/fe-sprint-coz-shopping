import { useState, useEffect } from "react";
import Card from './Card';
import classes from "./Cardlist.module.css";

function Cardlist({ activeFilter }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const filteredCards = activeFilter === 'all' ? cards : cards.filter((card) => card.type ===activeFilter) ;

  return (
    <>
      {cards.length > 0 && (
        <ul className={classes.cards}>
          {
            filteredCards.map((card) => (
              <Card key={card.id} {...card} />
            ))
          }
        </ul>
      )}
    </>
  );
}

export default Cardlist;
