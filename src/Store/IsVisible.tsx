"use client";
import React, {
  ActionDispatch,
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { ReactFormState } from "react-dom/client";

interface IIsVisible {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const IsVisible = createContext<IIsVisible | null>(null);

export const IsVisibleProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <IsVisible.Provider value={{ visible, setVisible }}>
      {children}
    </IsVisible.Provider>
  );
};

export const useIsVisible = () => {
  const context = useContext(IsVisible);

  if (!context) {
    throw new Error("Provider is Visible is not applied");
  }

  return context;
};

export default IsVisible;
