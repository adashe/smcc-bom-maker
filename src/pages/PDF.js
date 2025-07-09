import { useState } from "react";
import { Letterhead } from "../components/Letterhead";
import { Button } from "../components/Button";
import addresses from "../data/addresses.json";

export function PDF({ projectInfo }) {
    const initialCustomer = {
        id: "sonnys",
        customerName: "Sonny's",
        addressLine1: "1200 Main Street",
        addressLine2: "Jacksonville, FL 32206",
    };
    const initialShippingInfo = {
        shippingMethod: "",
        shippingTerms: "",
        estimatedDelivery: "",
        paymentTerms: "",
        freight: "",
    };

    const [customer, setCustomer] = useState(initialCustomer);
    const [shippingInfo, setShippingInfo] = useState(initialShippingInfo);

    function handleChangeCustomer(e) {
        const customerID = e.target.value;
        const arr = addresses.filter((address) => address.id === customerID);
        setCustomer(arr[0]);
    }

    function handleChangeShippingInfo(e) {
        const { name, value } = e.target;

        setShippingInfo((previous) => ({
            ...previous,
            [name]: value,
        }));
    }

    function handleResetPDF() {
        // FIX
        setShippingInfo(initialShippingInfo);
    }
    return (
        <div className="pdf-div">
            <Letterhead />
            <PDFProjectInfo
                projectInfo={projectInfo}
                customer={customer}
                handleChangeCustomer={handleChangeCustomer}
            />
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
            <Button isActive="active" handleClick={handleResetPDF}>
                RESET
            </Button>
        </div>
    );
}

function PDFProjectInfo({ projectInfo, customer, handleChangeCustomer }) {
    // Generate dates for quoted on and valid until dates fields
    const date = new Date();
    let dateIn30Days = new Date();
    dateIn30Days.setDate(dateIn30Days.getDate() + 30);

    return (
        <div className="pdf-section">
            <div className="pdf-info-col">
                <form>
                    <div className="pdf-info-row">
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
                    <div className="pdf-info-row">
                        {customer?.addressLine1 || ""}
                    </div>

                    <div className="pdf-info-row">
                        {customer?.addressLine2 || ""}
                    </div>
                </form>
            </div>

            <div className="pdf-info-col">
                <div className="pdf-info-row">
                    <div>Engineer:</div>
                    <div>{projectInfo.engineer.toUpperCase()}</div>
                </div>
                <div className="pdf-info-row">
                    <div>Project Name:</div>
                    <div>{projectInfo.project.toUpperCase()}</div>
                </div>
                <div className="pdf-info-row">
                    <div>Quote ID:</div>
                    <div>{projectInfo.jobNum}</div>
                </div>
                <div className="pdf-info-row">
                    <div>Quoted On:</div>
                    <div>{date.toLocaleDateString()}</div>
                </div>
                <div className="pdf-info-row">
                    <div>Valid Until:</div>
                    <div>{dateIn30Days.toLocaleDateString()}</div>
                </div>
            </div>
        </div>
    );
}

function PDFShippingInfo({ shippingInfo, handleChangeShippingInfo }) {
    return (
        <div className="pdf-section">
            <form className="shipping-form">
                <div className="shipping-col">
                    <label>
                        SHIPPING METHOD
                        <input
                            type="text"
                            name="shippingMethod"
                            value={shippingInfo.shippingMethod}
                            onChange={handleChangeShippingInfo}
                        ></input>
                    </label>
                </div>
                <div className="shipping-col">
                    <label>
                        SHIPPING TERMS
                        <input
                            type="text"
                            name="shippingTerms"
                            value={shippingInfo.shippingTerms}
                            onChange={handleChangeShippingInfo}
                        ></input>
                    </label>
                </div>
                <div className="shipping-col">
                    <label>
                        ESTIMATED DELIVERY
                        <input
                            type="text"
                            name="estimatedDelivery"
                            value={shippingInfo.estimatedDelivery}
                            onChange={handleChangeShippingInfo}
                        ></input>
                    </label>
                </div>
                <div className="shipping-col">
                    <label>
                        PAYMENT TERMS
                        <input
                            type="text"
                            name="paymentTerms"
                            value={shippingInfo.paymentTerms}
                            onChange={handleChangeShippingInfo}
                        ></input>
                    </label>
                </div>
                <div className="shipping-col">
                    <label>
                        FREIGHT
                        <input
                            type="text"
                            name="freight"
                            value={shippingInfo.freight}
                            onChange={handleChangeShippingInfo}
                        ></input>
                    </label>
                </div>
            </form>
        </div>
    );
}

function PDFItemization() {
    return (
        <div className="pdf-section">
            <form>
                <div className="itemization-row">
                    <div className="itemization-header">QUANTITY</div>
                    <div className="itemization-desc-header">DESCRIPTION</div>
                    <div className="itemization-header">UNIT PRICE</div>
                    <div className="itemization-header">LINE TOTAL</div>
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
            <div>
                <label>
                    <input type="number" name="quantity"></input>
                </label>
            </div>
            <div>
                <label>
                    <input
                        className="item-desc-input"
                        type="text"
                        name="description"
                    ></input>
                </label>
            </div>
            <div>
                <label>
                    <input type="number" name="unitPrice"></input>
                </label>
            </div>
            <div>
                <label>
                    <input type="number" name="lineTotal"></input>
                </label>
            </div>
        </div>
    );
}

function PDFTotals() {
    const subtotal = 0;
    const salesTax = 0.06;

    return (
        <div className="itemization-totals">
            <div>
                <div className="itemization-label">SUBTOTAL: </div>
                <div>${subtotal.toFixed(2)}</div>
            </div>

            <div>
                <div className="itemization-label">SALES TAX:</div>
                <div>${(subtotal * salesTax).toFixed(2)}</div>
            </div>

            <div>
                <div className="itemization-label">TOTAL PRICE: </div>
                <div>${(subtotal + subtotal * salesTax).toFixed(2)}</div>
            </div>
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
