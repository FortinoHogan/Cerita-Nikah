import { createContext, useState, useContext, ReactNode } from 'react';
import { GalleryContextType } from './GalleryContext.interface';

const GalleryContext = createContext<GalleryContextType | null>(null);

export const useGalleryContext = () => {
    const context = useContext(GalleryContext);

    if (!context) {
        throw new Error('galleryContext must be used within a Provider');
    }

    return context;
};

export const GalleryProvider = ({ children }: { children: ReactNode }) => {
    const [galleryState, setGalleryState] = useState("images");

    return (
        <GalleryContext.Provider value={{ galleryState, setGalleryState }}>
            {children}
        </GalleryContext.Provider>
    );
};
