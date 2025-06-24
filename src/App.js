import { useState } from "react";
import { ComponentForm } from "./ComponentForm";
import { ProjectForm } from "./ProjectForm";
import { Button } from "./Button";

export default function App() {
    let initialAssem = {
        starter2hp: 0,
        starter10hp: 0,
        starter15hp: 0,
        starter40hp: 0,
        vfd1hp: 0,
        vfd3hp: 0,
        vfd5hp: 0,
        vfd7hp: 0,
        vfd10hp: 0,
        vfd15hp: 0,
        vfd20hp: 0,
        vfd40hp: 0,
        breaker3hp: 0,
        breaker5hp: 0,
        breaker7hp: 0,
        breaker10hp: 0,
        breaker15hp: 0,
    };
    const [assembly, setAssembly] = useState(initialAssem);

    function handleReset() {
        setAssembly(initialAssem);
    }

    return (
        <div className="App">
            <Header />

            <div className="container">
                <div>
                    <ProjectForm />
                    <Button handleClick={handleReset}>Reset Form</Button>
                    <Totals />
                </div>

                <div>
                    <ComponentForm
                        assembly={assembly}
                        setAssembly={setAssembly}
                    />
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
