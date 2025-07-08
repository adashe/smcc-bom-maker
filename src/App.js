import { useState } from "react";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { Forms } from "./Forms";
import { ProjectInfo } from "./ProjectInfo";
import { BomKitsView } from "./BomKitsView";
import { BomPartsView } from "./BomPartsView";
import { PDF } from "./PDF";
import { CSVButton } from "./CSV";

import kitsData from "./data/kits.json";
import partsData from "./data/parts.json";

export default function App() {
    let dateIn30Days = new Date();
    dateIn30Days.setDate(dateIn30Days.getDate() + 30);

    let dateIn60Days = new Date();
    dateIn60Days.setDate(dateIn60Days.getDate() + 60);

    const initialProjectInfo = {
        jobNum: "P21###",
        project: "West River Car Wash",
        customer: "Sonny's",
        contact: "Eric Ericson",
        engineer: "Azem Karaca",
        shipDate: dateIn30Days.toISOString().split("T")[0],
        partsDueDate: dateIn60Days.toISOString().split("T")[0],
        size: "small",
        stc: "32",
    };
    const initialAssem = {
        starter3hp: 0,
        starter5hp: 0,
        starter7hp: 0,
        starter10hp: 0,
        starter15hp: 0,
        starter25hp: 0,
        starter30hp: 0,
        vfd1hp: 0,
        vfd3hp: 0,
        vfd15hp: 0,
        vfd20hp: 0,
    };
    const [projectInfo, setProjectInfo] = useState(initialProjectInfo);
    const [assembly, setAssembly] = useState(initialAssem);
    const [basePrice, setBasePrice] = useState(100);
    const [totalPrice, setTotalPrice] = useState(basePrice);
    const [page, setPage] = useState("forms");

    function handleShowForms() {
        handleUpdateTotals();
        setPage("forms");
    }
    function handleShowBomKits() {
        handleUpdateTotals();
        setPage("kits");
    }

    function handleShowBomParts() {
        handleUpdateTotals();
        setPage("parts");
    }

    function handleShowPDF() {
        handleUpdateTotals();
        setPage("pdf");
    }

    function handleReset() {
        setProjectInfo(initialProjectInfo);
        setAssembly(initialAssem);
        setBasePrice(100);
        setTotalPrice(basePrice);
    }

    function handleChangeProjectInfo(e) {
        const { name, value } = e.target;

        setProjectInfo((previous) => ({
            ...previous,
            [name]: value,
        }));
    }

    function handleChange(e) {
        const { name, value } = e.target;

        setAssembly((previous) => ({
            ...previous,
            [name]: Number(value),
        }));
    }

    function handleUpdateTotals() {
        calcBasePrice();
        calcTotalPrice();
    }

    function calcBasePrice() {
        setBasePrice(100);
    }

    function calcTotalPrice() {
        let kitsPrice = 0;

        for (const kitID in assembly) {
            const quantity = assembly[kitID];
            const kitPrice = calcKitPrice(kitID);
            kitsPrice += kitPrice * quantity;
        }

        setTotalPrice(kitsPrice + basePrice);
    }

    function calcKitPrice(kitID) {
        const kArr = kitsData.filter((kit) => kit.id === kitID);
        const kit = kArr[0];
        let sum = 0;

        // Cycle through kit components, look up in partsData, sum cost
        kit.components.forEach((component) => {
            const pArr = partsData.filter((part) => part.id === component);
            const part = pArr[0];
            sum += part?.cost || 0;
        });
        return sum;
    }

    return (
        <div className="App">
            <Header />
            <Navigation
                page={page}
                handleShowForms={handleShowForms}
                handleShowBomKits={handleShowBomKits}
                handleShowBomParts={handleShowBomParts}
                handleShowPDF={handleShowPDF}
            >
                <CSVButton
                    kitsData={kitsData}
                    partsData={partsData}
                    assembly={assembly}
                />
            </Navigation>
            {page === "forms" && (
                <Forms
                    calcKitPrice={calcKitPrice}
                    basePrice={basePrice}
                    totalPrice={totalPrice}
                    handleChangeProjectInfo={handleChangeProjectInfo}
                    handleChange={handleChange}
                    handleUpdateTotals={handleUpdateTotals}
                    assembly={assembly}
                    projectInfo={projectInfo}
                    kitsData={kitsData}
                    handleReset={handleReset}
                />
            )}
            {page === "kits" && (
                <BomKitsView
                    assembly={assembly}
                    kitsData={kitsData}
                    partsData={partsData}
                    calcKitPrice={calcKitPrice}
                >
                    <ProjectInfo
                        projectInfo={projectInfo}
                        totalPrice={totalPrice}
                    />
                </BomKitsView>
            )}
            {page === "parts" && (
                <BomPartsView
                    assembly={assembly}
                    kitsData={kitsData}
                    partsData={partsData}
                >
                    <ProjectInfo
                        projectInfo={projectInfo}
                        totalPrice={totalPrice}
                    />
                </BomPartsView>
            )}
            {page === "pdf" && <PDF projectInfo={projectInfo} />}
        </div>
    );
}
