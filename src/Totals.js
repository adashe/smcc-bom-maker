export function Totals({ basePrice, totalPrice, totalFLA, children }) {
    return (
        <div id="totals-div">
            <h3>TOTALS</h3>
            <div>Base Price: ${basePrice}</div>
            <div>Total Cost: ${totalPrice.toFixed(2)}</div>
            <div>Total FLA: {totalFLA}</div>
            {children}
        </div>
    );
}
