import { createBrowserRouter } from "react-router-dom"

import publicRoutes from "./publicRoutes"
import appRoutes from "./appRoutes"

const router = createBrowserRouter([publicRoutes, appRoutes])

export default router
