import { useState } from "react";
import { Sidebar } from "./components/Sidebar";

import { SMCCQuoteGenerator } from "./generators/SMCCQuoteGenerator";
import { EZMCCQuoteGenerator } from "./generators/EZMCCQuoteGenerator";
import { V208MCCQuoteGenerator } from "./generators/V208QuoteGenerator";
import { V460MCCQuoteGenerator } from "./generators/V460MCCQuoteGenerator";

export default function App() {
    const [generator, setGenerator] = useState("smcc");

    function handleChangeGenerator(generator) {
        setGenerator(generator);
    }

    return (
        <div className="App container">
            <Sidebar
                generator={generator}
                handleChangeGenerator={handleChangeGenerator}
            />
            {generator === "smcc" && <SMCCQuoteGenerator />}
            {generator === "ezmcc" && <EZMCCQuoteGenerator />}
            {generator === "208vmcc" && <V208MCCQuoteGenerator />}
            {generator === "460vmcc" && <V460MCCQuoteGenerator />}
        </div>
    );
}
