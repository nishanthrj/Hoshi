export const deleteFromSet = function (set: Set<string>, item: string) {
	set.delete(item);
	return set;
};
