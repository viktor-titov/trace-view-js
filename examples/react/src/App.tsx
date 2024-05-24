import React, { useEffect, useRef, FC } from 'react'

export const App: FC = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    // grid.render(wrapperRef.current);
  });
  
  return (
    <>
      <h1>Example use with react:</h1>
      <hr/>
      <div ref={wrapperRef} />
    </>
  );
}