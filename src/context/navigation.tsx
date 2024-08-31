import React, { ReactNode, createContext, useEffect, useState } from "react";

interface INavigationProvider {
  children: ReactNode;
}

interface INavigationContext {
  currentPath: string;
  navigate: (to: string) => void;
}

const NavigationContext = createContext<INavigationContext>({
  currentPath: '',
  navigate: () => {}
});

export const NavigationProvider: React.FC<INavigationProvider> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handler);

    return () => {
      window.removeEventListener('popstate', handler);
    };
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  }

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationContext;
