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

export const deleteFromSet = function (set: Set<string>, item: string) {
	set.delete(item);
	return set;
};

export const getImageUrl = function (src: string, width: number, quality: number) {
	const params = ["c_fit", `w_${width}`, "f_auto", `q_${quality || "auto"}`];
	return `https://res.cloudinary.com/dkziuw7g2/image/fetch/${params.join(",")}/${src}`;
};
