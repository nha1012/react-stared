import React, { useEffect } from "react"
import Routes from "src/routes/routes"
import ReactGA from "react-ga"
function App() {
  useEffect(() => {
    ReactGA.initialize("UA-28382520-33", {
      debug: true
    })
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return <Routes />
}

export default App
