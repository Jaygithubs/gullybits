export function Button({ children, className = "", ...props }) {
    return (
        <button
            {...props}
            className={`btn-primary cursor-pointer ${className}`}
        >
            {children}
        </button>
    );
}