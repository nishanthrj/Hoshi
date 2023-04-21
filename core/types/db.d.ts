export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
	public: {
		Tables: {
			user: {
				Row: {
					avatar: string | null;
					createdAt: string;
					email: string;
					id: string;
					password: string;
					username: string;
					verfied: boolean;
				};
				Insert: {
					avatar?: string | null;
					createdAt?: string;
					email: string;
					id: string;
					password: string;
					username: string;
					verfied?: boolean;
				};
				Update: {
					avatar?: string | null;
					createdAt?: string;
					email?: string;
					id?: string;
					password?: string;
					username?: string;
					verfied?: boolean;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
