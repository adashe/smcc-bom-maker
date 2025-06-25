import { useState } from "react";
import { ComponentForm } from "./ComponentForm";
import { ProjectForm } from "./ProjectForm";
import { Button } from "./Button";
import { Totals } from "./Totals";
import { Header } from "./Header";

import kitsData from "./data/kits.json";
import partsData from "./data/parts.json";

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
        const kitsPrice = calcKitsTotalPrice();

        setTotalPrice(basePrice + kitsPrice);
    }

    function calcKitsTotalPrice() {
        let kitsPrice = 0;

        for (const kitID in assembly) {
            const quantity = assembly[kitID];

            if (quantity > 0) {
                const kitPrice = calcKitPrice(kitID);
                kitsPrice += kitPrice * quantity;
            }
        }

        // FIX: SKIPS FIRST ADDED KIT??????

        return kitsPrice;
    }

    function calcKitPrice(kitID) {
        let kitPrice = 0;

        const kit = kitsData.filter((kit) => kit.id === kitID);
        const components = kit[0].components;

        components.forEach((componentID) => {
            const part = partsData.filter((part) => part.id === componentID);
            kitPrice += part[0].price;
        });

        return kitPrice;
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
