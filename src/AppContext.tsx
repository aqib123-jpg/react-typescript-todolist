import React, { createContext, useState, ReactNode, useContext } from "react";

interface AppState {
  input: string;
  updateInput: (value: string) => void;
  arr: Array<string>;
  updateArr: (newArr: Array<string>) => void;
  completedArr: Array<string>;
  updateCompletedArr: (newArr: Array<string>) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [input, setInput] = useState<string>("");
  const [arr, setArr] = useState<Array<string>>([]);
  const [completedArr, setCompletedArr] = useState<Array<string>>([]);

  const updateInput = (value: string) => {
    setInput(value);
  };
  const updateArr = (newArr: Array<string>) => setArr(newArr);
  const updateCompletedArr = (newArr: Array<string>) => setCompletedArr(newArr);

  return (
    <AppContext.Provider value={{ input, updateInput,arr, updateArr,completedArr,updateCompletedArr}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
