import { GoSearch } from "react-icons/go";
const SearchBar = ({ onKeyPress, onBlur, defaultValue }) => {
    return (
        <div className="relative group">
            <input
                defaultValue={defaultValue}
                onBlur={onBlur}
                onKeyPress={onKeyPress}
                type="text"
                className="border-gray-300 rounded-full shadow-sm focus:border-teal-700 focus:ring-teal-700 group-focus:border-teal-700 group-focus:ring-teal-700"
                placeholder="Search..."
            />
            <GoSearch className="absolute text-gray-500 transition-colors duration-300 right-2 top-3 group-focus:text-teal-700" />
        </div>
    );
};

export default SearchBar;
