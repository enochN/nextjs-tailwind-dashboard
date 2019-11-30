import React from "react";
import Document, {Head, Html, Main, NextScript} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html lang="en">
                <Head>

                    <title> PM2R Dashboard </title>
                    <meta charSet="UTF-8"/>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <meta name="description" content="A custom implementation of an existing design found online"/>
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                    <link rel="stylesheet" href="/static/styles/base.css"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
