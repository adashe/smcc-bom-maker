import { useState } from "react";
import { Letterhead } from "./Letterhead";
import addresses from "./data/addresses.json";

export function PDF({ projectInfo, children }) {
    return (
        <div>
            {children}
            <Letterhead />
            <PDFProjectInfo projectInfo={projectInfo} />
            <PDFShippingInfo />
            <PDFItemization />
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
                            Recipient:
                            <select
                                name="customer"
                                id="customer"
                                onChange={handleChangeCustomer}
                            >
                                <option value="sonnys">Sonny's</option>
                                <option value="azems">Azem's Car Wash</option>
                                <option value="scott">Scott Industrial</option>
                            </select>
                        </label>
                    </div>
                    <div className="pdf-row">{customer.addressLine1}</div>
                    <div className="pdf-row">{customer.addressLine2}</div>
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
                    <div className="itemization-col header">Quantity</div>
                    <div className="itemization-col item-desc-col header">
                        Description
                    </div>
                    <div className="itemization-col header">Unit Price</div>
                    <div className="itemization-col header">Line Total</div>
                </div>
                <div className="itemization-row">
                    <div className="itemization-col">
                        <label>
                            <input type="number"></input>
                        </label>
                    </div>
                    <div className="itemization-col item-desc-col">
                        <label>
                            <input
                                className="item-desc-input"
                                type="text"
                            ></input>
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
