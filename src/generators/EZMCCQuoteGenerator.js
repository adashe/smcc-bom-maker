import { useState } from "react";

import { Header } from "../components/Header";
import { Navigation } from "../components/Navigation";
import { Button } from "../components/Button.js";
import { CSVButton } from "../pages/CSV.js";

import kitsData from "../data/kits.json";
import partsData from "../data/parts.json";

export function EZMCCQuoteGenerator() {
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

    const [assembly, setAssembly] = useState(initialAssem);
    const [page, setPage] = useState("forms");

    function handleChangePage(page) {
        setPage(page);
    }

    return (
        <div className="page">
            <Header title={"EZMCC Quote Generator"} />
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
                    kitsData={kitsData}
                    partsData={partsData}
                    assembly={assembly}
                />
            </Navigation>
        </div>
    );
}
