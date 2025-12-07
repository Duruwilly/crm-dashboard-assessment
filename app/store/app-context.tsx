import { createContext, useContext, useState, type ReactNode } from "react";

interface AppContextType {
  data: string;
  setData: (value: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function ContextProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState("");

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  return context;
}
