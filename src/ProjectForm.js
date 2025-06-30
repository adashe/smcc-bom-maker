export function ProjectForm({ projectInfo, handleChangeProjectInfo }) {
    return (
        <form>
            <div>
                <label>
                    Job Number:
                    <input
                        type="text"
                        name="jobNum"
                        value={projectInfo.jobNum}
                        onChange={handleChangeProjectInfo}
                    />
                </label>
            </div>

            <div>
                <label>
                    Project:
                    <input
                        type="text"
                        name="project"
                        value={projectInfo.project}
                        onChange={handleChangeProjectInfo}
                    />
                </label>
            </div>

            <div>
                <label>
                    Customer:
                    <input
                        type="text"
                        name="customer"
                        value={projectInfo.customer}
                        onChange={handleChangeProjectInfo}
                    />
                </label>
            </div>

            <div>
                <label>
                    Contact:
                    <input
                        type="text"
                        name="contact"
                        value={projectInfo.contact}
                        onChange={handleChangeProjectInfo}
                    />
                </label>
            </div>

            <div>
                <label>
                    Engineer:
                    <input
                        type="text"
                        name="engineer"
                        value={projectInfo.engineer}
                        onChange={handleChangeProjectInfo}
                    />
                </label>
            </div>

            <div>
                <label>
                    Ship Date:
                    <input
                        type="text"
                        name="shipDate"
                        value={projectInfo.shipDate}
                        onChange={handleChangeProjectInfo}
                    />
                </label>
            </div>

            <div>
                <label>
                    Parts Due Date:
                    <input
                        type="text"
                        name="partsDueDate"
                        value={projectInfo.partsDueDate}
                        onChange={handleChangeProjectInfo}
                    />
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
