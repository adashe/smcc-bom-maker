import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { MCCQuoteGenerator } from "./generators/MCCQuoteGenerator";

import SMCCKitsData from "./data/smccKits.json";
import SMCCPartsData from "./data/smccParts.json";

import v208MCCKitsData from "./data/v208mccKits.json";
import mccAddersData from "./data/mccAdders.json";

export default function App() {
    const [generator, setGenerator] = useState("208vmcc");

    function handleChangeGenerator(generator) {
        setGenerator(generator);
    }

    // Build initial project info objects for each generator
    let dateIn30Days = new Date();
    dateIn30Days.setDate(dateIn30Days.getDate() + 30);

    let dateIn60Days = new Date();
    dateIn60Days.setDate(dateIn60Days.getDate() + 60);

    const SMCCInitialProjectInfo = {
        p21Num: "P21###",
        projectName: "West River Car Wash",
        customer: "Sonny's",
        contact: "Eric Ericson",
        engineer: "Azem Karaca",
        shipDate: dateIn30Days.toISOString().split("T")[0],
        partsDueDate: dateIn60Days.toISOString().split("T")[0],
    };

    return (
        <div className="App container">
            <Sidebar
                generator={generator}
                handleChangeGenerator={handleChangeGenerator}
            />
            {generator === "smcc" && (
                <MCCQuoteGenerator
                    generator={generator}
                    title={"SMCC Quote Generator"}
                    kitsData={SMCCKitsData}
                    addersData={mccAddersData}
                    partsData={SMCCPartsData}
                    initialProjectInfo={SMCCInitialProjectInfo}
                />
            )}
            {generator === "ezmcc" && (
                <MCCQuoteGenerator
                    generator={generator}
                    title={"EZMCC Quote Generator"}
                    kitsData={SMCCKitsData}
                    addersData={mccAddersData}
                    partsData={SMCCPartsData}
                    initialProjectInfo={SMCCInitialProjectInfo}
                />
            )}
            {generator === "208vmcc" && (
                <MCCQuoteGenerator
                    generator={generator}
                    title={"208V Quote Generator"}
                    kitsData={v208MCCKitsData}
                    addersData={mccAddersData}
                    partsData={SMCCPartsData}
                    initialProjectInfo={SMCCInitialProjectInfo}
                />
            )}
            {generator === "460vmcc" && (
                <MCCQuoteGenerator
                    generator={generator}
                    title={"460V Quote Generator"}
                    kitsData={v208MCCKitsData}
                    addersData={mccAddersData}
                    partsData={SMCCPartsData}
                    initialProjectInfo={SMCCInitialProjectInfo}
                />
            )}
        </div>
    );
}
