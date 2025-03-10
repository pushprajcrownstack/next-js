'use client'

import Header from "@/components/Header";

function Dashboard({ }: { searchParams: Promise<{ query?: string }> }) {
    return (
        <>
            <Header />
        </>
    )
}

export default Dashboard