import React from "react";
import { render } from "@testing-library/react";
import Alert from "./Alert";

it("renders without crashing", function() {
  render(<Alert />);
});

it("matches snapshot for danger", function() {
  let errorMessages = ["instance.Everything is broken", "instance.Run for the hills"];
  const { asFragment } = render(<Alert messages={errorMessages} />);
  expect(asFragment()).toMatchSnapshot();
});