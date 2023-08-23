import { useState } from "react";
import SidebarLinkItem from "./SidebarLinkItem";

const SidebarLinks = () => {
  const [links] = useState([
    {
      title: "داشبود",
      href: "/dashboard",
    },
    {
      title: "تحصیلات",
      href: "educations",
    },
    {
      title: "تجربه کاری",
      href: "experineces",
    },
    {
      title: "پروژه ها",
      href: "projects",
    },
  ]);

  return links.map((link) => {
    return <SidebarLinkItem link={link} key={link.href} />;
  });
};

export default SidebarLinks;
