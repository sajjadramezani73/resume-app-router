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
import avatarImg from '../../assets/images/avatar.jpg'
import { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'

const AvatarMenu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar sx={{ width: 50, height: 50 }} src={avatarImg} />
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
          <Avatar sx={{ width: 40, height: 40 }} src={avatarImg} />
          <Typography variant="subtitle2">سجاد رمضانی</Typography>
        </Stack>
        <Divider />
        <MenuItem onClick={handleClose} sx={{ paddingY: 1.5 }}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <Typography variant="subtitle2">درباره من</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ paddingY: 1.5 }}>
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
