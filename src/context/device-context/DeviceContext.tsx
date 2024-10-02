import { createContext, useState, useContext, ReactNode } from 'react';
import { DeviceContextType } from './DeviceContext.interface';

const DeviceContext = createContext<DeviceContextType | null>(null);

export const useDeviceContext = () => {
  const context = useContext(DeviceContext);

  if (!context) {
    throw new Error('deviceContext must be used within a Provider');
  }

  return context;
};

export const DeviceProvider = ({ children }: { children: ReactNode }) => {
  const [deviceState, setDeviceState] = useState("phone");

  return (
    <DeviceContext.Provider value={{ deviceState, setDeviceState }}>
      {children}
    </DeviceContext.Provider>
  );
};
