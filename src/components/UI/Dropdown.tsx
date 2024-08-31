import React, { useEffect, useRef, useState } from "react";
import { GoChevronDown } from 'react-icons/go';
import Panel from "./Panel";
import { Option } from "../../pages/DropdownPage";

interface IDropdown {
  options: Option[];
  onSelect: (option: Option) => void;
  selectedOption: Option | null;
  defaultLabel?: string;
}

const Dropdown: React.FC<IDropdown> = ({ options, onSelect, selectedOption, defaultLabel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const onOptionClick = (option: Option) => {
    setIsOpen(false);
    onSelect(option);
  }

  return (
    <div
      ref={selectRef}
      className='w-48'
    >
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex justify-between items-center w-full border border-gray-300 bg-white rounded-lg px-2 py-1 relative overflow-hidden shadow-md'
        >
          {selectedOption?.label || defaultLabel || 'Select an option'}
          <GoChevronDown />
        </button>

        {isOpen && (
          <Panel className="">
            {options.map(option => (
              <div
                key={option.value}
                onClick={() => onOptionClick(option)}
                className='hover:bg-sky-100 rounded cursor-pointer p-1 transition duration-300'
              >{option.label}</div>
            ))}
          </Panel>
        )}
      </div>
    </div>
  )
}

export default Dropdown;
