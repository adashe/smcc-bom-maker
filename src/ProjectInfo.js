export function ProjectInfo({ projectInfo, totalPrice }) {
    return (
        <div className="info-box container">
            <div className="info-col">
                <div className="info-row">
                    <div className="info-label">Job Number: </div>
                    <div className="info-content">
                        {projectInfo.jobNum.toUpperCase()}
                    </div>
                </div>
                <div className="info-row">
                    <div className="info-label">Project:</div>
                    <div className="info-content">
                        {projectInfo.project.toUpperCase()}
                    </div>
                </div>
                <div className="info-row">
                    <div className="info-label">Customer: </div>
                    <div className="info-content">
                        {projectInfo.customer.toUpperCase()}
                    </div>
                </div>
                <div className="info-row">
                    <div className="info-label">Contact:</div>
                    <div className="info-content">
                        {projectInfo.contact.toUpperCase()}
                    </div>
                </div>
                <div className="info-row">
                    <div className="info-label">Engineer:</div>
                    <div className="info-content">
                        {projectInfo.engineer.toUpperCase()}
                    </div>
                </div>
            </div>

            <div className="info-col">
                <div className="info-row">
                    <div className="info-label">Ship Date:</div>
                    <div className="info-content">{projectInfo.shipDate}</div>
                </div>
                <div className="info-row">
                    <div className="info-label">Parts Due:</div>
                    <div className="info-content">
                        {projectInfo.partsDueDate}
                    </div>
                </div>
                <div className="info-row">
                    <div className="info-label">STC:</div>
                    <div className="info-content">{projectInfo.stc}</div>
                </div>
                <div className="info-row">
                    <div className="info-label">Total Price:</div>
                    <div className="info-content">${totalPrice.toFixed(2)}</div>
                </div>
            </div>
        </div>
    );
}
