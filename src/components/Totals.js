import { Button } from "./Button";

export function Totals({
    basePrice,
    totalPrice,
    handleUpdateTotals,
    children,
}) {
    return (
        <div className="totals">
            <h2>TOTALS</h2>
            <div>Base Price: ${basePrice.toFixed(2)}</div>
            <div>Total Price: ${totalPrice.toFixed(2)}</div>
            <Button isActive={"active"} handleClick={handleUpdateTotals}>
                UPDATE TOTALS
            </Button>
            {children}
        </div>
    );
}
