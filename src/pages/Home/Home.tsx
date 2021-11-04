import React from "react"
import MainLayout from "src/layouts/MainLayout"
import ReactGA from "react-ga"
export default function Home() {
  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <MainLayout>
      <h2 className="mb-4">Home</h2>
    </MainLayout>
  )
}
