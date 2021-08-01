import React from 'react';

const Index: React.FC<any> = (props) => {
  return (
    <div>
      {props.data.map((r: any) => (
        <div key={r.title}>{r.title}</div>
      ))}
    </div>
  );
};

export default Index;
