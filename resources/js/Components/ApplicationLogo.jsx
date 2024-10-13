import { HomeModernIcon } from "@heroicons/react/24/solid";
export default function ApplicationLogo(props) {
    return (
        <div className="flex items-center space-x-1">
            <HomeModernIcon className="text-teal-700 size-8" />
            <h1 className="font-mono text-xl font-bold text-teal-700">
                room now
            </h1>
        </div>
    );
}
