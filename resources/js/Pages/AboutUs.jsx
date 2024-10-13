import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";
import { Link, usePage, Head } from "@inertiajs/react";

export default function AboutUs(auth) {
    const user = usePage().props.auth.user;
    return (
        <>
            {user ? (
                <AuthenticatedLayout>
                    <Head title="About Us" />
                    About Us AUth
                </AuthenticatedLayout>
            ) : (
                <GuestLayout>
                    <Head title="About us" />
                    AboutUs Guest
                </GuestLayout>
            )}
        </>
    );
}
