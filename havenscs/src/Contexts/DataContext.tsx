import React, {createContext, ReactNode, useCallback, useContext, useState} from "react";
import {supabase} from "../supabaseClient";
import {Project, ProjectBase, ProjectResponse, projectsMock, ProjectTranslation} from "../Models/Models";


interface DataContextType {
    getProjectsByLocale: (locale:'ru'|'lv') => void;
    isFetching: boolean;
    fetchError: null | Error;
}

const DataContext = createContext<DataContextType | null>(null);

interface DataContextProviderProps {
    children: ReactNode;

}


export const DataProvider = ({ children }: DataContextProviderProps) => {
    const [portfolio, setPortfolio] = useState<Project[]>(projectsMock);
    const [isFetching, setIsFetching] = useState(false);
    const [fetchError, setFetchError] = useState< null | Error>(null);
    function isError(error: unknown): error is Error {
        return error instanceof Error;
    }

    const getProjectsByLocale = useCallback(async (locale:'ru'|'lv') => {
        setIsFetching(true);
        setFetchError(null)
        try {
            const { data, error } = await supabase
                .from('projects')
                .select(`
                date,
                imageUrl,
                videoUrl,
                link,
                project_translations (
                    title,
                    subtitle,
                    description,
                    results
                )
            `)
                .eq('project_translations.language', locale);
            if (error) {
                throw error
            }
            const projectData:Project[] = data.map((project:any) => {
                return{
                    date: project.date,
                    imageUrl: project.imageUrl,
                    videoUrl: project.videoUrl,
                    link: project.link,
                    title: project.project_translations[0].title,
                    subtitle: project.project_translations[0].subtitle,
                    description: project.project_translations[0].description,
                    results: project.project_translations[0].results,
                    language:project.project_translations[0].language
                }
            })

            if (projectData) {
                setPortfolio(projectData);
            }
        }catch (e) {
            if (isError(e)) {
                setFetchError(e);
            } else {
                setFetchError(new Error('An unknown error occurred.'));
            }
        }finally {
            setIsFetching(false);
        }
    },[]);



    return (
        <DataContext.Provider value={{
            getProjectsByLocale,
            isFetching,
            fetchError
        }}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useThemeContext must be used within an ThemeContextProvider');
    }
    return context;
};
