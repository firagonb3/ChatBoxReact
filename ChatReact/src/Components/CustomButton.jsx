export default function CustomButton({children, dataDrawerTarget, dataDrawerToggle, ariaControls}) {
    return (
        <>
            <button data-drawer-target={dataDrawerTarget} data-drawer-toggle={dataDrawerToggle} aria-controls={ariaControls} type="button" className=" text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 rounded-lg m-3">
                {children}
            </button>
        </>
    );
}