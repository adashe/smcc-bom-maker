import { ComponentForm } from "../components/ComponentForm";
import { ComponentRow } from "../components/ComponentRow";
import { ProjectForm } from "../components/ProjectForm";
import { Button } from "../components/Button";
import { Totals } from "../components/Totals";

export function Forms({
    calcKitPrice,
    basePrice,
    totalPrice,
    handleChangeProjectInfo,
    handleChange,
    handleUpdateTotals,
    assembly,
    projectInfo,
    kitsData,
    handleReset,
}) {
    return (
        <div className="container">
            <div>
                <ProjectForm
                    projectInfo={projectInfo}
                    handleChangeProjectInfo={handleChangeProjectInfo}
                />
                <Totals basePrice={basePrice} totalPrice={totalPrice}>
                    <Button
                        isActive={"active"}
                        handleClick={handleUpdateTotals}
                    >
                        UPDATE TOTALS
                    </Button>
                </Totals>
            </div>

            <div>
                <ComponentForm>
                    {kitsData.map((kit) => (
                        <ComponentRow
                            calcKitPrice={calcKitPrice}
                            kit={kit}
                            assembly={assembly}
                            handleChange={handleChange}
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
