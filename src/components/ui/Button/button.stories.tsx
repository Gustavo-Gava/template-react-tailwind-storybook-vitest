import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./index";

const meta: Meta<typeof Button> = {
	title: "Components/UI/Button",
	component: Button,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: "Button",
		intent: "primary",
	},
};

export const Secondary: Story = {
	args: {
		children: "Button",
		intent: "secondary",
	},
};

export const Danger: Story = {
	args: {
		children: "Button",
		intent: "danger",
	},
};

export const Small: Story = {
	args: {
		size: "small",
		children: "Button",
	},
};

export const Medium: Story = {
	args: {
		size: "medium",
		children: "Button",
	},
};

export const Large: Story = {
	args: {
		size: "large",
		children: "Button",
	},
};
