import React from "react";
import Popup, { IPopup } from "./BasePopup";

interface IModal extends Omit<IPopup, 'children'> {}

const Modal: React.FC<IModal> = ({ state, setState }) => {
  return (
    <Popup
      state={state}
      setState={setState}
    >
      <div className='p-6 rounded-xl border-gray-400 bg-white w-[500px]'>
        Modal
      </div>
    </Popup>
  )
}

export default Modal;
