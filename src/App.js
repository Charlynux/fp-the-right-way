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

const update = function(state) {
  return state;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Twilight Starla Sparkle",
      image: "images/twilight.jpg",
      price: 3300
    };
  }

  render() {
    return (
      <React.Fragment>
        {/* <PricesBanner items={exampleBannerItems} /> */}
        <div className="flex">
          <PolyComponent
            state={this.state}
          />
        </div>
        <PrettyButton
          onClick={() =>
            this.setState(update)
          }
        />
      </React.Fragment>
    );
  }
}

export default App;
