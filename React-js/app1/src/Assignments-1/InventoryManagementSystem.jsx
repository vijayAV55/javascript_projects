import { useState } from "react";

export function InventoryManagementSystem() {
  const [InventoryManagementSystem] = useState({
    productname: "Bike",
    quantityavailable: "first",
    price: 100000,

    newproducts: function () {},
    updatequantities: function () {},
    removeproducts: function () {},
  });

  return (
    <div>
      <ul>
        {Object.keys(InventoryManagementSystem).map((key) => {
          return <li>{InventoryManagementSystem[key]}</li>;
        })}
      </ul>
    </div>
  );
}
