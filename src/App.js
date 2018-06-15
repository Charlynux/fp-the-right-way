import React, { Component } from "react";

import * as R from "ramda";

const poneys = [
  {
    name: "Twilight Starla Sparkle",
    image: "images/twilight.jpg",
    meta: {
      prices: {
        price: 3300,
        premiumPrice: 3900
      }
    }
  },
  {
    name: "Sarah Blossom Apple",
    image: "images/blossom.jpg",
    meta: {
      prices: {
        price: 3300,
        premiumPrice: 3900
      }
    }
  },
  {
    name: "Juliet Ann Rarity",
    image: "images/rarity.jpg",
    meta: {
      prices: {
        price: 3300,
        premiumPrice: 3900
      }
    }
  },
  {
    name: "Barbara Roxane Seed",
    image: "images/seed.jpg",
    meta: {
      prices: {
        price: 3300,
        premiumPrice: 3900
      }
    }
  },
  {
    name: "Rainbow Dash",
    image: "images/mc-dashin.png",
    meta: {
      prices: {
        price: 3300,
        premiumPrice: 3900
      }
    }
  },
  {
    name: "Emilé Melody Fluttershy",
    image: "images/melody.jpg",
    meta: {
      prices: {
        price: 3300,
        premiumPrice: 3900
      }
    }
  }
];

function prettyPrice(price) {
  const thousands = Math.floor(price / 1000);
  const hundreds = price - thousands * 1000;

  return `${thousands}.${hundreds}€`;
}

function Price({ price, small }) {
  return (
    <div className={small ? "text-xl" : "text-2xl"}>{prettyPrice(price)}</div>
  );
}

function LittlePoney({ poney }) {
  return (
    <div className="m-2 border p-2 flex text-grey-darker font-mono rounded shadow-lg">
      <img src={poney.image} className="flex-initial" />
      <div className="flex-1 flex flex-col justify-between px-3">
        <span className="text-md">{poney.name}</span>
        <div className="self-end text-right">
          <Price small price={poney.meta.prices.premiumPrice} />
          <Price price={poney.meta.prices.price} />
        </div>
      </div>
    </div>
  );
}

function Stable({ poneys }) {
  return (
    <div className="flex-1 border-2 mx-2 my-1">
      {poneys.map((poney, index) => <LittlePoney key={index} poney={poney} />)}
    </div>
  );
}

function updatePrice(price) {
  return price * 1.2;
}

const lensPrice = R.lensPath(["meta", "prices", "price"]);

const updatePoneyPrice = R.over(lensPrice, updatePrice);

function update(state) {
  return state.map(updatePoneyPrice);
}

function PolyComponent({ state }) {
  return Array.isArray(state) ? (
    <Stable poneys={state} />
  ) : (
    <LittlePoney poney={state} />
  );
}

class App extends Component {
  render() {
    return (
      <div className="flex">
        <PolyComponent state={poneys} />
        <PolyComponent state={update(poneys)} />
      </div>
    );
  }
}

export default App;
