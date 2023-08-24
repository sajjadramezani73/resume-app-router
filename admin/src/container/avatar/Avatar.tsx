import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";

import avatarImg from "../../assets/images/avatar.jpg";
import SvgIcon from "../../utils/SvgIcon";

const AvatarMenu = () => {
  return (
    <Menu placement="bottom-start">
      <MenuHandler>
        <Avatar
          variant="circular"
          alt=""
          className="cursor-pointer"
          src={avatarImg}
        />
      </MenuHandler>
      <MenuList className="font-iranyekan">
        <MenuItem className="flex items-center gap-2">
          <SvgIcon name="user" size={18} color="var(--color-caption)" />
          <Typography variant="small" className="font-normal">
            درباره من
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2 ">
          <SvgIcon
            name="power"
            size={18}
            weight={3}
            color="var(--color-caption)"
          />
          <Typography variant="small" className="font-normal">
            خروج
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AvatarMenu;
