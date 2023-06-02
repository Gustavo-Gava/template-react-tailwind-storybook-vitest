import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, name, ...props }, ref) => {
	return (
		<div className="flex flex-col">
			{label && (
				<label className="text-sm font-medium text-gray-700" htmlFor={name}>
					{label}
				</label>
			)}

			<input
				ref={ref}
				name={name}
				id={name}
				className="px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
				{...props}
			/>
		</div>
	);
});

Input.displayName = "Input";
