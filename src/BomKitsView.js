export function BomKitsView({ assembly, kitsData, partsData, children }) {
    const selectedKitsArr = kitsData.filter((kit) => assembly[kit.id] > 0);

    return (
        <div className="container bom-div">
            {children}
            <h2>BoM Kits</h2>
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
        </div>
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

function PartListItem({ component, partsData }) {
    const arr = partsData.filter((p) => p.id === component);
    const item = arr[0];

    return (
        <li className="bom-li">
            <div>{item?.id}</div>
            <div>{item?.description}</div>
            <div>${item?.cost}</div>
        </li>
    );
}
