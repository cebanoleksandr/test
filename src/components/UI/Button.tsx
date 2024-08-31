import React, { ReactNode } from "react";
import { Mode } from "../../pages/ButtonPage";

interface IButton {
  mode: Mode;
  children: ReactNode;
  onClick: () => void;
}

const Button: React.FC<IButton> = ({ mode, children, ...rest }) => {
  return (
    <button
      className={`flex items-center gap-1 px-4 py-2 rounded-xl ${
        mode === 'success' && 'text-white bg-green-600 hover:bg-green-400 active:bg-green-800'} ${
        mode === 'primary' && 'text-white bg-blue-600 hover:bg-blue-400 active:bg-blue-800'} ${
        mode === 'danger' && 'text-red-600 border border-red-400 bg-white hover:bg-red-200 active:bg-red-400'} ${
        mode === 'plain' && 'text-gray-800 border border-gray-400 bg-white hover:bg-gray-200 active:bg-gray-400'} ${
        mode === 'warning' && 'text-gray-800 border border-yellow-400 bg-white hover:bg-yellow-200 active:bg-yellow-400'} ${
        mode === 'secondary' && 'text-white bg-black hover:bg-gray-800 active:bg-gray-900'} transition duration-300`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button;
