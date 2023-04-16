type AdapterUser = import("next-auth/adapters").AdapterUser;

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
