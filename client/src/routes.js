import React from "react"
import {Navigate, Route, Routes} from "react-router-dom"
import Menu from "./Pages/Menu"
import SignUp from "./Pages/SignUp/SignUp"
import SignIn from "./Pages/SignIn/SignIn"

export const useRoutes = (isLogin) => {
    if (isLogin) {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Menu/>}/>
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
            </>
        )
    }

    return (
        <>
            <Routes>
                <Route path="/login" element={<SignIn/>}/>
                <Route path="/registration" element={<SignUp/>}/>
                <Route path="*" element={<Navigate replace to="/login" />} />
            </Routes>
        </>
    )
}