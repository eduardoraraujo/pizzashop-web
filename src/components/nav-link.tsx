import { Link, useLocation, type LinkProps } from 'react-router-dom'

export type NavLinkProps = LinkProps

export default function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-75 data-[current=true]:text-foreground"
      {...props}
    />
  )
}
