import React, { useEffect, useRef, FC } from 'react'
import {TraceViewTest} from '@viktor-titov/trace-view-js'

export const App: FC = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (wrapperRef.current) {
      TraceViewTest(wrapperRef.current)
    }
  });
  
  return (
    <>
      <h1>Example use with react:</h1>
      <hr/>
      <div ref={wrapperRef} />
    </>
  );
}