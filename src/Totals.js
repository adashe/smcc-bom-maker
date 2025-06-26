export function Totals({ basePrice, totalPrice, totalFLA, children }) {
    return (
        <div id="totals-div">
            <h3>TOTALS</h3>
            <div>Base Price: ${basePrice}</div>
            <div>Total Price: ${totalPrice}</div>
            <div>Total FLA: {totalFLA}</div>
            {children}
        </div>
    );
}
