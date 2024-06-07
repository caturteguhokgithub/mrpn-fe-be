import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

import { Metadata } from "next";
import { CssBaseline } from "@mui/material";
import React from "react";
import "./globals.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { GlobalState, defaultInitGlobalState, GlobalStoreProvider } from "@/provider";
import { auth, UserData } from "@/config/authentication";
import { redirect } from "next/navigation";
import { instanceApi } from '@/config/apiClient'
import { EXSUM, KEBIJAKAN_OPTION, RKP_LEVEL } from "@/constants/system-parameter-constant";
// import Head from "next/head";

export const metadata: Metadata = {
	title: "MRPN 2024",
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: light)",
				url: "https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png",
				href:
					"https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png",
				href:
					"https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png",
			},
		],
	},
};

export default async function RootLayout(props: any) {

	const sessionAuth = await auth()
	if (sessionAuth == null) {
		redirect('/api/auth/signin')
	}
	const userData = sessionAuth?.user as UserData

	const projectLevel: string = await instanceApi(userData.token)
		.post("misc/system_parameter/getByModuleAndName", { module: EXSUM, name: RKP_LEVEL })
		.then(res => {
			return res.data == null ? "KP" : res.data.data;
		});

	const kebijakanOption: string[] = await instanceApi(userData.token)
		.post("misc/system_parameter/getByModuleAndName", { module: EXSUM, name: KEBIJAKAN_OPTION })
		.then(res => {
			return res.data == null ? [] : JSON.parse(res.data.data);
		});

	const globalState: GlobalState = {
		...defaultInitGlobalState,
		userdata: userData,
		project: {
			...defaultInitGlobalState.project,
			level: projectLevel
		},
		kebijakanOption: kebijakanOption
	}

	return (
		<>
			<html lang="en">
				{/* <Head>
     <link
      rel="icon"
      type="image/png"
      href="https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png"
     />
     <link
      rel="icon"
      href="https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png"
      type="image/png"
      sizes="32x32"
     />
    </Head> */}
				<body>
					<AppRouterCacheProvider>
						<ThemeProvider theme={theme}>
							<CssBaseline />
							<GlobalStoreProvider state={globalState}>
								{props.children}
							</GlobalStoreProvider>
						</ThemeProvider>
					</AppRouterCacheProvider>
				</body>
			</html>
		</>
	);
}
