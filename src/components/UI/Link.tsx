import React, { MouseEvent, ReactNode, useContext } from "react";
import NavigationContext from "../../context/navigation";

interface ILink {
  to: string;
  children: ReactNode;
}

const Link: React.FC<ILink> = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate(to);
  }

  return (
    <a
      href={to} 
      onClick={handleClick}
      className='text-blue-500'
    >
      {children}
    </a>
  )
}

export default Link;
