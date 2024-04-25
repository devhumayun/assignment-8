"use client"
import { useAuth } from "@/app/hooks/useAuth"
import Link from "next/link"
import { useRouter } from "next/navigation"

const LoginAndLogout = () => {
    const { auth, setAuth } = useAuth()
    const router = useRouter()
    const handleLogout = () => {
        setAuth("")
        router.push("/login")
    }

    return (
        <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
            {
                auth ? (<span onClick={handleLogout} className="cursor-pointer">Logout</span>) : (<Link href="/login">Login</Link>)
            }

        </li>
    )
}

export default LoginAndLogout
