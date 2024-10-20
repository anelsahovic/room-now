import Pagination from "@/Components/Pagination";
import RoomCard from "@/Components/RoomCard";
import SelectInput from "@/Components/SelectInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import SearchBar from "@/Components/SearchBar";

export default function Index({ rooms, queryParams = null }) {
    queryParams = queryParams || {};

    const [sort, setSort] = useState({
        sort_field: "created_at",
        sort_direction: "asc",
        sort_type: "latest",
    });

    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }
        router.get(route("rooms.index"), queryParams);
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;
        searchFieldChanged(name, e.target.value);
    };

    const sortChanged = (name) => {
        let sortParams = {
            sort_field: "created_at",
            sort_direction: "asc",
            sort_type: name,
        };

        switch (name) {
            case "latest":
                sortParams.sort_field = "created_at";
                sortParams.sort_direction = "asc";
                break;
            case "oldest":
                sortParams.sort_field = "created_at";
                sortParams.sort_direction = "desc";
                break;
            case "price_lowest":
                sortParams.sort_field = "price";
                sortParams.sort_direction = "asc";
                break;
            case "price_highest":
                sortParams.sort_field = "price";
                sortParams.sort_direction = "desc";
                break;
            default:
                break;
        }

        // Update the state with the new values
        setSort(sortParams);

        // Update the queryParams with the new sort values
        queryParams.sort_field = sortParams.sort_field;
        queryParams.sort_direction = sortParams.sort_direction;

        // Trigger the router get request with updated query params
        router.get(route("rooms.index"), queryParams);
    };

    // useEffect(() => {
    //     if (queryParams) {
    //         setSort({
    //             sort_field: queryParams.sort_field || "created_at",
    //             sort_direction: queryParams.sort_direction || "asc",
    //             sort_type:
    //                 queryParams.sort_field === "created_at"
    //                     ? "latest"
    //                     : queryParams.sort_field === "price"
    //                     ? "price_lowest"
    //                     : "latest",
    //         });
    //     }
    // }, [queryParams]);

    return (
        <AuthenticatedLayout
            header={
                <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-0 sm:flex-row sm:justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Find your perfect stay
                    </h2>
                    <SearchBar
                        defaultValue={queryParams.name}
                        onBlur={(e) =>
                            searchFieldChanged("name", e.target.value)
                        }
                        onKeyPress={(e) => onKeyPress("name", e)}
                    />
                </div>
            }
        >
            <Head title="Rooms" />
            <div className="flex justify-between px-5 my-5">
                <div className="flex flex-col space-y-1">
                    <span>Room Type</span>
                    <SelectInput
                        className=""
                        value={queryParams.room_type || ""}
                        onChange={(e) =>
                            searchFieldChanged("room_type", e.target.value)
                        }
                    >
                        <option value="">Select type</option>
                        <option value="single">Single</option>
                        <option value="double">Double</option>
                        <option value="triple">Triple</option>
                        <option value="suite">Suite</option>
                        <option value="deluxe">Deluxe</option>
                    </SelectInput>
                </div>
                <div className="flex flex-col space-y-1">
                    <span>Sort by</span>
                    <SelectInput
                        className=""
                        // value={sort.sort_type}
                        // onChange={(e) => sortChanged(e.target.value)} fix needed
                    >
                        <option className="text-sm" value="latest">
                            Date (latest)
                        </option>
                        <option className="text-sm" value="oldest">
                            Date (oldest)
                        </option>
                        <option className="text-sm" value="price_lowest">
                            Price (lowest)
                        </option>
                        <option className="text-sm" value="price_highest">
                            Price (highest)
                        </option>
                    </SelectInput>
                </div>
            </div>
            <div>
                <div className="grid w-full grid-cols-1 gap-5 p-5 my-5 sm:grid-cols-2 md:grid-cols-3">
                    {rooms.data.map((room) => (
                        // console.log(room)

                        <RoomCard key={room.id} room={room} />
                    ))}
                </div>
                <div className="flex items-center justify-center my-5 mb-10 space-x-3 text-center">
                    <Pagination links={rooms.links} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
