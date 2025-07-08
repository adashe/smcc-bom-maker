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
        <div className="part-bom-div">
            {children}
            <h2>BoM Parts</h2>
            <div className="part-bom-row">
                <div>QTY</div>
                <div className="med-col">NUMBER</div>
                <div className="wide-col">DESCRIPTION</div>
                <div>MANU.</div>
                <div>PRICE</div>
                <div>TOTAL</div>
            </div>

            {selectedPartsArr.map((part) => (
                <PartsBomRow part={part} partsBom={partsBom} key={part.id} />
            ))}
        </div>
    );
}

function PartsBomRow({ part, partsBom }) {
    return (
        <div className="part-bom-row">
            <div>{partsBom[part.id]}</div>
            <div className="med-col">{part.id}</div>
            <div className="wide-col">{part.description}</div>
            <div>{part.manufacturer}</div>
            <div>${part.cost.toFixed(2)}</div>
            <div>${(part.cost * partsBom[part.id]).toFixed(2)}</div>
        </div>
    );
}
