import logo from "./assets/logo.webp";

export function Letterhead() {
    return (
        <div className="letterhead">
            <img src={logo} alt="sun coast logo" />
            <div className="address">
                <div>4130 N. CANAL STREET, JACKSONVILLE, FL</div>
                <div>PHONE: (904) 693-3318 | FAX: (904) 693-3203</div>
            </div>
        </div>
    );
}
