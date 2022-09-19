import {useEffect} from 'react';

function useClickOutSide(ref:React.RefObject<HTMLElement>,clickHandler:Function) {
    useEffect(() => {
      function handleClickOutside(event: Event) {
        const target  = event.target as HTMLButtonElement;
        if (ref.current && !ref.current.contains(target)) {
          clickHandler();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref,clickHandler]);
  }

  export default useClickOutSide