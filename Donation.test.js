import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Donation from "./Donation"; 

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Donation Component", () => {
  test("renders donation page headings and buttons", () => {
    render(
      <MemoryRouter>
        <Donation />
      </MemoryRouter>
    );

    expect(screen.getByText("Make a Difference Today")).toBeInTheDocument();
    expect(screen.getByText("Donate Money")).toBeInTheDocument();
    expect(screen.getByText("Donate Food")).toBeInTheDocument();
    expect(screen.getByText("Donate Clothes")).toBeInTheDocument();
    expect(screen.getByText("Donate Now")).toBeInTheDocument();
    expect(screen.getByText("Find Drop-Off Locations")).toBeInTheDocument();
  });

  test("calls navigation function when 'Find Drop-Off Locations' button is clicked", () => {
    const mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({ useNavigate: () => mockNavigate }));

    render(
      <MemoryRouter>
        <Donation />
      </MemoryRouter>
    );

    const locationButton = screen.getByText("Find Drop-Off Locations");
    fireEvent.click(locationButton);

    expect(mockNavigate).toHaveBeenCalledWith("/locations");
  });
});

