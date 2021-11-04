import React from "react"
import MainLayout from "src/layouts/MainLayout"
import ReactGA from "react-ga"
ReactGA.pageview(window.location.pathname + window.location.search)

export default function Home() {
  return (
    <MainLayout>
      <h2 className="mb-4">Home</h2>
    </MainLayout>
  )
}
