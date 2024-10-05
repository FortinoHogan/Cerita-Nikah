import { createContext, useState, useContext, ReactNode } from 'react';
import { ContentContextType } from './ContentContext.interface';

const ContentContext = createContext<ContentContextType | null>(null);

export const useContentContext = () => {
    const context = useContext(ContentContext);

    if (!context) {
        throw new Error('contentContext must be used within a Provider');
    }

    return context;
};

export const ContentProvider = ({ children }: { children: ReactNode }) => {
    const [contentState, setContentState] = useState("regards");

    return (
        <ContentContext.Provider value={{ contentState, setContentState }}>
            {children}
        </ContentContext.Provider>
    );
};
