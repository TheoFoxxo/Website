import React from "react";
import { NavBar } from "./NavBar";
import { Config } from '../../utils/config'

import Head from "next/head";
import Script from "next/script";
import { motion } from "framer-motion";

import { useRouter } from "next/router";

export default function Layout({ children }: any) {

    const nextRouter = useRouter();

    const OG_TITLE = `${nextRouter.pathname} - TheodoreTheFox <3`;
    const __OG_TITLE = `TheodoreTheFox <3`
    const OG_DESCRIPTION = "very amusing website. :D";
    let OG_FAVICON = "/vercel/favicon.ico";

    const lazyv2 = `${Config.url}${nextRouter.pathname}`;

   if (Config.hornyshit) { // iima start adding things like this
     const CurrentDate = new Date("June 1");
     if (CurrentDate.getMonth() == 6 && CurrentDate.getDate() == 1){
             OG_FAVICON = "/rainbow.ico";
             console.log("It's Pride Month, and I love y'all =w=")
     } else {
         OG_FAVICON = "/paw.ico";
     } 
   }
    return (
        <>
            <NavBar />
            <motion.div
                initial={{ opacity: 0, y: 90 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 90 }}
            //transition={{ ease: "backIn"}}
            >
                <Script src="https://use.fontawesome.com/d1341f9b7a.js"></Script>
                <Head>
                    <title>{__OG_TITLE}</title>
                    <meta content={OG_TITLE} property="og:site_name" />
                    <meta content={OG_TITLE} property="og:title" />
                    <meta content={OG_DESCRIPTION} property="og:description" />
                    <meta content={lazyv2} property="og:url" />

                    <meta content={lazyv2} property="og:url" />
                    <meta content={OG_TITLE} name="twitter:title" />
                    <meta content={OG_DESCRIPTION} name="twitter:description" />
                    <meta content={lazyv2} name="twitter:url" />

                    <link rel="icon" href={OG_FAVICON} />
                </Head>
                {children}
            </motion.div>
        </>
    )
}
