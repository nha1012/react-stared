import React from "react"
import MainLayout from "src/layouts/MainLayout"
import ReactGA from "react-ga"
import { useLocation } from "react-router-dom"

export default function Home() {
  let location = useLocation()
  const pathname = location.pathname
  let pageView
  if (pathname === "*") pageView = "/not-found"
  else pageView = pathname
  ReactGA.pageview(pageView)

  return (
    <MainLayout>
      <h2 className="mb-4">Home</h2>
    </MainLayout>
  )
}
