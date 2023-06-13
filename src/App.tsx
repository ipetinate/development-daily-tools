import { Outlet } from "react-router-dom"
import { AppShell } from "./components/AppShell"
import { useDarkMode } from "./hooks/useDarkMode"

export function App() {
  useDarkMode()

  return (
    <AppShell>
      <Outlet />
    </AppShell>
  )
}
