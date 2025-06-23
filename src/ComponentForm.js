export function ComponentForm() {
    return (
        <form>
            <div>
                <label>
                    STC:
                    <select name="0">
                        <option value="stc-32">32</option>
                        <option value="stc-48">48</option>
                        <option value="stc-64">64</option>
                        <option value="stc-80">80</option>
                        <option value="stc-96">96</option>
                        <option value="stc-112">112</option>
                        <option value="stc-128">128</option>
                    </select>
                </label>
            </div>

            <div>
                <label>
                    1, 1.5, 2, and 2HP Starter / MSP:
                    <input type="number" name="1" />
                </label>
            </div>

            <div>
                <label>
                    5, 7.5, and 10HP Starter / MSP:
                    <input type="text" name="2" />
                </label>
            </div>

            <div>
                <label>
                    15HP Starter / MSP:
                    <input type="text" name="3" />
                </label>
            </div>

            <div>
                <label>
                    20, 25, 30, and 40HP Starter / MSP:
                    <input type="text" name="4" />
                </label>
            </div>

            <div>
                <label>
                    1 and 1.5HP VFD / MSP:
                    <input type="text" name="5" />
                </label>
            </div>

            <div>
                <label>
                    2 and 3HP VFD / MSP:
                    <input type="text" name="6" />
                </label>
            </div>

            <div>
                <label>
                    5HP VFD / MSP:
                    <input type="text" name="7" />
                </label>
            </div>

            <div>
                <label>
                    6 and 7.5HP VFD / MSP:
                    <input type="text" name="8" />
                </label>
            </div>

            <div>
                <label>
                    10HP VFD / MSP:
                    <input type="text" name="9" />
                </label>
            </div>

            <div>
                <label>
                    15HP VFD / MSP:
                    <input type="text" name="10" />
                </label>
            </div>

            <div>
                <label>
                    20HP VFD / MSP:
                    <input type="text" name="11" />
                </label>
            </div>

            <div>
                <label>
                    25, 30, and 40HP VFD / MSP:
                    <input type="text" name="12" />
                </label>
            </div>

            <div>
                <label>
                    3HP Breaker:
                    <input type="text" name="13" />
                </label>
            </div>

            <div>
                <label>
                    5HP Breaker:
                    <input type="text" name="14" />
                </label>
            </div>

            <div>
                <label>
                    7.5HP Breaker:
                    <input type="text" name="15" />
                </label>
            </div>

            <div>
                <label>
                    10HP Breaker:
                    <input type="text" name="16" />
                </label>
            </div>

            <div>
                <label>
                    15HP Breaker:
                    <input type="text" name="17" />
                </label>
            </div>
        </form>
    );
}
