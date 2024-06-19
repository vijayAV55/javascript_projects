import { useState } from "react";

export function EcommerceCart() {
  const [EcommerceCart] = useState({
    items: "Carrom",
    quantity: "60%",
    price: "6000",

    additems: function () {},
    emoveitems: function () {},
    updatequantities: function () {},
    calculatetotalprice: function () {},
  });

  return (
    <div>
      <ul>
        {Object.keys(EcommerceCart).map((key) => {
          return <li>{EcommerceCart[key]}</li>;
        })}
      </ul>
    </div>
  );
}
