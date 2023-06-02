import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Input } from ".";

describe("Input", () => {
	it("should render correctly", () => {
		render(<Input aria-label="test" />);

		const button = screen.getByRole("textbox", { name: "test" });

		expect(button).toBeInTheDocument();
	});

	it("should render with label", () => {
		render(<Input aria-label="test" label="Test" />);

		const label = screen.getByText("Test");

		expect(label).toBeInTheDocument();
	});
});
