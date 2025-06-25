export function ProjectForm() {
    return (
        <form>
            <div>
                <label>
                    Job Number:
                    <input type="text" name="job-num" />
                </label>
            </div>

            <div>
                <label>
                    Project:
                    <input type="text" name="project" />
                </label>
            </div>

            <div>
                <label>
                    Customer:
                    <input type="text" name="customer" />
                </label>
            </div>

            <div>
                <label>
                    Contact:
                    <input type="text" name="contact" />
                </label>
            </div>

            <div>
                <label>
                    Engineer:
                    <input type="text" name="engineer" />
                </label>
            </div>

            <div>
                <label>
                    Ship Date:
                    <input type="text" name="ship-date" />
                </label>
            </div>

            <div>
                <label>
                    Parts Due Date:
                    <input type="text" name="parts-due-date" />
                </label>
            </div>

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
        </form>
    );
}
