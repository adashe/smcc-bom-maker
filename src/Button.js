export function Button({ isActive, handleClick, children }) {
    return <button onClick={handleClick}>{children}</button>;
}
