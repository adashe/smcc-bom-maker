import { Button } from "./Button";
import { Letterhead } from "./Letterhead";

export function PDF({
    projectInfo,
    handleShowForms,
    handleShowBomKits,
    handleShowBomParts,
}) {
    return (
        <div>
            <Letterhead />
            <PDFProjectInfo projectInfo={projectInfo} />
            <PDFShippingInfo />
            <PDFItemization />
            <div>
                <Button handleClick={handleShowForms}>EDIT INPUTS</Button>
                <Button handleClick={handleShowBomKits}>BoM KITS VIEW</Button>
                <Button handleClick={handleShowBomParts}>BoM PARTS VIEW</Button>
            </div>
        </div>
    );
}

function PDFProjectInfo({ projectInfo }) {
    const date = new Date();
    let dateIn30Days = new Date();
    dateIn30Days.setDate(dateIn30Days.getDate() + 30);

    return (
        <div className="container">
            <div className="pdf-col">
                <div className="pdf-row">
                    <div className="pdf-label">To:</div>
                    <div>{projectInfo.contact.toUpperCase()}</div>
                </div>
            </div>
            <div className="pdf-col">
                <div className="pdf-row">
                    <div className="pdf-label">Salesperson:</div>
                    <div>YOUR NAME HERE</div>
                </div>
                <div className="pdf-row">
                    <div className="pdf-label">Project Name:</div>
                    <div>{projectInfo.project.toUpperCase()}</div>
                </div>
                <div className="pdf-row">
                    <div className="pdf-label">Quote ID:</div>
                    <div>####??</div>
                </div>
                <div className="pdf-row">
                    <div className="pdf-label">Quoted On:</div>
                    <div>{date.toLocaleDateString()}</div>
                </div>
                <div className="pdf-row">
                    <div className="pdf-label">Valid Until:</div>
                    <div>{dateIn30Days.toLocaleDateString()}</div>
                </div>
            </div>
        </div>
    );
}

function PDFShippingInfo() {
    return (
        <div className="container">
            <form className="shipping-form">
                <div className="shipping-col">
                    <label>
                        SHIPPING METHOD
                        <input type="text"></input>
                    </label>
                </div>
                <div className="shipping-col">
                    <label>
                        SHIPPING TERMS
                        <input type="text"></input>
                    </label>
                </div>
                <div className="shipping-col">
                    <label>
                        ESTIMATED DELIVERY
                        <input type="text"></input>
                    </label>
                </div>
                <div className="shipping-col">
                    <label>
                        PAYMENT TERMS
                        <input type="text"></input>
                    </label>
                </div>
                <div className="shipping-col">
                    <label>
                        FREIGHT
                        <input type="text"></input>
                    </label>
                </div>
            </form>
        </div>
    );
}

function PDFItemization() {
    return (
        <div className="container">
            <form className="itemization-form">
                <div className="itemization-row">
                    <div className="itemization-col">Quantity</div>
                    <div className="itemization-col item-desc">Description</div>
                    <div className="itemization-col">Unit Price</div>
                    <div className="itemization-col">Line Total</div>
                </div>
                <div className="itemization-row">
                    <div className="itemization-col">
                        <label>
                            <input type="number"></input>
                        </label>
                    </div>
                    <div className="itemization-col item-desc">
                        <label>
                            <input className="item-desc" type="text"></input>
                        </label>
                    </div>
                    <div className="itemization-col">
                        <label>
                            <input type="number"></input>
                        </label>
                    </div>
                    <div className="itemization-col">
                        <label>
                            <input type="number"></input>
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
}
