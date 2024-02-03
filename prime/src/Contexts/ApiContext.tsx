import React, { createContext, ReactNode, useContext, useState } from "react";
import { supabase } from "../supabaseClient";

// Updated News interface
interface News {
  id: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  content: string;
  date: string; // Date is now a string
}

interface ApiContextType {
  addNews: (newNews: News) => Promise<void>;
  getAllNews: () => Promise<void>;
  getLatestNews: () => Promise<void>;
  editNews: (newsId: string, editNews: News) => Promise<void>;
  getNewsById: (newsId: string) => Promise<News | null>;
  deleteNews: (newsId: string) => Promise<void>;
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
      setNews((prevNews) => [...prevNews, ...(data || [])]);
    } catch (error) {
      setNewsError(error as Error);
    }
  };

  const getAllNews = async () => {
    try {
      const { data, error } = await supabase.from("News").select("*").order("id", { ascending: false });
      if (error) throw error;
      setNews(data || []);
    } catch (error) {
      setNewsError(error as Error);
    }
  };

  const getLatestNews = async () => {
    try {
      const { data, error } = await supabase.from("News").select("*").order("id", { ascending: false }).limit(2);
      if (error) throw error;
      setNews(data || []);
    } catch (error) {
      setNewsError(error as Error);
    }
  };

  const editNews = async (newsId: string, updatedNews: News) => {
    try {
      const { error } = await supabase.from("News").update(updatedNews).match({ id: newsId });
      if (error) throw error;
      setNews((prevNews) => prevNews.map((n) => (n.id === newsId ? { ...n, ...updatedNews } : n)));
    } catch (error) {
      console.error("Error updating news: ", error);
      setNewsError(error as Error);
    }
  };

  const getNewsById = async (newsId: string): Promise<News | null> => {
    try {
      const { data, error } = await supabase.from("News").select("*").eq("id", newsId).single();
      if (error) throw error;
      return data;
    } catch (error) {
      setNewsError(error as Error);
      return null;
    }
  };

  const deleteNews = async (newsId: string) => {
    try {
      const { error } = await supabase.from("News").delete().match({ id: newsId });
      if (error) throw error;
      setNews((prevNews) => prevNews.filter((n) => n.id !== newsId));
    } catch (error) {
      setNewsError(error as Error);
    }
  };

  return (
    <ApiContext.Provider value={{ addNews, getAllNews, getLatestNews, editNews, getNewsById, deleteNews, news, newsError }}>
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

export default ApiProvider;
