import React, { lazy, Suspense } from "react"
import { Switch, Route } from "react-router-dom"
import { PATH } from "src/constants/paths"
import Loading from "src/components/Loading/Loading"

const Home = lazy(() => import("src/pages/Home/Home"))

export default function HomeRoutes() {
  return (
    <Switch>
      <Route
        path={PATH.HOME}
        component={() => (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        )}
      />
    </Switch>
  )
}
