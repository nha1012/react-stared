import React, { useEffect } from "react"
import Routes from "src/routes/routes"

import ReactGA from "react-ga"
function App() {
  useEffect(() => {
    ReactGA.initialize("G-7M559PFT09")
    ReactGA.pageview("/")
  }, [])
  return <Routes />
}

export default App
