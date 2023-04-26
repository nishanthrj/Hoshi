import type { Metadata } from "next";
import { useNavbarStore } from "@/stores/navbar";
import AvatarForm from "@/components/settings/AvatarForm";
import UsernameForm from "@/components/settings/UsernameForm";
import PasswordForm from "@/components/settings/PasswordForm";

export const metadata: Metadata = {
	title: "Settings",
};

export default async function Settings() {
	useNavbarStore.setState({ currentPath: "/settings" });

	return (
		<main>
			<section className="my-12 w-full pl-4">
				<h1 className="px-12 pt-8 text-2xl font-bold text-dark-50">Settings</h1>
				<AvatarForm />
				<UsernameForm />
				<PasswordForm />
			</section>
		</main>
	);
}
