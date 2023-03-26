export const debounce = (func: Function, timeout = 500) => {
	let timer: ReturnType<typeof setTimeout>;
	return (...args: any) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, timeout);
	};
};

export const formatDate = (dateStr: string) => {
	const dateObj = new Date(dateStr);
	const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" };
	return dateObj.toLocaleDateString("en-US", options);
};
