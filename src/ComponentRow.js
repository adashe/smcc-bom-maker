export function ComponentRow({ kit, assembly, handleChange, calcKitPrice }) {
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
                        value={assembly.id}
                        onFocus={handleSelect}
                        onChange={handleChange}
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
