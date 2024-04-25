import logo from '@/public/images/logo.png'
import Image from "next/image"
import Link from "next/link"
import LoginAndLogout from './LoginAndLogout'
const Header = () => {
    return (
        <nav>
            <div className="container flex justify-between py-6">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="logo"
                        className="object-cover"
                        height={100}
                        width={150}
                    />
                </Link>
                <ul className="flex gap-4 text-sm text-gray-500 items-center">
                    <li className="py-2 active">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="py-2">
                        <Link href="/recipe">Recipe</Link>
                    </li>
                    <li className="py-2">
                        <Link href="/about">About us</Link>
                    </li>
                    <LoginAndLogout />
                </ul>
            </div>
        </nav>
    )
}

export default Header
