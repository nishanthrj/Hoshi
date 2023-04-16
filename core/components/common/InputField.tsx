interface InputFieldProps {
	id: string;
	type: string;
	text: string;
}

export default function InputField({ id, type, text }: InputFieldProps) {
	return (
		<>
			<label htmlFor={id} className="font-bold">
				{text}
			</label>
			<input
				type={type}
				id={id}
				className="mb-8 mt-2 h-10 rounded-md border-none bg-dark-400 p-3 text-sm font-bold text-dark-50"
			/>
		</>
	);
}
