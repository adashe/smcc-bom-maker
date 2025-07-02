import { useState } from "react";
import { Letterhead } from "./Letterhead";
import addresses from "./data/addresses.json";

export function PDF({ projectInfo, children }) {
    const initialShippingInfo = {
        shippingMethod: "",
        shippingTerms: "",
        estimatedDelivery: "",
        paymentTerms: "",
        freight: "",
    };

    const [shippingInfo, setShippingInfo] = useState(initialShippingInfo);

    function handleChangeShippingInfo(e) {
        const { name, value } = e.target;

        setShippingInfo((previous) => ({
            ...previous,
            [name]: value,
        }));
    }

    function handleResetShipping() {
        setShippingInfo(initialShippingInfo);
    }
    return (
        <div className="pdf">
            {children}
            <Letterhead />
            <PDFProjectInfo projectInfo={projectInfo} />
            <Line />
            <PDFShippingInfo
                shippingInfo={shippingInfo}
                handleChangeShippingInfo={handleChangeShippingInfo}
            />
            <Line />
            <PDFItemization />
            <Line />
            <PDFTotals />
            <Line />
            <PDFNotes />
        </div>
    );
}

function PDFProjectInfo({ projectInfo }) {
    const [customer, setCustomer] = useState({
        id: "sonnys",
        customerName: "Sonny's",
        addressLine1: "1200 Main Street",
        addressLine2: "Jacksonville, FL 32206",
    });

    // Generate dates for quoted and valid until dates fields
    const date = new Date();
    let dateIn30Days = new Date();
    dateIn30Days.setDate(dateIn30Days.getDate() + 30);

    function handleChangeCustomer(e) {
        const customerID = e.target.value;
        const arr = addresses.filter((address) => address.id === customerID);
        setCustomer(arr[0]);
    }

    return (
        <div className="container">
            <div className="pdf-col">
                <form>
                    <div className="pdf-row">
                        <label>
                            <select
                                name="customer"
                                id="customer"
                                onChange={handleChangeCustomer}
                            >
                                <option value="sonnys">Sonny's</option>
                                <option value="azems">Azem's Car Wash</option>
                                <option value="scott">Scott Industrial</option>
                                <option value="other">Other</option>
                            </select>
                        </label>
                    </div>
                    <div className="pdf-row">
                        {customer?.addressLine1 || ""}
                    </div>

                    <div className="pdf-row">
                        {customer?.addressLine2 || ""}
                    </div>
                </form>
            </div>

            <div className="pdf-col">
                <div className="pdf-row">
                    <div className="pdf-label">Engineer:</div>
                    <div>{projectInfo.engineer.toUpperCase()}</div>
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

function PDFShippingInfo({ shippingInfo, handleChangeShippingInfo }) {
    return (
        <div className="container">
            <form className="shipping-form">
                <div className="shipping-col">
                    <label>
                        SHIPPING METHOD
                        <input
                            type="text"
                            value={shippingInfo.shippingMethod}
                        ></input>
                    </label>
                </div>
                <div className="shipping-col">
                    <label>
                        SHIPPING TERMS
                        <input
                            type="text"
                            value={shippingInfo.shippingTerms}
                        ></input>
                    </label>
                </div>
                <div className="shipping-col">
                    <label>
                        ESTIMATED DELIVERY
                        <input
                            type="text"
                            value={shippingInfo.estimatedDelivery}
                        ></input>
                    </label>
                </div>
                <div className="shipping-col">
                    <label>
                        PAYMENT TERMS
                        <input
                            type="text"
                            value={shippingInfo.paymentTerms}
                        ></input>
                    </label>
                </div>
                <div className="shipping-col">
                    <label>
                        FREIGHT
                        <input type="text" value={shippingInfo.freight}></input>
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
                    <div className="itemization-col header">QUANTITY</div>
                    <div className="itemization-col item-desc-col header">
                        DESCRIPTION
                    </div>
                    <div className="itemization-col header">UNIT PRICE</div>
                    <div className="itemization-col header">LINE TOTAL</div>
                </div>
                <PDFItemizationRow />
                <PDFItemizationRow />
                <PDFItemizationRow />
                <PDFItemizationRow />
                <PDFItemizationRow />
            </form>
        </div>
    );
}

function PDFItemizationRow() {
    return (
        <div className="itemization-row">
            <div className="itemization-col">
                <label>
                    <input type="number"></input>
                </label>
            </div>
            <div className="itemization-col item-desc-col">
                <label>
                    <input className="item-desc-input" type="text"></input>
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
    );
}

function PDFTotals() {
    return (
        <div className="itemization-totals">
            <div>Subtotal: $$</div>
            <div>Sales Tax: $$</div>
            <div>Total Div Price: $$</div>
        </div>
    );
}

function PDFNotes() {
    return (
        <div className="notes-col">
            <form className="notes-form">
                <label>
                    Quoted Per:
                    <input name="quotedPer" type="text"></input>
                </label>
                <label>
                    Clarifications:
                    <input name="clarifications" type="text"></input>
                </label>
                <label>
                    Exceptions:
                    <input name="exceptions" type="text"></input>
                </label>
                <label>
                    Quotation Prepared By:
                    <input name="preparedBy" type="text"></input>
                </label>
                <div className="thank-you">
                    Thank you for choosing Sun Coast!
                </div>
            </form>
        </div>
    );
}

function Line() {
    return <div className="line"></div>;
}
