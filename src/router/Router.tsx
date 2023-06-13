import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { App } from "../App"

import { Home } from "../pages/Home"
import { About } from "../pages/About"

import { TxtToCsv } from "../pages/TxtToCsv"
import { TxtToJson } from "../pages/TxtToJson"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/txt-to-json", element: <TxtToJson /> },
      { path: "/txt-to-csv", element: <TxtToCsv /> },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
