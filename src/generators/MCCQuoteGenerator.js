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
    generator,
    title,
    kitsData,
    addersData,
    partsData,
    initialProjectInfo,
}) {
    const initialOptions = { size: "small", stc: "32" };

    // Build initial assembly object based on kits in kitsData
    const initialAssembly = kitsData.reduce((prev, curr) => {
        prev[curr.id] = 0;
        return prev;
    }, {});

    // Build initial adders object based on adders in addersData
    const initialAdders = addersData.reduce((prev, curr) => {
        prev[curr.id] = 0;
        return prev;
    }, {});

    const [projectInfo, setProjectInfo] = useState(initialProjectInfo);
    const [options, setOptions] = useState(initialOptions);
    const [assembly, setAssembly] = useState(initialAssembly);
    const [adders, setAdders] = useState(initialAdders);
    const [basePrice, setBasePrice] = useState(100);
    const [totalPrice, setTotalPrice] = useState(basePrice);
    const [page, setPage] = useState("forms");

    function handleChangePage(page) {
        setPage(page);
    }

    function handleReset() {
        setProjectInfo(initialProjectInfo);
        setAssembly(initialAssembly);
        setAdders(initialAdders);
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

    function handleChangeAdders(e) {
        const { name, value } = e.target;

        setAdders((previous) => ({
            ...previous,
            [name]: Number(value),
        }));
    }

    function handleUpdateTotals() {
        let price = 0;

        for (const kitID in assembly) {
            const quantity = assembly[kitID];
            const kitPrice = calcKitPrice(kitID);
            price += kitPrice * quantity;
        }

        for (const adderID in adders) {
            const quantity = adders[adderID];
            const adderPrice = calcAdderPrice(adderID);
            price += adderPrice * quantity;
        }

        setTotalPrice(price + basePrice);
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

    // Calculate the price of each individual adder, for use in total price calculation and kits view
    function calcAdderPrice(adderID) {
        const aArr = addersData.filter((adder) => adder.id === adderID);
        const adder = aArr[0];
        let sum = 0;

        // Cycle through kit components array, use ID to look up in partsData, and sum the price
        adder.components.forEach((component) => {
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
                    generator={generator}
                    kitsData={kitsData}
                    addersData={addersData}
                    projectInfo={projectInfo}
                    options={options}
                    assembly={assembly}
                    adders={adders}
                    basePrice={basePrice}
                    totalPrice={totalPrice}
                    handleReset={handleReset}
                    handleChangeProjectInfo={handleChangeProjectInfo}
                    handleChangeOptions={handleChangeOptions}
                    handleChangeAssembly={handleChangeAssembly}
                    handleChangeAdders={handleChangeAdders}
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
