export function ComponentForm({ assembly, setAssembly }) {
    function handleChange(e) {
        const { name, value } = e.target;
        setAssembly((previous) => ({
            ...previous,
            [name]: Number(value),
        }));
        console.log(assembly);
    }

    function handleSelect(e) {
        e.target.select();
    }

    return (
        <form>
            <div>
                <label>
                    STC:
                    <select name="stc">
                        <option value="stc32">32</option>
                        <option value="stc48">48</option>
                        <option value="stc64">64</option>
                        <option value="stc80">80</option>
                        <option value="stc96">96</option>
                        <option value="stc112">112</option>
                        <option value="stc128">128</option>
                    </select>
                </label>
            </div>

            <div>
                <label>
                    1, 1.5, 2, and 2HP Starter / MSP:
                    <input
                        type="number"
                        name="starter2hp"
                        value={assembly.starter2hp}
                        onFocus={handleSelect}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    5, 7.5, and 10HP Starter / MSP:
                    <input
                        type="number"
                        name="starter10hp"
                        value={assembly.starter10hp}
                        onFocus={handleSelect}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    15HP Starter / MSP:
                    <input
                        type="number"
                        name="starter15hp"
                        value={assembly.starter15hp}
                        onFocus={handleSelect}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    20, 25, 30, and 40HP Starter / MSP:
                    <input
                        type="number"
                        name="starter40hp"
                        value={assembly.starter40hp}
                        onFocus={handleSelect}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    1 and 1.5HP VFD / MSP:
                    <input
                        type="number"
                        name="vfd1hp"
                        value={assembly.vfd1hp}
                        onFocus={handleSelect}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    2 and 3HP VFD / MSP:
                    <input
                        type="number"
                        name="vfd3hp"
                        value={assembly.vfd3hp}
                        onFocus={handleSelect}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    5HP VFD / MSP:
                    <input
                        type="number"
                        name="vfd5hp"
                        value={assembly.vfd5hp}
                        onFocus={handleSelect}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    6 and 7.5HP VFD / MSP:
                    <input
                        type="number"
                        name="vfd7hp"
                        value={assembly.vfd7hp}
                        onFocus={handleSelect}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    10HP VFD / MSP:
                    <input
                        type="number"
                        name="vfd10hp"
                        value={assembly.vfd10hp}
                        onFocus={handleSelect}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    15HP VFD / MSP:
                    <input
                        type="number"
                        name="vfd15hp"
                        value={assembly.vfd15hp}
                        onFocus={handleSelect}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    20HP VFD / MSP:
                    <input
                        type="number"
                        name="vfd20hp"
                        value={assembly.vfd20hp}
                        onFocus={handleSelect}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    25, 30, and 40HP VFD / MSP:
                    <input
                        type="number"
                        name="vfd40hp"
                        value={assembly.vfd40hp}
                        onFocus={handleSelect}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    3HP Breaker:
                    <input
                        type="number"
                        name="breaker3hp"
                        value={assembly.breaker3hp}
                        onFocus={handleSelect}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    5HP Breaker:
                    <input
                        type="number"
                        name="breaker5hp"
                        value={assembly.breaker5hp}
                        onFocus={handleSelect}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    7.5HP Breaker:
                    <input
                        type="number"
                        name="breaker7hp"
                        value={assembly.breaker7hp}
                        onFocus={handleSelect}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    10HP Breaker:
                    <input
                        type="number"
                        name="breaker10hp"
                        value={assembly.breaker10hp}
                        onFocus={handleSelect}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    15HP Breaker:
                    <input
                        type="number"
                        name="breaker15hp"
                        value={assembly.breaker15hp}
                        onFocus={handleSelect}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </form>
    );
}
