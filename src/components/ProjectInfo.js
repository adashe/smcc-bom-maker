export function ProjectInfo({ projectInfo, totalPrice }) {
    // Convert dates to midnight at user's local timezone to avoid timezone errors
    const shipDateString = `${projectInfo.shipDate}T00:00:00`;
    const shipDate = new Date(shipDateString).toLocaleDateString();

    const partsDateString = `${projectInfo.partsDueDate}T00:00:00`;
    const partsDueDate = new Date(partsDateString).toLocaleDateString();

    return (
        <div className="info-box">
            <div className="info-col">
                <div className="info-row">
                    <div className="info-label">P21 Number: </div>
                    <div className="info-content">
                        {projectInfo.p21Num.toUpperCase()}
                    </div>
                </div>
                <div className="info-row">
                    <div className="info-label">Project Name:</div>
                    <div className="info-content">
                        {projectInfo.projectName.toUpperCase()}
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
                    <div className="info-content">{shipDate}</div>
                </div>
                <div className="info-row">
                    <div className="info-label">Parts Due:</div>
                    <div className="info-content">{partsDueDate}</div>
                </div>
                <div className="info-row">
                    <div className="info-label">Size:</div>
                    <div className="info-content">
                        {projectInfo.size.toUpperCase()}
                    </div>
                </div>
                <div className="info-row">
                    <div className="info-label">STC:</div>
                    <div className="info-content">STC-{projectInfo.stc}</div>
                </div>
                <div className="info-row">
                    <div className="info-label">Total Price:</div>
                    <div className="info-content">${totalPrice.toFixed(2)}</div>
                </div>
            </div>
        </div>
    );
}
