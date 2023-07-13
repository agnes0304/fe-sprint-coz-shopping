import { useState, useEffect } from "react";
import Card from "../components/Card";

function Cardlist() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <>
      {cards.length > 0 && (
        <ul className="">
          {
            cards.map((card) => (
              <Card key={card.id} />
            ))
            // 필요한 거 넘겨주면 되겠지.
          }
        </ul>
      )}
    </>
  );
}

export default Cardlist;
