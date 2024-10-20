import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        <nav className="my-4 space-x-2 text-center">
            {links.map((link) => (
                <Link
                    preserveScroll
                    href={link.url || ""}
                    key={link.label}
                    className={
                        "inline-block  py-2 px-3 rounded-lg text-gray-900 text-xs " +
                        (link.active ? "bg-teal-700 text-gray-100" : " ") +
                        (!link.url
                            ? "!text-gray-500 cursor-not-allowed "
                            : "hover:bg-teal-700 hover:text-gray-100")
                    }
                    dangerouslySetInnerHTML={{ __html: link.label }}
                ></Link>
            ))}
        </nav>
    );
}
