'use client'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Header() {
    const router = useRouter();
    const logout = async () => {
        try {
            const token = localStorage.getItem('token')
            await axios.get('/api/users/logout', { headers: { Authorization: `Bearer ${token}` } });
            localStorage.clear();
            router.push('/login');
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href='/'>
                    <img src="/logo.png" alt="" width={144} height={20} />
                </Link>
                <div className='flex items-center gap-5 text-black'>
                    <button type="button" className='cursor-pointer' onClick={logout}>Logout</button>
                </div>
            </nav>
        </header>
    )
}

export default Header