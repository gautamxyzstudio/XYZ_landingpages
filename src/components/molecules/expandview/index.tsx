import React from 'react';

type IExpandViewProps = {
  children: React.ReactElement;
};

const ExpandView: React.FC<IExpandViewProps> = ({ children }) => {
  return <div className="">{children}</div>;
};

export default ExpandView;
