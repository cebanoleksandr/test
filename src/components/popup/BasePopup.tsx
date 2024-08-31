import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface IPopup {
  children: ReactNode;
  state: boolean;
  setState: (state: boolean) => void;
}

const Popup: React.FC<IPopup> = (props) => {
  const [isMount, setIsMount] = useState(true);

  useEffect(() => setIsMount(false));

  return (
    createPortal(
      <div
        onClick={() => props.setState(false)}
        className={
          [
            (isMount || !props.state) && 'hidden',
            'fixed z-10 w-full h-full top-0 bg-zinc-900/40 flex flex-col justify-center items-center'
          ].join(' ')
        }
      >
        <div onClick={(event) => event.stopPropagation()}>
          {props.children}
        </div>
      </div>,
      document.body
    )
  )
}

export default Popup;
