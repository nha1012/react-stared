import React from "react"
import MainLayout from "src/layouts/MainLayout"
import ReactGA from "react-ga"

export default function Home(props) {
  const pathname = props.match.path
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
