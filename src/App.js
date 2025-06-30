import { useState } from "react";
import { Header } from "./Header";
import { Forms } from "./Forms";
import { BomKitsView } from "./BomKitsView";
import { BomPartsView } from "./BomPartsView";
import kitsData from "./data/kits.json";
import partsData from "./data/parts.json";
import { ProjectInfo } from "./ProjectInfo";
import { PDF } from "./PDF";

export default function App() {
    const initialProjectInfo = {
        jobNum: "12345",
        project: "abcd",
        customer: "me",
        contact: "you",
        engineer: "azem",
        shipDate: "tomorrow",
        partsDueDate: "yesterday",
    };
    const initialAssem = {
        starter3hp: 0,
        starter10hp: 0,
        starter15hp: 0,
        starter40hp: 0,
        vfd1hp: 0,
        vfd3hp: 0,
        vfd5hp: 0,
        vfd7hp: 0,
        vfd10hp: 0,
        vfd15hp: 0,
        vfd20hp: 0,
        vfd40hp: 0,
        breaker3hp: 0,
        breaker5hp: 0,
        breaker7hp: 0,
        breaker10hp: 0,
        breaker15hp: 0,
    };
    const [projectInfo, setProjectInfo] = useState(initialProjectInfo);
    const [assembly, setAssembly] = useState(initialAssem);
    const [basePrice, setBasePrice] = useState(100);
    const [totalPrice, setTotalPrice] = useState(basePrice);
    const [totalFLA, setTotalFLA] = useState(0);
    const [page, setPage] = useState("forms");

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

    function handleShowForms() {
        handleUpdateTotals();
        setPage("forms");
    }

    function handleReset() {
        setProjectInfo(initialProjectInfo);
        setAssembly(initialAssem);
        setBasePrice(100);
        setTotalPrice(basePrice);
        setTotalFLA(0);
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
        calcTotalFLA();
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
        const arr = kitsData.filter((kit) => kit.id === kitID);
        const kit = arr[0];
        return kit.price;
    }

    function calcTotalFLA() {
        let kitsFLA = 0;

        for (const kitID in assembly) {
            const quantity = assembly[kitID];
            const kitFLA = calcKitFLA(kitID);
            kitsFLA += kitFLA * quantity;
        }
        setTotalFLA(kitsFLA);
    }

    function calcKitFLA(kitID) {
        const arr = kitsData.filter((kit) => kit.id === kitID);
        const kit = arr[0];
        return kit.fla;
    }

    return (
        <div className="App">
            <Header />
            {page === "forms" && (
                <Forms
                    basePrice={basePrice}
                    totalPrice={totalPrice}
                    totalFLA={totalFLA}
                    handleReset={handleReset}
                    handleChangeProjectInfo={handleChangeProjectInfo}
                    handleChange={handleChange}
                    handleUpdateTotals={handleUpdateTotals}
                    assembly={assembly}
                    projectInfo={projectInfo}
                    kitsData={kitsData}
                    handleShowBomKits={handleShowBomKits}
                    handleShowBomParts={handleShowBomParts}
                    handleShowPDF={handleShowPDF}
                />
            )}
            {page === "kits" && (
                <BomKitsView
                    assembly={assembly}
                    kitsData={kitsData}
                    partsData={partsData}
                    handleShowForms={handleShowForms}
                    handleShowBomParts={handleShowBomParts}
                    handleShowPDF={handleShowPDF}
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
                    handleShowForms={handleShowForms}
                    handleShowBomKits={handleShowBomKits}
                    handleShowPDF={handleShowPDF}
                >
                    <ProjectInfo
                        projectInfo={projectInfo}
                        totalPrice={totalPrice}
                    />
                </BomPartsView>
            )}
            {page === "pdf" && (
                <PDF
                    projectInfo={projectInfo}
                    handleShowForms={handleShowForms}
                    handleShowBomKits={handleShowBomKits}
                    handleShowBomParts={handleShowBomParts}
                />
            )}
        </div>
    );
}
