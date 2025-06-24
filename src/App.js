import { useState } from "react";
import { ComponentForm } from "./ComponentForm";
import { ProjectForm } from "./ProjectForm";
import { Button } from "./Button";
import { Totals } from "./Totals";
import { Header } from "./Header";

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
    const [basePrice, setBasePrice] = useState(100);
    const [totalPrice, setTotalPrice] = useState(basePrice);
    const [totalFLA, setTotalFLA] = useState(0);

    function handleReset() {
        setAssembly(initialAssem);
        setBasePrice(100);
        setTotalPrice(basePrice);
        setTotalFLA(0);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setAssembly((previous) => ({
            ...previous,
            [name]: Number(value),
        }));

        calcBasePrice();
        calcTotalPrice();
        calcTotalFLA();
    }

    function calcBasePrice() {
        setBasePrice(100);
    }

    function calcTotalPrice() {
        setTotalPrice((price) => (price += 2));
    }

    function calcTotalFLA() {
        setTotalFLA((fla) => (fla += 1));
    }

    return (
        <div className="App">
            <Header />

            <div className="container">
                <div>
                    <ProjectForm />
                    <Totals
                        basePrice={basePrice}
                        totalPrice={totalPrice}
                        totalFLA={totalFLA}
                    />
                    <Button handleClick={handleReset}>Reset Form</Button>
                </div>

                <div>
                    <ComponentForm
                        assembly={assembly}
                        handleChange={handleChange}
                    />
                </div>
            </div>
        </div>
    );
}
