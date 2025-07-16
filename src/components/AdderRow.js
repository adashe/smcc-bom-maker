export function AdderRow({ calcKitPrice, adder, adders, handleChangeAdders }) {
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
                        name={adder.id}
                        value={adders[adder.id]}
                        onFocus={handleSelect}
                        onChange={handleChangeAdders}
                        min={0}
                    />
                    {adder.description}
                </label>
            </div>
            <div className="col">${adder.price.toFixed(2)}</div>
        </div>
    );
}
