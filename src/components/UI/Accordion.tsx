import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

interface IAccordion {
  items: {label: string, content: string, id: string}[];
}

const Accordion: React.FC<IAccordion> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const onOpenCollapse = (index: number) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  }

  return (
    <div className='border-x border-t border-gray-400 rounded-xl overflow-hidden w-[500px] mx-auto shadow-md'>
      {items.map((item, index) => (
        <div key={item.id} className='border-b border-gray-400'>
          <div
            className='cursor-pointer px-4 py-2 font-semibold flex items-center justify-between'
            onClick={() => onOpenCollapse(index)}
          >
            {item.label}

            {expandedIndex === index ? (
              <GoChevronDown />
            ) : (
              <GoChevronLeft />
            )}
          </div>

          {index === expandedIndex && (
            <div className='px-4 py-2 bg-gray-100'>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
