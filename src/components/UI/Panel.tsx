import classNames from "classnames";
import React, { ReactNode } from "react";

interface IPanel {
  children: ReactNode;
  className: string;
}

const Panel: React.FC<IPanel> = ({ children, className, ...rest }) => {
  const finalClassNames = classNames(
    'border border-gray-300 p-1 shadow bg-white',
    className
  );

  return (
    <div className={finalClassNames} {...rest}>
      {children}
    </div>
  )
}

export default Panel;
