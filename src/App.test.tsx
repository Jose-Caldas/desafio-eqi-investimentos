import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app h1", () => {
  render(<App />);
  const h1 = screen.getByText(/Desafio eqi investimentos/i);
  expect(h1).toBeInTheDocument();
});
