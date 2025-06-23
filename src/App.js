import { useState } from "react";
import { ComponentForm } from "./ComponentForm";
import { ProjectForm } from "./ProjectForm";

export default function App() {
    return (
        <div className="App">
            <Header />

            <div className="container">
                <div>
                    <ProjectForm />
                    <Totals />
                </div>

                <div>
                    <ComponentForm />
                </div>
            </div>
        </div>
    );
}

function Header() {
    return (
        <div>
            <h3 className="company-name">SUN COAST CONTROLS</h3>
            <h1>SMCC BoM Maker</h1>
        </div>
    );
}

function Totals({ totalPrice }) {
    return (
        <div id="totals-div">
            <h3>TOTALS</h3>
            <div>Core Components: $$</div>
            <div>STC: $$</div>
            <div>Total Combined Cost: ${totalPrice}</div>
            <div>FLA: ##</div>
            <div>Core Components: $$</div>
        </div>
    );
}
