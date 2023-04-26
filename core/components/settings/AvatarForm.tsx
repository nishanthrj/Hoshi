"use client";

import { useSupabase } from "@/supabase/provider";
import Image from "next/image";
import { useEffect, useState } from "react";
import ButtonLoading from "@/components/common/ButtonLoading";

export default function AvatarForm() {
	const { supabase } = useSupabase();

	const [avatar, setAvatar] = useState<string>("");
	const [file, setFile] = useState<File | null>(null);
	const [imageUrl, setImageUrl] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const setSessionData = async () => {
			const { data } = await supabase.auth.getSession();
			setAvatar(data.session?.user.user_metadata.avatar);
		};

		setSessionData();
	});

	const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e?.target?.files?.[0] || null;
		if (selectedFile) {
			if (selectedFile.size > 3 * 1024 * 1024) {
				setError("Please choose a file that is smaller than 3MB.");
				return;
			}
			if (!["image/jpeg", "image/png"].includes(selectedFile.type)) {
				setError("Please choose a JPEG or PNG file.");
				return;
			}
		}
		setFile(selectedFile);

		const imageUrl = selectedFile && URL.createObjectURL(selectedFile);
		setImageUrl(imageUrl);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		if (file) {
			const { data: userSession } = await supabase.auth.getSession();
			const filename = `${userSession.session?.user.id}.${file?.type.split("/").pop()}`;

			const { data, error } = await supabase.storage.from("avatars").upload(filename, file, {
				cacheControl: "3600",
				upsert: true,
			});

			if (error) {
				setError("Error uploading avatar");
			} else {
				const avatarUrl = `https://fxwjqggdvzhwhieoqzmq.supabase.co/storage/v1/object/public/avatars/${data.path}`;
				await supabase.auth.updateUser({
					data: { avatar: avatarUrl },
				});
			}
		}
		await supabase.auth.refreshSession();
		setLoading(false);
		setSuccess(true);
		setTimeout(() => window.location.reload(), 2000);
	};

	return (
		<div className="mt-10 w-[min(70rem,100%)] px-12 text-dark-100">
			<h1 className="mb-8 text-xl font-medium uppercase tracking-wide">Avatar</h1>
			<form
				method="POST"
				className="flex flex-col"
				encType="multipart/form-data"
				onSubmit={handleSubmit}>
				<span className="-mt-6 mb-4 text-xs text-dark-200">
					Allowed Formats: JPEG, PNG. Max Size: 3mb. Optimal Dimensions: 250x250
				</span>
				<div className="flex flex-wrap gap-x-10 gap-y-10">
					<div className="relative mr-5 inline-flex h-52 w-52 cursor-pointer items-center justify-center bg-dark-600 px-5 py-4 text-lg text-dark-300 outline-dashed outline-2 -outline-offset-8 outline-dark-300">
						<input
							name="avatar"
							type="file"
							accept="image/jpeg,image/png"
							onChange={handleFileSelect}
							className="absolute h-52 w-full cursor-pointer overflow-hidden opacity-0"
						/>
						<p className="py-12 text-center text-sm">Drop image or click to upload</p>
					</div>
					<div className="flex flex-col items-center justify-center">
						<Image
							src={imageUrl || avatar}
							alt=""
							width={200}
							height={200}
							className="h-52 w-52"
						/>
						<p className="mt-4 text-center text-sm text-dark-200">
							{imageUrl ? "Selected Avatar" : "Current Avatar"}
						</p>
					</div>
				</div>
				{error && <span className="mt-2 text-xs text-red-400">{error}</span>}
				{success && (
					<span className="mt-2 text-xs text-green-400">
						Avatar updated successfully!
					</span>
				)}
				<button
					type="submit"
					className="mt-4 flex h-12 w-52 items-center justify-center rounded-md border-none bg-dark-400 p-3 text-sm font-bold uppercase tracking-widest text-dark-50 transition-all duration-300 hover:brightness-125">
					{loading && <ButtonLoading />}
					{loading ? "Saving..." : "Save"}
				</button>
			</form>
		</div>
	);
}
