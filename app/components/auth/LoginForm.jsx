"use client";

import { userLogin } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
    const [error, setError] = useState("");
    const { setAuth } = useAuth()
    const router = useRouter()
    const handlelogin = async (e) => {
        e.preventDefault();
        const currentTarget = e.currentTarget;
        try {
            const formData = new FormData(currentTarget);
            const user = await userLogin(formData);

            if (user) {
                setAuth(user)
                router.push("/")
            } else {
                setError("Invalid email or password");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <div>{error}</div>
            <form className="login-form" onSubmit={handlelogin}>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <button
                    type="submit"
                    className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
                >
                    Login
                </button>
            </form>
        </>
    );
};

export default LoginForm;
