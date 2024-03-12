import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useRequest } from '@/services/axios/useRequest'
import { Keys } from '@/constants/Keys'
import { Paths } from '@/constants/Paths'

const AvatarMenu = () => {
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const { data } = useRequest({
    queryKey: Keys.about.about,
    url: Paths.about.all,
  })

  console.log('data', data)

  const logoutHandler = () => {
    navigate('/login')
    Cookies.remove('token')
  }

  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar
          sx={{ width: 50, height: 50 }}
          src={data?.aboutMe?.avatar?.url}
        />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        sx={{
          '& .MuiPaper-root': {
            width: 200,
          },
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          py={1}
        >
          <Avatar
            sx={{ width: 40, height: 40 }}
            src={data?.aboutMe?.avatar?.url}
          />
          <Typography variant="subtitle2">
            {data?.aboutMe?.firstName?.fa + ' ' + data?.aboutMe?.lastName?.fa}
          </Typography>
        </Stack>
        <Divider />
        <MenuItem onClick={() => navigate('/dashboard')} sx={{ paddingY: 1.5 }}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <Typography variant="subtitle2">درباره من</Typography>
        </MenuItem>
        <MenuItem onClick={logoutHandler} sx={{ paddingY: 1.5 }}>
          <ListItemIcon>
            <PowerSettingsNewIcon />
          </ListItemIcon>
          <Typography variant="subtitle2">خروج از حساب کاربری</Typography>
        </MenuItem>
      </Menu>
    </>
  )
}

export default AvatarMenu
