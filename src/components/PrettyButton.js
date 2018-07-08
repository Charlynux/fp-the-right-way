import React, { Component } from "react";

export function PrettyButton({ onClick }) {
  return (
    <div className="flex justify-center py-8">
      <button
        className="bg-white hover:bg-grey-lightest text-grey-darkest font-semibold py-2 px-4 border border-grey-light rounded shadow"
        onClick={onClick}
      >
        Mettre à jour
      </button>
    </div>
  );
}
