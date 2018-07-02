import React, { Component } from "react";
import LittlePoney from "./LittlePoney";
import Stable from "./Stable";

export function PolyComponent({ state }) {
  return Array.isArray(state) ? (
    <Stable poneys={state} />
  ) : (
    <LittlePoney poney={state} />
  );
}
