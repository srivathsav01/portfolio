
import React, { createContext, useState, useContext, useCallback } from "react";
import Ticker from "./ticker";

const ToasterContext = createContext();

export const ToasterProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  
  const showToast = useCallback((config) => {
    setToast(config);
    setTimeout(() => setToast(null), config.duration || 6500); 
  }, []);

  
  const success = (message) =>
    showToast({
      title: "Success",
      text: message,
      icon: "success",
    });

  const failure = (message) =>
    showToast({
      title: "Failure",
      text: message,
      icon: "failure"
    });

  const notification = (message) =>
    showToast({
      title: "Notification",
      text: message,
      icon: "info"
    });

  return (
    <ToasterContext.Provider value={{ success, failure, notification }}>
      {children}
      {toast && (
        <div
          className="fixed bottom-4 right-8 bg-black shadow-md rounded-2xl p-3 border-l-4 w-[380px] max-w-[90%] text-white"
          style={{
            borderColor:
              toast.icon === "success"
                ? "#22c55e"
                : toast.icon === "failure"
                ? "#ef4444"
                : "#3b82f6",
          }}
        >
        <div className="flex">
            <div>
                <h4 className="font-bold text-lg">{toast.title}</h4>
                <p className="text-sm text-white">{toast.text}</p>
            </div>
            <div className="ml-auto text-white text-xl border-2 border-[#444] p-2">
                <Ticker items={["5", "4", "3", "2", "1","0"]} />
            </div>
        </div>
        </div>
      )}
    </ToasterContext.Provider>
  );
};


export const useToaster = () => {
  return useContext(ToasterContext);
};
