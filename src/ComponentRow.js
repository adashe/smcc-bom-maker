export function ComponentRow({ kit, assembly, handleChange }) {
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
                        onChange={handleChange}
                        min={0}
                    />
                    {kit.label}
                </label>
            </div>

            <div className="col">MSP</div>
            <div className="col">Cont.</div>
            <div className="col">${kit.price}</div>
        </div>
    );
}
