export const checkUsername = async (username: string): Promise<boolean> => {
	const res = await fetch("/api/auth/validate/username", {
		method: "POST",
		headers: {
			Accept: "application.json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ username: username }),
	});

	const data = await res.json();

	return data.exists;
};

export const checkEmail = async (email: string): Promise<boolean> => {
	const res = await fetch("/api/auth/validate/email", {
		method: "POST",
		headers: {
			Accept: "application.json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email: email }),
	});

	const data = await res.json();

	return await data.exists;
};
