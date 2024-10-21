import "@coinbase/onchainkit/styles.css";
import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { getConfig } from "~/Constants/config/wagmiConfig";
import { Providers } from "~/Constants/providers/onchainProviders";

export const metadata: Metadata = {
  title: "Lanstellar",
  description: "Blockchain Land verification",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const initialState = cookieToInitialState(
    getConfig(),
    headers().get("cookie"),
  );
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Providers initialState={initialState}>{children}</Providers>
      </body>
    </html>
  );
}
