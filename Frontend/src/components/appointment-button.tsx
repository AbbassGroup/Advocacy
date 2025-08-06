const ActionButton = ({ children = "Explore discoveries", className = "", ...props }) => {
    return (
        <button
            className={`relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-tr from-primary via-primary/90 to-primary ring-4 ring-primary/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-gradient-to-b before:from-primary/10 before:blur-xl ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default ActionButton;
