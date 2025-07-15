export function ComponentForm({ children }) {
    return (
        <form className="component-form">
            <h2>COMPONENTS</h2>
            <div className="component-row">
                <div className="option-col header">OPTION NAME</div>
                <div className="col header">FLA</div>
                <div className="col header">MSP</div>
                <div className="col header">CONT.</div>
                <div className="col header">KIT PRICE</div>
            </div>
            {children}
        </form>
    );
}
