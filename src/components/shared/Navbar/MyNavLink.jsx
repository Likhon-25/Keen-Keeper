'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ImStatsDots } from "react-icons/im";
import { IoHome } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";


const MyNavLink = ({href,children}) => {
    const pathName = usePathname()
  
    return (
        <Link className={`btn btn-sm w-full md:w-min ${pathName===href? 'bg-green-800 text-white ':''}`} href={href}>{
            href== '/'&& <IoHome />} 
            {href== '/timeLine'&&<RiTimeLine />} {href=='/stats'&&<ImStatsDots />}
             {children}</Link>
    );
};

export default MyNavLink;