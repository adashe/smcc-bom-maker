import { Button } from "./Button";

export function BomPartsView({
    assembly,
    kitsData,
    partsData,
    handleShowForms,
    handleShowBomKits,
}) {
    return (
        <div>
            <div>BoM Parts View</div>
            <Button handleClick={handleShowForms}>EDIT INPUTS</Button>
            <Button handleClick={handleShowBomKits}>BoM KITS VIEW</Button>
        </div>
    );
}
