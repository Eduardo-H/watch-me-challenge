import { createContext, useState, ReactNode, useContext, useCallback } from 'react';

interface ContentContextData {
    selectedGenreId: number;
    handleClickButton: (id: number) => void;
}

export const ContentContext = createContext({} as ContentContextData);

type ContentContextProviderProps = {
    children: ReactNode;
}

export function ContentContextProvider({ children }: ContentContextProviderProps) {
    const [selectedGenreId, setSelectedGenreId] = useState(1);
    
    const handleClickButton = useCallback((id: number) => {
        setSelectedGenreId(id);
    }, []);

    return (
        <ContentContext.Provider 
            value={{ 
                selectedGenreId,
                handleClickButton
            }}
        >
            { children }
        </ContentContext.Provider>
    )
}

export const useContent = () => {
    return useContext(ContentContext);
}