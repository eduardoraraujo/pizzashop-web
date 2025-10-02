import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div>
      <h1>Header</h1>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
