export function AdderForm({ children }) {
    return (
        <form className="component-form">
            <h2>ADDERS</h2>
            <div className="component-row">
                <div className="option-col header">OPTION NAME</div>
                <div className="col header">KIT PRICE</div>
            </div>
            {children}
        </form>
    );
}
