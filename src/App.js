import React, { Component } from "react";

import * as R from "ramda";

import PolyComponent from "./components/PolyComponent";

import { simplePoney, complexPoney, poneys } from "./data";
import { giveMeMoreMoney, applySuperDiscount } from "./utils";

function update(state) {
  return state;
}

const state = poneys;

class App extends Component {
  render() {
    return (
      <div className="flex">
        <PolyComponent state={state} />
        <PolyComponent state={update(state)} />
      </div>
    );
  }
}

export default App;
