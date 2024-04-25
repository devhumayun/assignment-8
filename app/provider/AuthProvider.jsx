"use client"

import { useState } from "react"
import { AuthContext } from "../content"

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState("")

    return <AuthContext.Provider value={{ auth, setAuth }}>
        {children}
    </AuthContext.Provider>
}