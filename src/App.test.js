import React from "react";

import App from "./App";
import axios from "axios";
import { render as r, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const render = () => r(<App />);

describe("App", () => {
  it("renders the card header", () => {
    render();
  });

  it("render the default favorite animal", () => {
    render();
  });

  it("render the edit button", () => {
    render();
  });

  it("open the animal form when the edit button is clicked", () => {
    render();
  });

  it("fetches an animal fact from axios", async () => {});
});
