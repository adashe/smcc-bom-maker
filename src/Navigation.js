import { Button } from "./Button";

export function Navigation({
    page,
    handleShowForms,
    handleShowBomKits,
    handleShowBomParts,
    handleShowPDF,
}) {
    return (
        <div>
            <Button
                isActive={page === "forms" ? "" : "active"}
                handleClick={handleShowForms}
            >
                INPUTS
            </Button>
            <Button
                isActive={page === "kits" ? "" : "active"}
                handleClick={handleShowBomKits}
            >
                BoM KITS
            </Button>
            <Button
                isActive={page === "parts" ? "" : "active"}
                handleClick={handleShowBomParts}
            >
                BoM PARTS
            </Button>
            <Button
                isActive={page === "pdf" ? "" : "active"}
                handleClick={handleShowPDF}
            >
                PDF
            </Button>
        </div>
    );
}
