import axios from "axios";

export const debounce = (func: Function, timeout = 500) => {
	let timer: ReturnType<typeof setTimeout>;
	return (...args: any) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, timeout);
	};
};

export const deleteFromSet = function (set: Set<string>, item: string) {
	set.delete(item);
	return set;
};

export const getData = (page: number, filters: any) =>
	axios
		.get("http://127.0.0.1:8000/anime", { params: { page: page, ...filters } })
		.then((res) => res.data);
