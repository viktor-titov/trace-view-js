import React, { useEffect, useRef, FC } from 'react'
import { TraceView, generateMockTrace } from '@viktor-titov/trace-view-js'

export const App: FC = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (wrapperRef.current) {
      const trace = new TraceView({container: wrapperRef.current});
      trace.render({trace: generateMockTrace()});
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