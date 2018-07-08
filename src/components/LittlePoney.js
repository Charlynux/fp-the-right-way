import React, { Component } from "react";

import { get, choices } from "partial.lenses";

function prettyPrice(price) {
  const thousands = Math.floor(price / 1000);
  const hundreds = price - thousands * 1000;

  return `${thousands}.${hundreds}€`;
}

function Price({ price, small }) {
  return price ? (
    <div className={small ? "text-xl" : "text-2xl"}>{prettyPrice(price)}</div>
  ) : (
    ""
  );
}

const metaPrices = ["meta", "prices"];

const getPremiumPrice = get([metaPrices, "premiumPrice"]);
const gePrice = get(choices([metaPrices, "price"], "price"));

export default function LittlePoney({ poney }) {
  return (
    <div className="m-2 border p-2 flex flex-1 text-grey-darker font-mono rounded shadow-lg">
      <img src={poney.image} className="flex-initial" />
      <div className="flex-1 flex flex-col justify-between px-3">
        <span className="text-md">{poney.name}</span>
        <div className="self-end text-right">
          <Price small price={getPremiumPrice(poney)} />
          <Price price={gePrice(poney)} />
        </div>
      </div>
    </div>
  );
}
