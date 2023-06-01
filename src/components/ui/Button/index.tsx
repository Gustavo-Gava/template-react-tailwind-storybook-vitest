import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

const buttonStyles = cva("px-4 py-1 rounded-md text-white font-semibold transition-all", {
	variants: {
		intent: {
			primary: "bg-primary hover:bg-primary-hover",
			secondary: "bg-secondary hover:bg-secondary-hover",
			danger: "bg-red-500 hover:bg-red-600",
		},
		size: {
			small: "text-sm",
			medium: "text-base",
			large: "text-lg",
		},
		fullWidth: {
			true: "w-full",
		},
	},
	defaultVariants: {
		intent: "primary",
	},
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	size?: "small" | "medium" | "large";
	intent?: "primary" | "secondary" | "danger";
	fullWidth?: boolean;
}

export const Button = ({ children, size, intent, fullWidth, className, ...rest }: ButtonProps) => {
	return (
		<button className={buttonStyles({ intent, fullWidth, size })} {...rest}>
			{children}
		</button>
	);
};
