import React, { createContext, useState, ReactNode } from "react";
interface DataContextType {
  projectId: number | null;
  setProjectId: React.Dispatch<React.SetStateAction<number | null>>;
}

const defaultContextValue: DataContextType = {
  projectId: null,
  setProjectId: () => {},
};

export const DataContext = createContext<DataContextType>(defaultContextValue);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [projectId, setProjectId] = useState<number | null>(null);

  return (
    <DataContext.Provider value={{ projectId, setProjectId }}>
      {children}
    </DataContext.Provider>
  );
};
