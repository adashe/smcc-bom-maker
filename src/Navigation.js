import { Button } from "./Button";

export function Navigation({
    page,
    handleShowForms,
    handleShowBomKits,
    handleShowBomParts,
    handleShowPDF,
    children,
}) {
    return (
        <div className="navigation">
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
                KITS VIEW
            </Button>
            <Button
                isActive={page === "parts" ? "" : "active"}
                handleClick={handleShowBomParts}
            >
                PARTS VIEW
            </Button>
            <Button
                isActive={page === "pdf" ? "" : "active"}
                handleClick={handleShowPDF}
            >
                PDF
            </Button>
            {children}
        </div>
    );
}
