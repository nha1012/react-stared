import React from "react"
import MainLayout from "src/layouts/MainLayout"
import ReactGA from "react-ga"
export default function Home() {
  ReactGA.pageview(window.location.pathname)
  return (
    <MainLayout>
      <h2 className="mb-4">Home</h2>
    </MainLayout>
  )
}
