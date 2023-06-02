import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Button } from ".";

describe("Button", () => {
	it("should render", () => {
		render(<Button>Test</Button>);

		const button = screen.getByRole("button", { name: /test/i });

		expect(button).toBeInTheDocument();
	});

	it("should render with correct intent", () => {
		render(<Button intent="primary">Primary</Button>);
		render(<Button intent="secondary">Secondary</Button>);
		render(<Button intent="danger">Danger</Button>);

		const primaryButton = screen.getByRole("button", { name: /primary/i });
		const secondaryButton = screen.getByRole("button", { name: /secondary/i });
		const dangerButton = screen.getByRole("button", { name: /danger/i });

		expect(primaryButton).toHaveClass("bg-primary");
		expect(secondaryButton).toHaveClass("bg-secondary");
		expect(dangerButton).toHaveClass("bg-red-500");
	});
});
