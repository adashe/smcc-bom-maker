export function BomKitsView({
    assembly,
    kitsData,
    partsData,
    calcKitPrice,
    children,
}) {
    const selectedKitsArr = kitsData.filter((kit) => assembly[kit.id] > 0);

    return (
        <>
            {children}
            <div className="kit-bom-div">
                <h2>Kits View</h2>

                {selectedKitsArr.map((kit, i) => (
                    <KitBomRow
                        assembly={assembly}
                        kit={kit}
                        partsData={partsData}
                        key={i}
                        calcKitPrice={calcKitPrice}
                    />
                ))}
            </div>
        </>
    );
}

function KitBomRow({ assembly, kit, partsData, calcKitPrice }) {
    return (
        <div>
            <div className="kit-bom-row-header">
                <div className="wide-col">{kit.label.toUpperCase()}</div>
                <div>QTY: {assembly[kit.id]}</div>
                <div>KIT PRICE: ${calcKitPrice(kit.id).toFixed(2)}</div>
                <div>
                    TOTAL: $
                    {(calcKitPrice(kit.id) * assembly[kit.id]).toFixed(2)}
                </div>
            </div>

            <div>
                <PartsList
                    components={kit.components}
                    partsData={partsData}
                    kitQty={assembly[kit.id]}
                />
            </div>
        </div>
    );
}

function PartsList({ components, partsData, kitQty }) {
    /* Build an object from the kit parts array with the part numbers and their quantities */
    let kitBom = {};

    components.forEach((component) => {
        kitBom[component] = kitBom[component] + 1 || 1;
    });

    // Use the kitBom object to filter the partsData array
    const selectedPartsArr = partsData.filter((part) => kitBom[part.id] > 0);

    return (
        <ul>
            <li className="kit-bom-row">
                <div className="kit-bom-label">QTY</div>
                <div className="kit-bom-label med-col">NUMBER</div>
                <div className="kit-bom-label wide-col">DESCRIPTION</div>
                <div className="kit-bom-label">MANU.</div>
                <div className="kit-bom-label">PRICE</div>
                <div className="kit-bom-label">TOTAL</div>
            </li>
            {selectedPartsArr.map((component, i) => (
                <PartListItem
                    component={component}
                    quantity={kitBom[component.id]}
                    kitQty={kitQty}
                    key={i}
                />
            ))}
        </ul>
    );
}

function PartListItem({ component, quantity, kitQty }) {
    return (
        <li className="kit-bom-row">
            <div>{quantity * kitQty}</div>
            <div className="med-col">{component?.id || component}</div>
            <div className="wide-col">
                {component?.description || "Item not found in parts database"}
            </div>
            <div>{component?.manufacturer}</div>
            <div>${component?.cost.toFixed(2) || 0.0}</div>
            <div>
                ${(component?.cost * quantity * kitQty).toFixed(2) || 0.0}
            </div>
        </li>
    );
}
