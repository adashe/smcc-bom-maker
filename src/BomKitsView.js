import { Button } from "./Button";

export function BomKitsView({
    assembly,
    kitsData,
    partsData,
    handleShowForms,
    handleShowBomParts,
}) {
    const selectedKitsArr = kitsData.filter((kit) => assembly[kit.id] > 0);

    return (
        <div className="container bom-div">
            <div>BoM Kits View</div>
            <div>
                {selectedKitsArr.map((kit) => (
                    <KitBomRow
                        assembly={assembly}
                        kit={kit}
                        partsData={partsData}
                        key={kit.id}
                    />
                ))}
            </div>

            <div>
                <Button handleClick={handleShowForms}>EDIT INPUTS</Button>
                <Button handleClick={handleShowBomParts}>BoM PARTS VIEW</Button>
            </div>
        </div>
    );
}

function PartListItem({ component, partsData }) {
    const arr = partsData.filter((p) => p.id === component);
    const item = arr[0];

    return (
        <li className="bom-li">
            <div>{item.id}</div>
            <div>{item.description}</div>
            <div>${item.price}</div>
        </li>
    );
}

function PartsList({ components, partsData }) {
    return (
        <ul>
            {components.map((component) => (
                <PartListItem
                    component={component}
                    partsData={partsData}
                    key={component}
                />
            ))}
        </ul>
    );
}

function KitBomRow({ assembly, kit, partsData }) {
    return (
        <div className="bom-row">
            <div className="bom-row-header">
                <div>{kit.label}</div>
                <div>QTY: {assembly[kit.id]}</div>
            </div>

            <div>
                <PartsList components={kit.components} partsData={partsData} />
            </div>
        </div>
    );
}
