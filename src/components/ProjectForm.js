export function ProjectForm({
    projectInfo,
    handleChangeProjectInfo,
    children,
}) {
    return (
        <form className="project-form">
            <div>
                <div>
                    <label>
                        P21 Number:
                        <input
                            type="text"
                            name="p21Num"
                            value={projectInfo.p21Num}
                            onChange={handleChangeProjectInfo}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Project Name:
                        <input
                            type="text"
                            name="projectName"
                            value={projectInfo.projectName}
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
            </div>
            <div>
                <div>
                    <label>
                        Ship Date:
                        <input
                            type="date"
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
                            type="date"
                            name="partsDueDate"
                            value={projectInfo.partsDueDate}
                            onChange={handleChangeProjectInfo}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Size:
                        <select
                            name="size"
                            value={projectInfo.size}
                            onChange={handleChangeProjectInfo}
                        >
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="xlarge">Extra Large</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label>
                        STC:
                        <select
                            name="stc"
                            value={projectInfo.stc}
                            onChange={handleChangeProjectInfo}
                        >
                            <option value="32">32</option>
                            <option value="48">48</option>
                            <option value="64">64</option>
                            <option value="80">80</option>
                            <option value="96">96</option>
                            <option value="112">112</option>
                            <option value="128">128</option>
                        </select>
                    </label>
                </div>
            </div>
            {children}
        </form>
    );
}
