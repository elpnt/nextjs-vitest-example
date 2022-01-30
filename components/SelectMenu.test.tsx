import { SelectMenu } from "./SelectMenu";
import { render, screen, fireEvent } from "@testing-library/react";

describe("SelectMenu test", () => {
  it("should render and select", () => {
    render(<SelectMenu />);

    expect(screen.queryByText("Apple")).toBeInTheDocument();
    expect(screen.queryByText("Orange")).not.toBeInTheDocument();

    // Open the listbox and select 'Orange'
    fireEvent.click(screen.getByText("Apple"));
    fireEvent.click(screen.getByText("Orange"));

    expect(screen.queryByText("Apple")).not.toBeInTheDocument();
    expect(screen.queryByText("Orange")).toBeInTheDocument();
  });
});
