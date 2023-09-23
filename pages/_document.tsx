import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon.png"></link>
                <meta name="theme-color" content="#fff" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Web3Notifs" />
            </Head>
            <body className="min-h-screen">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
