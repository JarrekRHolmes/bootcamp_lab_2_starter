import React from "react";

import AnimalForm from "./AnimalForm";
import { render as r, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockSaveFn = jest.fn();

const render = (props) => r(<AnimalForm save={mockSaveFn} {...props} />);

describe("AnimalForm", () => {
  it("renders the default form values", () => {
    render();
  });

  describe("when the animal and animal fact is passed in as props", () => {
    it("uses animal as the default value", () => {
      render({ animal: "Cat", animalFact: "Something cool" });
    });

    it("uses animal fact as the default value", () => {
      render({ animal: "Cat", animalFact: "Something cool" });
    });
  });

  it("calls save when there is an update", () => {
    render();
  });
});
