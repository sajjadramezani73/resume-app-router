import { Link } from "react-router-dom";
import SvgIcon from "../../../utils/SvgIcon";
import { ISidebarItem } from "../../../types/Types";

interface Props {
  link: ISidebarItem;
}

const SidebarLinkItem = ({ link }: Props) => {
  return (
    <>
      <Link
        to={link?.href}
        className="flex justify-between items-center py-2.5 pr-4 pl-2 rounded-l-full hover:bg-primary/10 duration-300 group"
      >
        <p className="text-sm font-bold text-titr group-hover:text-secondary duration-300">
          {link.title}
        </p>
        <span className="group-hover:hidden">
          <SvgIcon
            name="arrow-left"
            color="var(--color-titr)"
            size={17}
            weight={2}
          />
        </span>
        <span className="hidden group-hover:flex">
          <SvgIcon
            name="arrow-left"
            color="var(--color-secondary)"
            size={17}
            weight={2}
          />
        </span>
      </Link>
    </>
  );
};

export default SidebarLinkItem;
