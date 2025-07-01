import { Button } from "./Button";

export function Navigation({
    handleReset,
    handleShowForms,
    handleShowBomKits,
    handleShowBomParts,
    handleShowPDF,
}) {
    return (
        <div>
            <Button handleClick={handleReset}>RESET FORM</Button>
            <Button handleClick={handleShowForms}>EDIT INPUTS</Button>
            <Button handleClick={handleShowBomKits}>BoM KITS VIEW</Button>
            <Button handleClick={handleShowBomParts}>BoM PARTS VIEW</Button>
            <Button handleClick={handleShowPDF}>PRINT PDF</Button>
        </div>
    );
}
