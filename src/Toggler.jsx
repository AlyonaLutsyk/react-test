import { useEffect, useState } from 'react';
  

export default function Toggler({ children }) {
    const [isOpen, setIsOpen] = useState(() => {
        const savedState = window.localStorage.getItem("open-children");
        return savedState === "true";
    });
    useEffect(() => {
        window.localStorage.setItem("open-children", isOpen)
    }, [isOpen]);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };
     return (<div>
       <button onClick={toggleContent}>Open/Close</button>
       {isOpen && children}
     </div>
     );
  }