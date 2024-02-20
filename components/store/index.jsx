import React from "react";
import nailPolishData from "../data/nail-polish";
import StoreItem from "./store-item";

function Store() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {nailPolishData.map((item) => (
        <StoreItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default Store;
