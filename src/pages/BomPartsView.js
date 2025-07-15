export function BomPartsView({ kitsData, partsData, assembly, children }) {
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
        <>
            {children}
            <div className="part-bom-div">
                <h2>Parts View</h2>
                <div className="part-bom-row">
                    <div className="part-bom-label">QTY</div>
                    <div className="part-bom-label med-col">PART NUM</div>
                    <div className="part-bom-label wide-col">DESCRIPTION</div>
                    <div className="part-bom-label">MANU</div>
                    <div className="part-bom-label">PRICE</div>
                    <div className="part-bom-label">TOTAL</div>
                </div>

                {selectedPartsArr.map((part) => (
                    <PartsBomRow
                        part={part}
                        partsBom={partsBom}
                        key={part.id}
                    />
                ))}
            </div>
        </>
    );
}

function PartsBomRow({ part, partsBom }) {
    return (
        <div className="part-bom-row">
            <div>{partsBom[part.id]}</div>
            <div className="med-col">{part.id}</div>
            <div className="wide-col">{part.description}</div>
            <div>{part.manufacturer}</div>
            <div>${part.price.toFixed(2)}</div>
            <div>${(part.price * partsBom[part.id]).toFixed(2)}</div>
        </div>
    );
}
