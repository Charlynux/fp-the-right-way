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
      <React.Fragment>
        <div className="overflow-hidden w-100 bg-blue-lighter my-1 mx-2 p-2 text-grey-darker text-2xl scroll-right">
          <p>hello, world</p>
        </div>
        <div className="flex">
          <PolyComponent state={state} />
          <PolyComponent state={update(state)} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
