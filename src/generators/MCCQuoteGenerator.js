import { useState } from "react";

import { Header } from "../components/Header.js";
import { Navigation } from "../components/Navigation.js";
import { Button } from "../components/Button.js";
import { CSVButton } from "../pages/CSV.js";

import { ProjectInfo } from "../components/ProjectInfo.js";

import { Forms } from "../pages/Forms.js";
import { BomKitsView } from "../pages/BomKitsView.js";
import { BomPartsView } from "../pages/BomPartsView.js";
import { PDF } from "../pages/PDF.js";

export function MCCQuoteGenerator({
    title,
    kitsData,
    partsData,
    initialProjectInfo,
}) {
    const initialOptions = { size: "small", stc: "32" };

    // Build initial assembly object based on kits in kitsData
    const initialAssembly = kitsData.reduce((prev, curr) => {
        prev[curr.id] = 0;
        return prev;
    }, {});

    const [projectInfo, setProjectInfo] = useState(initialProjectInfo);
    const [options, setOptions] = useState(initialOptions);
    const [assembly, setAssembly] = useState(initialAssembly);
    const [basePrice, setBasePrice] = useState(100);
    const [totalPrice, setTotalPrice] = useState(basePrice);
    const [page, setPage] = useState("forms");

    function handleChangePage(page) {
        setPage(page);
    }

    function handleReset() {
        setProjectInfo(initialProjectInfo);
        setAssembly(initialAssembly);
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
    function handleChangeOptions(e) {
        const { name, value } = e.target;

        setOptions((previous) => ({
            ...previous,
            [name]: value,
        }));
    }

    function handleChangeAssembly(e) {
        const { name, value } = e.target;

        setAssembly((previous) => ({
            ...previous,
            [name]: Number(value),
        }));
    }

    function handleUpdateTotals() {
        let kitsPrice = 0;

        for (const kitID in assembly) {
            const quantity = assembly[kitID];
            const kitPrice = calcKitPrice(kitID);
            kitsPrice += kitPrice * quantity;
        }

        setTotalPrice(kitsPrice + basePrice);
    }

    // Calculate the price of each individual kit, for use in total price calculation and kits view
    function calcKitPrice(kitID) {
        const kArr = kitsData.filter((kit) => kit.id === kitID);
        const kit = kArr[0];
        let sum = 0;

        // Cycle through kit components array, use ID to look up in partsData, and sum the price
        kit.components.forEach((component) => {
            const pArr = partsData.filter((part) => part.id === component);
            const part = pArr[0];
            sum += part?.price || 0;
        });
        return sum;
    }

    return (
        <div className="page">
            <Header title={title} />
            <Navigation page={page}>
                <Button
                    isActive={page === "forms" ? "" : "active"}
                    handleClick={() => {
                        handleChangePage("forms");
                    }}
                >
                    INPUTS
                </Button>
                <Button
                    isActive={page === "kits" ? "" : "active"}
                    handleClick={() => {
                        handleChangePage("kits");
                    }}
                >
                    KITS VIEW
                </Button>
                <Button
                    isActive={page === "parts" ? "" : "active"}
                    handleClick={() => {
                        handleChangePage("parts");
                    }}
                >
                    PARTS VIEW
                </Button>
                <CSVButton
                    projectInfo={projectInfo}
                    kitsData={kitsData}
                    partsData={partsData}
                    assembly={assembly}
                />
            </Navigation>

            {page === "forms" && (
                <Forms
                    kitsData={kitsData}
                    projectInfo={projectInfo}
                    options={options}
                    assembly={assembly}
                    basePrice={basePrice}
                    totalPrice={totalPrice}
                    handleReset={handleReset}
                    handleChangeProjectInfo={handleChangeProjectInfo}
                    handleChangeOptions={handleChangeOptions}
                    handleChangeAssembly={handleChangeAssembly}
                    handleUpdateTotals={handleUpdateTotals}
                    calcKitPrice={calcKitPrice}
                />
            )}
            {page === "kits" && (
                <BomKitsView
                    kitsData={kitsData}
                    partsData={partsData}
                    assembly={assembly}
                    calcKitPrice={calcKitPrice}
                >
                    <ProjectInfo
                        projectInfo={projectInfo}
                        options={options}
                        totalPrice={totalPrice}
                    />
                </BomKitsView>
            )}
            {page === "parts" && (
                <BomPartsView
                    kitsData={kitsData}
                    partsData={partsData}
                    assembly={assembly}
                >
                    <ProjectInfo
                        projectInfo={projectInfo}
                        options={options}
                        totalPrice={totalPrice}
                    />
                </BomPartsView>
            )}
            {page === "pdf" && <PDF projectInfo={projectInfo} />}
        </div>
    );
}
