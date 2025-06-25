export function ComponentForm({ assembly, handleChange, calcKitPrice }) {
    function handleSelect(e) {
        e.target.select();
    }

    return (
        <form>
            <div className="component-row">
                <div className="option-col header">OPTION NAME</div>
                <div className="col header">MSP</div>
                <div className="col header">CONT.</div>
                <div className="col header">UNIT PRICE</div>
            </div>
            <div className="component-row">
                <div className="option-col">
                    <label>
                        <input
                            type="number"
                            name="starter2hp"
                            value={assembly.starter2hp}
                            onFocus={handleSelect}
                            onChange={handleChange}
                        />
                        1, 1.5, 2, and 2HP Starter / MSP
                    </label>
                </div>
                <div className="col">MSP</div>
                <div className="col">Cont.</div>
                <div className="col">
                    ${calcKitPrice("starter2hp").toFixed(2)}
                </div>
            </div>
            <div className="component-row">
                <div className="option-col">
                    <label>
                        <input
                            type="number"
                            name="starter10hp"
                            value={assembly.starter10hp}
                            onFocus={handleSelect}
                            onChange={handleChange}
                        />
                        5, 7.5, and 10HP Starter / MSP
                    </label>
                </div>

                <div className="col">MSP</div>
                <div className="col">Cont.</div>
                <div className="col">Unit Price</div>
            </div>
            <div className="component-row">
                <div className="option-col">
                    <label>
                        <input
                            type="number"
                            name="starter15hp"
                            value={assembly.starter15hp}
                            onFocus={handleSelect}
                            onChange={handleChange}
                        />
                        15HP Starter / MSP
                    </label>
                </div>

                <div className="col">MSP</div>
                <div className="col">Cont.</div>
                <div className="col">Unit Price</div>
            </div>
            <div className="component-row">
                <div className="option-col">
                    <label>
                        <input
                            type="number"
                            name="starter40hp"
                            value={assembly.starter40hp}
                            onFocus={handleSelect}
                            onChange={handleChange}
                        />
                        20, 25, 30, and 40HP Starter / MSP
                    </label>
                </div>

                <div className="col">MSP</div>
                <div className="col">Cont.</div>
                <div className="col">Unit Price</div>
            </div>
            <div className="component-row">
                <div className="option-col">
                    <label>
                        <input
                            type="number"
                            name="vfd1hp"
                            value={assembly.vfd1hp}
                            onFocus={handleSelect}
                            onChange={handleChange}
                        />
                        1 and 1.5HP VFD / MSP
                    </label>
                </div>

                <div className="col">MSP</div>
                <div className="col">Cont.</div>
                <div className="col">Unit Price</div>
            </div>
            <div className="component-row">
                <div className="option-col">
                    <label>
                        <input
                            type="number"
                            name="vfd3hp"
                            value={assembly.vfd3hp}
                            onFocus={handleSelect}
                            onChange={handleChange}
                        />
                        2 and 3HP VFD / MSP
                    </label>
                </div>

                <div className="col">MSP</div>
                <div className="col">Cont.</div>
                <div className="col">Unit Price</div>
            </div>
            <div className="component-row">
                <div className="option-col">
                    <label>
                        <input
                            type="number"
                            name="vfd5hp"
                            value={assembly.vfd5hp}
                            onFocus={handleSelect}
                            onChange={handleChange}
                        />
                        5HP VFD / MSP
                    </label>
                </div>

                <div className="col">MSP</div>
                <div className="col">Cont.</div>
                <div className="col">Unit Price</div>
            </div>
            <div className="component-row">
                <div className="option-col">
                    <label>
                        <input
                            type="number"
                            name="vfd7hp"
                            value={assembly.vfd7hp}
                            onFocus={handleSelect}
                            onChange={handleChange}
                        />
                        6 and 7.5HP VFD / MSP
                    </label>
                </div>

                <div className="col">MSP</div>
                <div className="col">Cont.</div>
                <div className="col">Unit Price</div>
            </div>
            <div className="component-row">
                <div className="option-col">
                    <label>
                        <input
                            type="number"
                            name="vfd10hp"
                            value={assembly.vfd10hp}
                            onFocus={handleSelect}
                            onChange={handleChange}
                        />
                        10HP VFD / MSP
                    </label>
                </div>

                <div className="col">MSP</div>
                <div className="col">Cont.</div>
                <div className="col">Unit Price</div>
            </div>
            <div className="component-row">
                <div className="option-col">
                    <label>
                        <input
                            type="number"
                            name="vfd15hp"
                            value={assembly.vfd15hp}
                            onFocus={handleSelect}
                            onChange={handleChange}
                        />
                        15HP VFD / MSP
                    </label>
                </div>

                <div className="col">MSP</div>
                <div className="col">Cont.</div>
                <div className="col">Unit Price</div>
            </div>
            <div className="component-row">
                <div className="option-col">
                    <label>
                        <input
                            type="number"
                            name="vfd20hp"
                            value={assembly.vfd20hp}
                            onFocus={handleSelect}
                            onChange={handleChange}
                        />
                        20HP VFD / MSP
                    </label>
                </div>

                <div className="col">MSP</div>
                <div className="col">Cont.</div>
                <div className="col">Unit Price</div>
            </div>
            <div className="component-row">
                <div className="option-col">
                    <label>
                        <input
                            type="number"
                            name="vfd40hp"
                            value={assembly.vfd40hp}
                            onFocus={handleSelect}
                            onChange={handleChange}
                        />
                        25, 30, and 40HP VFD / MSP
                    </label>
                </div>

                <div className="col">MSP</div>
                <div className="col">Cont.</div>
                <div className="col">Unit Price</div>
            </div>
            <div className="component-row">
                <div className="option-col">
                    <label>
                        <input
                            type="number"
                            name="breaker3hp"
                            value={assembly.breaker3hp}
                            onFocus={handleSelect}
                            onChange={handleChange}
                        />
                        3HP Breaker
                    </label>
                </div>

                <div className="col">MSP</div>
                <div className="col">Cont.</div>
                <div className="col">Unit Price</div>
            </div>
            <div className="component-row">
                <div className="option-col">
                    <label>
                        <input
                            type="number"
                            name="breaker5hp"
                            value={assembly.breaker5hp}
                            onFocus={handleSelect}
                            onChange={handleChange}
                        />
                        5HP Breaker
                    </label>
                </div>

                <div className="col">MSP</div>
                <div className="col">Cont.</div>
                <div className="col">Unit Price</div>
            </div>
            <div className="component-row">
                <div className="option-col">
                    <label>
                        <input
                            type="number"
                            name="breaker7hp"
                            value={assembly.breaker7hp}
                            onFocus={handleSelect}
                            onChange={handleChange}
                        />
                        7.5HP Breaker
                    </label>
                </div>

                <div className="col">MSP</div>
                <div className="col">Cont.</div>
                <div className="col">Unit Price</div>
            </div>
            <div className="component-row">
                <div className="option-col">
                    <label>
                        <input
                            type="number"
                            name="breaker10hp"
                            value={assembly.breaker10hp}
                            onFocus={handleSelect}
                            onChange={handleChange}
                        />
                        10HP Breaker
                    </label>
                </div>

                <div className="col">MSP</div>
                <div className="col">Cont.</div>
                <div className="col">Unit Price</div>
            </div>
            <div className="component-row">
                <div className="option-col">
                    <label>
                        <input
                            type="number"
                            name="breaker15hp"
                            value={assembly.breaker15hp}
                            onFocus={handleSelect}
                            onChange={handleChange}
                        />
                        15HP Breaker
                    </label>
                </div>

                <div className="col">MSP</div>
                <div className="col">Cont.</div>
                <div className="col">Unit Price</div>
            </div>{" "}
            */}
        </form>
    );
}

function ComponentRow({ kit, handleSelect, handleChange, calcKitPrice }) {
    return (
        <div className="component-row">
            <div className="option-col">
                <label>
                    <input
                        type="number"
                        name={kit.id}
                        value={kit.id}
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
