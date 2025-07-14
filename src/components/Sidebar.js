import { Button } from "./Button";

export function Sidebar({ generator, handleChangeGenerator }) {
    return (
        <div className="sidebar">
            <Button
                isActive={generator === "smcc" ? "" : "active"}
                handleClick={() => handleChangeGenerator("smcc")}
            >
                SMCC
            </Button>
            <Button
                isActive={generator === "ezmcc" ? "" : "active"}
                handleClick={() => handleChangeGenerator("ezmcc")}
            >
                EZMCC
            </Button>
            <Button
                isActive={generator === "208vmcc" ? "" : "active"}
                handleClick={() => handleChangeGenerator("208vmcc")}
            >
                208V MCC
            </Button>
            <Button
                isActive={generator === "460vmcc" ? "" : "active"}
                handleClick={() => handleChangeGenerator("460vmcc")}
            >
                460V MCC
            </Button>
        </div>
    );
}
