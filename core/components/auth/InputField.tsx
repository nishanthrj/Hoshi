interface InputFieldProps {
	name: string;
	type: string;
	text: string;
	value?: string;
	error?: string;
	onChange?: React.FocusEventHandler<HTMLInputElement>;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

export default function InputField({
	name,
	type,
	text,
	value,
	error,
	onChange,
	onBlur,
}: InputFieldProps) {
	return (
		<>
			<label htmlFor={name} className="font-bold">
				{text}
			</label>
			<input
				type={type}
				name={name}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				className="mt-2 h-10 rounded-md border-none bg-dark-400 p-3 text-sm font-bold text-dark-50"
			/>
			<span className="mb-8 mt-2 text-xs text-red-400">{error}</span>
		</>
	);
}
