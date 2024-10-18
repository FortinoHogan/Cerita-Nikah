import { createContext, useState, useContext, ReactNode } from 'react';
import { FormContextType } from './FormContext.interface';

const FormContext = createContext<FormContextType | null>(null);

export const useFormContext = () => {
    const context = useContext(FormContext);

    if (!context) {
        throw new Error('formContext must be used within a Provider');
    }

    return context;
};

export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [formState, setFormState] = useState("subDomain");

    return (
        <FormContext.Provider value={{ formState, setFormState }}>
            {children}
        </FormContext.Provider>
    );
};
