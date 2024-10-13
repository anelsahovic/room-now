import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "border-teal-700 text-teal-700 focus:border-teal-700"
                    : "border-transparent text-gray-500 hover:border-teal-700 hover:text-teal-700 focus:border-teal-700 focus:text-teal-700 ") +
                className
            }
        >
            {children}
        </Link>
    );
}
