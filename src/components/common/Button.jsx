const Button = ({btnName, onClick}) => {
    return (
        <button className="px-5 py-2 text-center cursor-pointer rounded-xs bg-primary-200 text-white " onClick={onClick}>
            {btnName}
        </button>
    );
};

export default Button;