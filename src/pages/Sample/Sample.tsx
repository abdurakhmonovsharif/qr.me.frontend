import React from "react"
import { SampleHeader } from "./Header"
import { SectionTitle } from "./Section1"
import { Slider } from "./Slider"
import { SectionText } from "./Text"
import { BlockHeading } from "./Section2"
import { Contact } from "./Contact"
import { SampleFooter } from "./Footer"

export const Sample = () => {
    return <React.Fragment>
        <SampleHeader />
        <main>
            <SectionTitle />
            <Slider />
            <SectionText />
            <BlockHeading />
            <SectionText />
            <Contact />
        </main>
        <SampleFooter />
    </React.Fragment>
}