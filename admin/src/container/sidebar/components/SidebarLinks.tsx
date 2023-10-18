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
      href: '/dashboard',
    },
    {
      id: 2,
      title: 'تحصیلات',
      children: [
        { title: 'افزودن جدید', href: '' },
        { title: 'لیست سوابق تحصیلی', href: '' },
      ],
      href: 'educations',
    },
    {
      id: 3,
      title: 'تجربه کاری',
      children: [
        { title: 'افزودن جدید', href: '' },
        { title: 'لیست سوابق تحصیلی', href: '' },
      ],
      href: 'experineces',
    },
    {
      id: 4,
      title: 'پروژه ها',
      children: [
        { title: 'افزودن جدید', href: '' },
        { title: 'لیست سوابق تحصیلی', href: '' },
      ],
      href: 'projects',
    },
  ])

  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <List>
      {links.map((link) => (
        <>
          <ListItemButton
            key={link.id}
            className="rounded-e-full"
            onClick={handleClick}
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
          {link.children?.length > 0 && (
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {link.children.map((item) => (
                  <ListItemButton
                    key={item.title}
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
          )}
        </>
      ))}
      {/* <ListItemButton className="rounded-e-full">
        <ListItemText
          className="text-start"
          primary="داشبورد"
          primaryTypographyProps={{
            color: 'titr',
            fontWeight: 'medium',
            fontSize: '15px',
          }}
        />
      </ListItemButton> */}
      <ListItemButton className="rounded-e-full" onClick={handleClick}>
        <ListItemText
          className="text-start"
          primary="تحصیلات"
          primaryTypographyProps={{
            color: 'titr',
            fontWeight: 'medium',
            fontSize: '15px',
          }}
        />
        {open ? (
          <ExpandLess className="text-base" />
        ) : (
          <ExpandMore className="text-base" />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            className="bg-transparent"
            sx={{ pr: 4, paddingY: '4px' }}
          >
            <ListItemText
              className="text-start"
              primary="افزودن جدید"
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
          <ListItemButton
            className="bg-transparent"
            sx={{ pr: 4, paddingY: '4px' }}
          >
            <ListItemText
              className="text-start"
              primary="لیست سوابق تحصیلی"
              primaryTypographyProps={{
                color: 'titr',
                fontWeight: 'medium',
                fontSize: '14px',
              }}
            />
          </ListItemButton>
        </List>
      </Collapse>
    </List>

    // <Card className="w-full shadow-none">
    //   <List className="p-0">
    //     {links.map((link) => (
    //       <Link to={link.href} key={link.href}>
    //         <ListItem className="text-sm font-bold text-titr hover:text-secondary duration-300 p-0 py-2.5 pr-4 pl-2 rounded-l-full group">
    //           {link.title}
    //           <ListItemSuffix className="ml-0 mr-auto group-hover:hidden">
    //             <SvgIcon
    //               name="arrow-left"
    //               color="var(--color-titr)"
    //               size={17}
    //               weight={2}
    //             />
    //           </ListItemSuffix>
    //           <ListItemSuffix className="ml-0 mr-auto hidden group-hover:flex">
    //             <SvgIcon
    //               name="arrow-left"
    //               color="var(--color-secondary)"
    //               size={17}
    //               weight={2}
    //             />
    //           </ListItemSuffix>
    //         </ListItem>
    //       </Link>
    //     ))}
    //   </List>
    // </Card>
  )
}

export default SidebarLinks
