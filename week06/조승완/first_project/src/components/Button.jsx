const Button = () => {
    return (
        <button style={{color}}>
            {text}-{color}
            {children}
        </button>
    )
};

export default Button;