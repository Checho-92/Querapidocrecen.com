import React from "react"
import { Routes, Route, Outlet } from "react-router-dom"
import Footer from "../components/footer"
import NavBar from "../components/navbar"


export const AppRouter = () => {
  return (
    <div>
    <NavBar/>
          
            <div className="w-full mx-auto px-4 pt-0">
            <Outlet/>
            </div> 
    <Footer/>

    </div>
  )
}
