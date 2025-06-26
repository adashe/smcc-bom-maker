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
    handleShowBomKits,
    handleShowBomParts,
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
                <div className="button-bank">
                    <Button handleClick={handleReset}>RESET FORM</Button>
                    <Button handleClick={handleShowBomKits}>
                        BoM KITS VIEW
                    </Button>
                    <Button handleClick={handleShowBomParts}>
                        BoM PARTS VIEW
                    </Button>
                </div>
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
