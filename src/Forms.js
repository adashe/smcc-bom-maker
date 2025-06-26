import { ComponentForm } from "./ComponentForm";
import { ComponentRow } from "./ComponentRow";
import { ProjectForm } from "./ProjectForm";
import { Button } from "./Button";
import { Totals } from "./Totals";

export function Forms({
    basePrice,
    totalPrice,
    totalFLA,
    handleReset,
    handleChange,
    handleUpdateTotals,
    assembly,
    kitsData,
    handleShowBom,
}) {
    return (
        <div className="container">
            <div>
                <ProjectForm />
                <Totals
                    basePrice={basePrice}
                    totalPrice={totalPrice}
                    totalFLA={totalFLA}
                >
                    <Button handleClick={handleUpdateTotals}>
                        UPDATE TOTALS
                    </Button>
                </Totals>
                <Button handleClick={handleReset}>RESET FORM</Button>
                <Button handleClick={handleShowBom}>GENERATE BoM</Button>
            </div>

            <div>
                <ComponentForm>
                    {kitsData.map((kit) => (
                        <ComponentRow
                            kit={kit}
                            assembly={assembly}
                            handleChange={handleChange}
                            key={kit.id}
                        />
                    ))}
                </ComponentForm>
            </div>
        </div>
    );
}
