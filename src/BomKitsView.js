export function BomKitsView({
    assembly,
    kitsData,
    partsData,
    calcKitPrice,
    children,
}) {
    const selectedKitsArr = kitsData.filter((kit) => assembly[kit.id] > 0);

    return (
        <div className="container bom-div">
            {children}
            <h2>BoM Kits</h2>
            <div>
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
        </div>
    );
}

function KitBomRow({ assembly, kit, partsData, calcKitPrice }) {
    return (
        <div className="bom-row">
            <div className="bom-row-header">
                <div>{kit.label}</div>
                <div>QTY: {assembly[kit.id]}</div>
                <div>KIT COST: ${calcKitPrice(kit.id).toFixed(2)}</div>
            </div>

            <div>
                <PartsList components={kit.components} partsData={partsData} />
            </div>
        </div>
    );
}

function PartsList({ components, partsData }) {
    return (
        <ul>
            {components.map((component, i) => (
                <PartListItem
                    component={component}
                    partsData={partsData}
                    key={i}
                />
            ))}
        </ul>
    );
}

function PartListItem({ component, partsData }) {
    const arr = partsData.filter((p) => p.id === component);
    const item = arr[0];

    return (
        <li className="kit-bom-row">
            <div>{item?.id}</div>
            <div className="wide-col">
                {item?.description || "Item not found in parts database"}
            </div>
            <div>{item?.manufacturer}</div>
            <div>${item?.cost.toFixed(2) || 0.0}</div>
        </li>
    );
}
