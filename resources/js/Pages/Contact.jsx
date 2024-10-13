import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";
import { Link, usePage, Head } from "@inertiajs/react";

export default function Contact(auth) {
    const user = usePage().props.auth.user;
    return (
        <>
            {user ? (
                <AuthenticatedLayout>
                    <Head title="Contact" />
                    Contact AUth
                </AuthenticatedLayout>
            ) : (
                <GuestLayout>
                    <Head title="Contact" />
                    Contact Guest
                </GuestLayout>
            )}
        </>
    );
}
