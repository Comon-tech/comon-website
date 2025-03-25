import Script from 'next/script'
import React from 'react'

function Analytics() {
    return (
        <>
            {/* Google tag (gtag.js) */}
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X12JY637ZG"></Script>
            <Script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-X12JY637ZG');
            </Script>
        </>
    )
}

export default Analytics
