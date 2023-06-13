import type { PropsWithChildren } from "react"
import { Sidebar } from "./Sidebar"

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className='w-screen h-screen flex flex-row'>
      <nav className='h-screen w-96'>
        <Sidebar />
      </nav>

      <main className='w-full min-h-screen overflow-y-scroll'>{children}</main>
    </div>
  )
}
