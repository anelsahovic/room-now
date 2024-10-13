import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";
import { Link, usePage, Head } from "@inertiajs/react";

export default function Home(auth) {
    const user = usePage().props.auth.user;
    return (
        <>
            {user ? (
                <AuthenticatedLayout>
                    <Head title="Home" />
                    Home Auth
                </AuthenticatedLayout>
            ) : (
                <GuestLayout>
                    <Head title="Home" />
                    Home Guest
                </GuestLayout>
            )}
        </>
    );
}
