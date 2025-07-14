export function Totals({ basePrice, totalPrice, totalFLA, children }) {
    return (
        <div id="totals-div">
            <h2 className="totals-header">TOTALS</h2>
            <div>Base Price: ${basePrice.toFixed(2)}</div>
            <div>Total Cost: ${totalPrice.toFixed(2)}</div>
            {children}
        </div>
    );
}
