export function BomPartsView({ assembly, kitsData, partsData, children }) {
    // Build a partsBom from the assembly object with the parts numbers and their quantities
    let partsBom = {};

    for (const k in assembly) {
        if (assembly[k] > 0) {
            const arr = kitsData.filter((kit) => kit.id === k);
            const kit = arr[0];
            kit.components.forEach(
                (component) =>
                    (partsBom[component] =
                        partsBom[component] + assembly[k] || assembly[k])
            );
        }
    }

    // Use the partsBom object to filter the partsData array
    const selectedPartsArr = partsData.filter((part) => partsBom[part.id] > 0);

    return (
        <div className="container bom-div">
            {children}
            <h2>BoM Parts</h2>

            <div className="bom-row">
                {selectedPartsArr.map((part) => (
                    <PartsBomRow
                        part={part}
                        partsBom={partsBom}
                        key={part.id}
                    />
                ))}
            </div>
        </div>
    );
}

function PartsBomRow({ part, partsBom }) {
    return (
        <div className="parts-bom-row">
            <div>{part.id}</div>
            <div className="wide-col">{part.description}</div>
            <div>{part.manufacturer}</div>
            <div>${part.cost.toFixed(2)}</div>
            <div>QTY: {partsBom[part.id]}</div>
        </div>
    );
}
