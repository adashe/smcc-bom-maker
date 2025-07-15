export function ComponentRow({
    calcKitPrice,
    kit,
    assembly,
    handleChangeAssembly,
}) {
    // Select the entire value when user clicks in the input box (for easier editing)
    function handleSelect(e) {
        e.target.select();
    }

    return (
        <div className="component-row">
            <div className="option-col">
                <label>
                    <input
                        type="number"
                        name={kit.id}
                        value={assembly[kit.id]}
                        onFocus={handleSelect}
                        onChange={handleChangeAssembly}
                        min={0}
                    />
                    {kit.label}
                </label>
            </div>

            <div className="col">MSP</div>
            <div className="col">Cont.</div>
            <div className="col">${calcKitPrice(kit.id).toFixed(2)}</div>
        </div>
    );
}
