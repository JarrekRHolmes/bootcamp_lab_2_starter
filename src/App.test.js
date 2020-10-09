import React from "react";

import App from "./App";
import axios from "axios";
import { render as r, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const render = () => r(<App />);

describe("App", () => {
  it("renders the card header", () => {
    render();
    expect(screen.getByText("My favorite animal")).toBeInTheDocument();
  });

  it("render the default favorite animal", () => {
    render();
    expect(screen.getByText("I love Cats")).toBeInTheDocument();
  });

  it("render the edit button", () => {
    render();
    expect(screen.getByText("Edit")).toBeInTheDocument();
  });

  it("open the animal form when the edit button is clicked", () => {
    render();
    const editButton = screen.getByRole("button");
    userEvent.click(editButton);

    expect(screen.getByText("Save")).toBeInTheDocument();
    expect(screen.queryByText("Edit")).not.toBeInTheDocument();
  });

  it("fetches an animal fact from axios", async () => {
    const axiosMock = jest
      .spyOn(axios, "get")
      .mockResolvedValue({ data: { text: "Jarrek loves dogs and cats" } });
    const url = "https://cat-fact.herokuapp.com/facts/random?animal_type=dog";

    render();

    await waitFor(() => {
      expect(axiosMock).toHaveBeenCalled();
      expect(axiosMock).toHaveBeenCalledWith(url);
      expect(
        screen.getByText("Cats fact: Jarrek loves dogs and cats")
      ).toBeInTheDocument();
    });
  });
});
