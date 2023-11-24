import { useEffect, useRef, useState } from 'react';

export default ref => {
  if (process.env.NODE_ENV === 'development') {
    if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
      // eslint-disable-next-line no-console
      console.error('`useScroll` expects a single ref argument.');
    }
  }

  const frame = useRef(0);
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handler = () => {
      cancelAnimationFrame(frame.current);

      frame.current = requestAnimationFrame(() => {
        if (ref.current) {
          setState({
            x: ref.current.scrollLeft,
            y: ref.current.scrollTop,
          });
        }
      });
    };

    if (ref.current) {
      ref.current.addEventListener('scroll', handler, {
        capture: false,
        passive: true,
      });
    }

    return () => {
      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }

      if (ref.current) {
        ref.current.removeEventListener('scroll', handler);
      }
    };
  }, [ref.current]);

  return state;
};
