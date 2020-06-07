import React, { useState, useMemo } from 'react';
import Dropdown from '../dropdown';

const LanguagePicker = () => {
  const [value, setValue] = useState({
    title: 'РУ',
    value: 'ru',
  });

  const languages = useMemo(
    () => [
      {
        title: 'РУ',
        value: 'ru',
      },
      {
        title: 'RO',
        value: 'ro',
      },
      {
        title: 'EN',
        value: 'en',
      },
    ],
    [],
  );

  const handleClick = () => {};

  return (
    <div className="relative language text-xl uppercase font-black">
      <div className="uppercase">{value.title}</div>
      <div className="absolute w-full border-2 border-yellow rounded"></div>
      <Dropdown
        items={languages}
        renderItem={(item) => {
          return (
            <span className="hover:text-yellow" onClick={handleClick}>
              {item.title}
            </span>
          );
        }}
      />
      <style jsx>
        {`
          .language {
            cursor: pointer;
          }

          .language :global(.dropdown-container) {
            transform: translateX(-25px);
          }

          .language:hover :global(.dropdown-container) {
            display: block;
          }
        `}
      </style>
    </div>
  );
};

export default LanguagePicker;
