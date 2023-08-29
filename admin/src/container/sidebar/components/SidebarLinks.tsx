import { useState } from 'react'
import { Card, List, ListItem, ListItemSuffix } from '@material-tailwind/react'
import SvgIcon from '../../../utils/SvgIcon'
import { Link } from 'react-router-dom'

const SidebarLinks = () => {
  const [links] = useState([
    {
      title: 'داشبود',
      href: '/dashboard',
    },
    {
      title: 'تحصیلات',
      href: 'educations',
    },
    {
      title: 'تجربه کاری',
      href: 'experineces',
    },
    {
      title: 'پروژه ها',
      href: 'projects',
    },
  ])

  return (
    <Card className="w-full shadow-none">
      <List className="p-0">
        {links.map((link) => (
          <Link to={link.href} key={link.href}>
            <ListItem className="text-sm font-bold text-titr hover:text-secondary duration-300 p-0 py-2.5 pr-4 pl-2 rounded-l-full group">
              {link.title}
              <ListItemSuffix className="ml-0 mr-auto group-hover:hidden">
                <SvgIcon
                  name="arrow-left"
                  color="var(--color-titr)"
                  size={17}
                  weight={2}
                />
              </ListItemSuffix>
              <ListItemSuffix className="ml-0 mr-auto hidden group-hover:flex">
                <SvgIcon
                  name="arrow-left"
                  color="var(--color-secondary)"
                  size={17}
                  weight={2}
                />
              </ListItemSuffix>
            </ListItem>
          </Link>
        ))}
      </List>
    </Card>
  )
}

export default SidebarLinks
