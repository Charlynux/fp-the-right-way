import React, { Component } from "react";
import LittlePoney from "./LittlePoney";

export default function Stable({ poneys }) {
  return (
    <div className="flex-1 border-2 mx-2 my-1">
      {poneys.map((poney, index) => <LittlePoney key={index} poney={poney} />)}
    </div>
  );
}
