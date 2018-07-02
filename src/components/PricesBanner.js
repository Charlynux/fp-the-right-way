import React from "react";

export function PricesBanner({ items }) {
    return <div className="overflow-hidden w-100 bg-blue-lighter my-1 mx-2 p-2 text-grey-darker text-2xl scroll-left">
    <p>{items.map(i => `${i.label} (${i.price})`).join(" - ")}</p>
  </div>
}
