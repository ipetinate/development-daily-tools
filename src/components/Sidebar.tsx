import { Sidebar as FlowSidebar } from "flowbite-react"

import {
  DocumentTextIcon,
  HomeIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"

export function Sidebar() {
  return (
    <FlowSidebar aria-label='Sidebar with content separator example'>
      <FlowSidebar.Items>
        <FlowSidebar.ItemGroup>
          <Link to='/'>
            <FlowSidebar.Item icon={HomeIcon}>
              <p>Ínicio</p>
            </FlowSidebar.Item>
          </Link>

          {/* @ts-ignore */}
          <FlowSidebar.Collapse icon={DocumentTextIcon} label='TXT'>
            <Link to='/txt-to-json'>
              <FlowSidebar.Item>to JSON</FlowSidebar.Item>
            </Link>

            <Link to='/txt-to-csv'>
              <FlowSidebar.Item>to CSV</FlowSidebar.Item>
            </Link>
          </FlowSidebar.Collapse>
        </FlowSidebar.ItemGroup>

        <FlowSidebar.ItemGroup>
          <Link to='/about'>
            <FlowSidebar.Item icon={InformationCircleIcon}>
              <p>Informações</p>
            </FlowSidebar.Item>
          </Link>
        </FlowSidebar.ItemGroup>
      </FlowSidebar.Items>
    </FlowSidebar>
  )
}
