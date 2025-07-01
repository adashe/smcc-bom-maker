export function Button({ isActive, handleClick, children }) {
    return (
        <button className={isActive} onClick={handleClick}>
            {children}
        </button>
    );
}
