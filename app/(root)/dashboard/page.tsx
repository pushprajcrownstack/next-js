'use client'

import Footer from "@/components/footer";
import Header from "@/components/Header";

function Dashboard({ }: { searchParams: Promise<{ query?: string }> }) {
    return (
        <>
            <Header />
            <Footer />
        </>
    )
}

export default Dashboard