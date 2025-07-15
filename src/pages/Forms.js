import { ComponentForm } from "../components/ComponentForm";
import { ComponentRow } from "../components/ComponentRow";
import { ProjectForm } from "../components/ProjectForm";
import { Button } from "../components/Button";
import { Totals } from "../components/Totals";

export function Forms({
    kitsData,
    projectInfo,
    assembly,
    basePrice,
    totalPrice,
    handleReset,
    handleChangeProjectInfo,
    handleChangeAssembly,
    handleUpdateTotals,
    calcKitPrice,
}) {
    return (
        <div>
            <div className="container">
                <ProjectForm
                    projectInfo={projectInfo}
                    handleChangeProjectInfo={handleChangeProjectInfo}
                ></ProjectForm>
                <Totals
                    basePrice={basePrice}
                    totalPrice={totalPrice}
                    handleUpdateTotals={handleUpdateTotals}
                >
                    <Button isActive={"active"} handleClick={handleReset}>
                        RESET FORM
                    </Button>
                </Totals>
            </div>
            <div>
                <ComponentForm>
                    {kitsData.map((kit) => (
                        <ComponentRow
                            assembly={assembly}
                            kit={kit}
                            handleChangeAssembly={handleChangeAssembly}
                            calcKitPrice={calcKitPrice}
                            key={kit.id}
                        />
                    ))}
                </ComponentForm>
                <Button isActive={"active"} handleClick={handleReset}>
                    RESET FORM
                </Button>
            </div>
        </div>
    );
}
