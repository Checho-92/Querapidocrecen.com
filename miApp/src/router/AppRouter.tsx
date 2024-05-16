import React from "react"
import { Routes, Route, Outlet } from "react-router-dom"
import Footer from "../components/footer"
import NavBar from "../components/navbar"
import Header from "../components/header"


export const AppRouter = () => {
  return (
    <div>
      <Header/>
    <NavBar/>
          
            <div className="w-full mx-auto px- pt-0">
            <Outlet/>
            </div> 
    <Footer/>

    </div>
  )
}
