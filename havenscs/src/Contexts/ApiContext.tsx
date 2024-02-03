import React, { createContext, ReactNode, useContext, useState } from "react";
import { supabase } from "../supabaseClient";

interface News {
  id?: number;
  title: string;
  shortDescription: string;
  imageUrl: string;
  content: string;
}

interface ApiContextType {
  addNews: (newNews: News) => Promise<void>;
  getAllNews: () => Promise<void>;
  getLatestNews: () => Promise<void>;
  editNews: (newsId: number, editNews: News) => Promise<void>;

  getNewsById: (newsId: number) => Promise<News | null>; // <-- Ensure this is included
  deleteNews: (newsId: number) => Promise<void>;
  news: News[];
  newsError: null | Error;
}

const ApiContext = createContext<ApiContextType | null>(null);

interface ApiProviderProps {
  children: ReactNode;
}

export const ApiProvider = ({ children }: ApiProviderProps) => {
  const [news, setNews] = useState<News[]>([]);
  const [newsError, setNewsError] = useState<null | Error>(null);

  const addNews = async (newNews: News) => {
    try {
      const { data, error } = await supabase.from("News").insert([newNews]);
      if (error) throw error;
      setNews((prevNews) => [...prevNews, ...(data || [])]); // Handle potentially null data
    } catch (error) {
      setNewsError(error as Error); // Type assert error as Error
    }
  };

  const getAllNews = async () => {
    try {
      const { data, error } = await supabase
        .from("News")
        .select("*")
        .order("id", { ascending: false });
      if (error) throw error;
      setNews(data || []); // Handle potentially null data
    } catch (error) {
      setNewsError(error as Error); // Type assert error as Error
    }
  };
  const getLatestNews = async () => {
    try {
      const { data, error } = await supabase
        .from("News")
        .select("*")
        .order("id", { ascending: false })
        .limit(2);
      if (error) throw error;
      setNews(data || []); // Handle potentially null data
    } catch (error) {
      setNewsError(error as Error); // Type assert error as Error
    }
  };
  const editNews = async (newsId: number, updatedNews: News) => {
    try {
      const { error } = await supabase
        .from("News")
        .update(updatedNews)
        .match({ id: newsId });
      console.log("updating news", updatedNews);
      if (error) throw error;

      // Update the local state
      setNews((prevNews) =>
        prevNews.map((n) => (n.id === newsId ? { ...n, ...updatedNews } : n))
      );
    } catch (error) {
      console.error("Error updating news: ", error);
      setNewsError(error as Error); // Type assert error as Error
    }
  };

  const getNewsById = async (newsId: number): Promise<News | null> => {
    try {
      const { data, error } = await supabase
        .from("News")
        .select("*")
        .eq("id", newsId)
        .single();

      if (error) throw error;
      return data; // Returns the news item or null
    } catch (error) {
      setNewsError(error as Error);
      return null; // Indicates failure to retrieve the news
    }
  };

  const deleteNews = async (newsId: number) => {
    try {
      const { error } = await supabase
        .from("News")
        .delete()
        .match({ id: newsId });
      if (error) throw error;
      setNews((prevNews) => prevNews.filter((n) => n.id !== newsId));
    } catch (error) {
      setNewsError(error as Error); // Type assert error as Error
    }
  };

  return (
    <ApiContext.Provider
      value={{
        addNews,
        getAllNews,
        getLatestNews,
        deleteNews,
        news,
        newsError,
        getNewsById,
        editNews,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApiContext must be used within an ApiProvider");
  }
  return context;
};
