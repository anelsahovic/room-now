import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React from "react";

export default function Create() {
    const { data, setData, post, errors } = useForm();
    return (
        <AuthenticatedLayout
            header={
                <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-0 sm:flex-row sm:justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Create new room
                    </h2>
                </div>
            }
        >
            <Head title="Create Room" />

            <div className="max-w-2xl p-6 mx-auto my-5 overflow-hidden bg-white rounded-lg shadow-lg">
                <form>
                    <div className="flex flex-col mt-4">
                        <InputLabel htmlFor="room_image" value="Room Image" />
                        <TextInput
                            id="room_image"
                            type="file"
                            name="image"
                            className="block w-full mt-1"
                            onChange={(e) =>
                                setData("image", e.target.files[0])
                            }
                        />
                        <InputError message={errors.image} className="mt-2" />
                    </div>
                    <div className="flex flex-col mt-4">
                        <InputLabel htmlFor="room_name" value="Room Name" />
                        <TextInput
                            id="room_name"
                            type="text"
                            name="name"
                            className="block w-full mt-1"
                            onChange={(e) => setData("name", e.target.files[0])}
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div className="flex flex-col mt-4">
                        <InputLabel htmlFor="room_adress" value="Room Adress" />
                        <TextInput
                            id="room_adress"
                            type="text"
                            name="adress"
                            className="block w-full mt-1"
                            onChange={(e) =>
                                setData("adress", e.target.files[0])
                            }
                        />
                        <InputError message={errors.adress} className="mt-2" />
                    </div>

                    <div className="flex items-center mt-4 space-x-4 justify-evenly">
                        <div className="flex flex-col mt-4">
                            <InputLabel
                                htmlFor="room_number"
                                value="Room Number"
                            />
                            <TextInput
                                id="room_number"
                                type="text"
                                name="room_number"
                                className="block w-full mt-1"
                                onChange={(e) =>
                                    setData("room_number", e.target.files[0])
                                }
                            />
                            <InputError
                                message={errors.room_number}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex flex-col mt-4">
                            <InputLabel
                                htmlFor="room_price"
                                value="Room Price"
                            />
                            <TextInput
                                id="room_price"
                                type="text"
                                name="price"
                                className="block w-full mt-1"
                                onChange={(e) =>
                                    setData("price", e.target.files[0])
                                }
                            />
                            <InputError
                                message={errors.price}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <div className="flex items-center mt-4 space-x-10 justify-evenly">
                        <div className="flex flex-col mt-4">
                            <InputLabel htmlFor="room_type" value="Room Type" />
                            <SelectInput
                                id="room_type"
                                name="type"
                                className="block w-full mt-1"
                                // onChange={(e) => setData("status", e.target.value)}
                            >
                                <option value="">Select type</option>
                                <option value="single">Single</option>
                                <option value="double">Double</option>
                                <option value="triple">Triple</option>
                                <option value="suite">Suite</option>
                                <option value="deluxe">Deluxe</option>
                            </SelectInput>
                            <InputError
                                message={errors.room_type}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex flex-col mt-4">
                            <InputLabel
                                htmlFor="room_status"
                                value="Room Status"
                            />
                            <SelectInput
                                id="room_status"
                                name="status"
                                className="block w-full mt-1"
                                // onChange={(e) => setData("status", e.target.value)}
                            >
                                <option value="">Select status</option>
                                <option value="available">Available</option>
                                <option value="booked">Booked</option>
                            </SelectInput>
                            <InputError
                                message={errors.room_status}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mt-4">
                        <InputLabel
                            htmlFor="project_description"
                            value="Project Description"
                        />
                        <TextAreaInput
                            id="project_description"
                            name="description"
                            value={data.description}
                            className="block w-full mt-1"
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.description}
                            className="mt-2"
                        />
                    </div>
                    <button className="px-2 py-1 mt-4 text-sm text-white transition-all bg-teal-700 rounded shadow hover:bg-teal-900">
                        Add New
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
