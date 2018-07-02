import React, { Component } from "react";

import * as R from "ramda";
import * as L from "partial.lenses";

import {PolyComponent, PricesBanner } from "./components";

import { simplePoney, complexPoney, poneys } from "./data";
import { giveMeMoreMoney, applySuperDiscount } from "./utils";

// {
//   name: "Twilight Starla Sparkle",
//   image: "images/twilight.jpg",
//   meta: {
//     prices: {
//       price: 3300,
//       premiumPrice: 3900
//     }
//   }
// };


// setter + getter = Lens
// state.meta.prices.price
const poneyLens = [L.elems, L.when(poney => poney.name.includes("n"))];
const pricesLens = ["meta", "prices"];
const priceLens = [pricesLens, "price"];
const premiumPriceLens = [pricesLens, "premiumPrice"];

function update(state) {
  return L.modify([poneyLens, premiumPriceLens], giveMeMoreMoney, state);
}

const state = poneys;

const exampleBannerItems = [
  { label: "iPhone X en promo !!!", price: 3000 },
  { label: "Le Wiko, c'est pour le boulot", price: 100 },
]

function prepareBanner(poneys) {
  return poneys.map(() => exampleBannerItems[0]);
}


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PricesBanner items={prepareBanner(poneys)} />
        <div className="flex">
          <PolyComponent state={state} />
          <PolyComponent state={update(state)} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
