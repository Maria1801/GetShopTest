import React, { createContext, useContext, useState, ReactNode } from 'react';

const ActiveSectionContext = createContext<{
  activeSection: string | null;
  setActiveSection: React.Dispatch<React.SetStateAction<string | null>>;
} | null>(null);

export const ActiveSectionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      'useActiveSection must be used within an ActiveSectionProvider'
    );
  }
  return context;
};
