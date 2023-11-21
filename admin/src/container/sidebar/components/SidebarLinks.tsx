import { useState } from 'react'
import { Link } from 'react-router-dom'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

const SidebarLinks = () => {
  const [links] = useState([
    {
      id: 1,
      title: 'داشبود',
      children: [],
      href: 'dashboard',
    },
    {
      id: 2,
      title: 'تحصیلات',
      children: [{ title: 'لیست سوابق تحصیلی', href: 'dashboard/educations' }],
    },
    {
      id: 3,
      title: 'تجربه کاری',
      children: [
        { title: 'افزودن جدید', href: '' },
        { title: 'لیست سوابق کاری', href: 'dashboard/experineces' },
      ],
    },
    {
      id: 4,
      title: 'پروژه ها',
      children: [
        { title: 'افزودن جدید', href: '' },
        { title: 'لیست پروژه ها', href: 'dashboard/projects' },
      ],
    },
  ])

  const [open, setOpen] = useState<number | null>(null)

  const handleClick = (id: number) => {
    setOpen(id)
  }

  return (
    <List className="grid gap-y-0.5">
      {links.map((link) =>
        link.children.length > 0 ? (
          <>
            <ListItemButton
              key={link.id}
              className="rounded-e-full"
              onClick={() => handleClick(link.id)}
              selected={link.id === open}
            >
              <ListItemText
                className="text-start"
                primary={link.title}
                primaryTypographyProps={{
                  color: 'titr',
                  fontWeight: 'medium',
                  fontSize: '15px',
                }}
              />
              {link.id === open ? (
                <ExpandLess className="text-base" />
              ) : (
                <ExpandMore className="text-base" />
              )}
            </ListItemButton>
            <Collapse in={link.id === open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {link.children.map((item) => (
                  <ListItemButton
                    key={item.title}
                    component={Link}
                    to={`/${item.href}`}
                    className="bg-transparent"
                    sx={{ pr: 4, paddingY: '4px' }}
                  >
                    <ListItemText
                      className="text-start"
                      primary={item.title}
                      primaryTypographyProps={{
                        color: 'titr',
                        fontWeight: 'medium',
                        fontSize: '14px',
                      }}
                      sx={{
                        transition: '0.3s',
                        '&:hover': {
                          color: 'secondary.main',
                        },
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </>
        ) : (
          <ListItemButton
            key={link.id}
            component={Link}
            to={`/${link.href}`}
            className="rounded-e-full"
            onClick={() => handleClick(link.id)}
            selected={link.id === open}
          >
            <ListItemText
              className="text-start"
              primary={link.title}
              primaryTypographyProps={{
                color: 'titr',
                fontWeight: 'medium',
                fontSize: '15px',
              }}
            />
          </ListItemButton>
        )
      )}
    </List>
  )
}

export default SidebarLinks
