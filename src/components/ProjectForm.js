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
            </div>
            <div>
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
            </div>
            {children}
        </form>
    );
}
