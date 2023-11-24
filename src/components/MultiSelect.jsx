import React from 'react';
import Select from 'react-select';
import useScroll from './useScroll';

const MultiSelect = ({ scrollRef }) => {
  const { x, y } = useScroll(scrollRef);
  console.warn(x, y);

  return (
    <Select
      className="select"
      menuPortalTarget={document.body}
      // styles={{
      //   menuPortal: (styles, props) => {
      //     console.warn(styles);
      //     // console.warn(props);

      //     return { ...styles, zIndex: 9999 };
      //   },
      // }}
      options={[
        { value: 'option1', label: 'option1' },
        { value: 'option2', label: 'option2' },
        { value: 'option3', label: 'option3' },
      ]}
    />
  );
};

export default MultiSelect;
