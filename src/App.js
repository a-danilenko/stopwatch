import React from "react";
import { useEffect, useState } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import './App.css'
 
export default function App() {
  const [sec, setSec] = useState(0);
  const [status, setStatus] = useState();
 
  useEffect(() => {
    const unsubscribe = new Subject();
    interval(1000)
      .pipe(takeUntil(unsubscribe))
      .subscribe(() => {
        if (status === 'run') {
          setSec(value => value + 1000);
        }
      });
    return () => {
      unsubscribe.next();
      unsubscribe.complete();
    };
  }, [status]);
 
  const start = React.useCallback(() => {
    setStatus('run');
  }, []);
 
  const stop = React.useCallback(() => {
    setStatus('stop');
    setSec(0);
  }, []);

  const wait = React.useCallback(() => {
    setStatus('wait');
  }, []);
 
  const reset = React.useCallback(() => {
    setSec(0);
  }, []);
 
  return (
    <div className='container'>
      <span className='watch'> {new Date(sec).toISOString().slice(11, 19)}</span>
      <div className='buttons'>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={wait}>Wait</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
