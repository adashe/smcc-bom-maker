import { ComponentForm } from "./ComponentForm";
import { ComponentRow } from "./ComponentRow";
import { ProjectForm } from "./ProjectForm";
import { Button } from "./Button";
import { Totals } from "./Totals";

export function Forms({
    basePrice,
    totalPrice,
    totalFLA,
    handleChangeProjectInfo,
    handleChange,
    handleUpdateTotals,
    assembly,
    projectInfo,
    kitsData,
    children,
}) {
    return (
        <div className="container">
            <div>
                <ProjectForm
                    projectInfo={projectInfo}
                    handleChangeProjectInfo={handleChangeProjectInfo}
                />
                <Totals
                    basePrice={basePrice}
                    totalPrice={totalPrice}
                    totalFLA={totalFLA}
                >
                    <Button handleClick={handleUpdateTotals}>
                        UPDATE TOTALS
                    </Button>
                </Totals>
                {children}
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
