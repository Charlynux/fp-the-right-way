import React, {
  Component
} from "react";

import * as R from "ramda";
import * as L from "partial.lenses";

import {
  PolyComponent,
  PrettyButton,
  PricesBanner
} from "./components";

import {
  simplePoney,
  complexPoney,
  poneys,
  exampleBannerItems
} from "./data";

import {
  giveMeMoreMoney,
  applySuperDiscount
} from "./utils";

// const getPrice = state =>
//   state.meta.prices.price;
// const setPrice = (newPrice, state) => ({
//   ...state,
//   meta: {
//     ...state.meta,
//     prices: {
//       ...state.meta.prices,
//       price: newPrice
//     }
//   }
// });

// const lensPrice = R.lens(
//   getPrice,
//   setPrice
// );
const lensPoneyPrice = [
  "meta",
  "prices",
  L.defaults({
    premiumPrice: 500
  }),
  "price",
  L.defaults(2000)
];
const lensPrice = [
  // L.first,
  // L.last,
  // L.find(poney => !poney.meta.new),
  L.elems,
  // L.when(poney => !poney.meta.new),
  lensPoneyPrice
];

//Redux: state, action => state
const update = state =>
  L.modify(
    lensPrice,
    applySuperDiscount,
    state
  );

const createBannerItem = R.applySpec({
  label: poney => poney.name,
  price: L.get(lensPoneyPrice)
});

// poneys => poneys => items
const prepareBannerItems = R.compose(
  R.map(createBannerItem),
  R.take(2),
  R.sortBy(L.get(lensPoneyPrice)),
  R.filter(L.get(["meta", "new"]))
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = poneys;
  }

  render() {
    return (
      <React.Fragment>
        <PricesBanner
          items={prepareBannerItems(
            poneys
          )}
        />
        <div className="flex">
          <PolyComponent
            state={this.state}
          />
          <PolyComponent
            state={update(this.state)}
          />
        </div>
        {/* <PrettyButton
          onClick={() =>
            this.setState(update)
          }
        /> */}
      </React.Fragment>
    );
  }
}

export default App;
