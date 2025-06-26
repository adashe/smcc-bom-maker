export function ComponentForm({ children }) {
    return (
        <form>
            <div className="component-row">
                <div className="option-col header">OPTION NAME</div>
                <div className="col header">MSP</div>
                <div className="col header">CONT.</div>
                <div className="col header">UNIT PRICE</div>
            </div>
            {children}
        </form>
    );
}
