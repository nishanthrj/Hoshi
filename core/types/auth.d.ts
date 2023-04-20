type AdapterUser = import("next-auth/adapters").AdapterUser;
type Session = import("next-auth").Session;

interface Credentials {
	email: string;
	password: string;
}

interface User {
	id: string;
	username: string;
	email: string;
	password: string;
}

interface CustomAdapterUser extends AdapterUser {
	username: string;
}

interface CustomSession extends Session {
	user: {
		id: number | undefined;
		username: string | undefined;
		email: string | undefined;
		name?: string | null | undefined;
		image?: string | null | undefined;
	};
}
