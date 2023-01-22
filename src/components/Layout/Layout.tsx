import React from "react";

import { NavBar } from "./NavBar";
import { Config } from '../../utils/config'

import Head from "next/head";
import Script from "next/script";

export const Layout = () => {

    const OG_TITLE = "TheodoreTheFox <3";
    const OG_DESCRIPTION = "very amusing website. :D";
    const OG_FAVICON = "/favicon.ico";

    return (
        <>
            <Script src="https://use.fontawesome.com/d1341f9b7a.js"></Script>
            <Head>
                <title>{OG_TITLE}</title>
                <meta content={OG_TITLE} property="og:site_name" />
                <meta content={OG_TITLE} property="og:title" />
                <meta content={OG_DESCRIPTION} property="og:description" />
                <meta content={Config.url} property="og:url" />

                <meta content={Config.url} property="og:url" />
                <meta content={OG_TITLE} name="twitter:title" />
                <meta content={OG_DESCRIPTION} name="twitter:description" />
                <meta content={Config.url} name="twitter:url" />

                <link rel="icon" href={OG_FAVICON} />
            </Head>
            <NavBar />
        </>
    )
}
