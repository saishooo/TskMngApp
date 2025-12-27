"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type AlertType = "success" | "error";

type AlertState = {
  message: string;
  type: AlertType;
} | null;

type AlertContextType = {
  showAlert: (message: string, type: AlertType) => void;
};

const AlertContext = createContext<AlertContextType>({} as AlertContextType);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alert, setAlert] = useState<AlertState>(null);

  const showAlert = (message: string, type: AlertType) => {
    setAlert({ message, type });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert && <div className={`alert ${alert.type}`}>{alert.message}</div>}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
