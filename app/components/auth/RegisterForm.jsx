"use client"
import { userRegister } from "@/app/actions"
import { useState } from "react"

const RegisterForm = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const handleRegister = async (formData) => {
        try {
            setLoading(true)
            await userRegister(formData)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }
    return (
        <form className="login-form" action={handleRegister}>
            <div>
                <label htmlFor="fname">First Name</label>
                <input type="text" name="fname" id="fname" />
            </div>
            <div>
                <label htmlFor="lname">Last Name</label>
                <input type="text" name="lname" id="lname" />
            </div>
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
                {loading ? "Creating account..." : "Create Account"}
            </button>
        </form>
    )
}

export default RegisterForm
