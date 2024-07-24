import React, { createContext, useState, ReactNode } from "react";

interface DataProviderProps {
  children: ReactNode;
}

export const DataContext = createContext<any>(null);

export const DataProvider = ({ children }: DataProviderProps) => {
  const [projectId, setProjectId] = useState<number | null>(null); // Initialize with null or initial ID if available

  return (
    <DataContext.Provider value={{ projectId, setProjectId }}>
      {children}
    </DataContext.Provider>
  );
};
