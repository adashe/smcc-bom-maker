export function Totals({ basePrice, totalPrice, totalFLA }) {
    return (
        <div id="totals-div">
            <h3>TOTALS</h3>
            <div>Base Price: ${basePrice}</div>
            <div>Total Price: ${totalPrice}</div>
            <div>Total FLA: {totalFLA}</div>
        </div>
    );
}
