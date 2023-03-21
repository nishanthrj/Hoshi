import ActiveFilterMini from "./ActiveFilterMini";
import Dropdown from "./Dropdown";
import Field from "./DropdownField";

interface FilterFieldProps {
	name: string;
}

export default function FilterField({ name }: FilterFieldProps) {
	return (
		<div className="relative snap-center">
			<span className="mb-1 ml-2 text-sm font-medium capitalize text-dark-100">{name}</span>
			<Field name={name}>
				<ActiveFilterMini name={name} />
			</Field>
			<Dropdown name={name} />
		</div>
	);
}
