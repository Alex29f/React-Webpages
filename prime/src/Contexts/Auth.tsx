import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { supabase } from "../supabaseClient";
import { Session } from "@supabase/supabase-js";

interface User {
  id: string;
  aud: string;
  role: string;
  email: string | null;
  confirmed_at: string | null;
  last_sign_in_at: string | null;
  app_metadata: {
    provider: string;
    [key: string]: any;
  };
  user_metadata: {
    [key: string]: any;
  };
  created_at: string;
  updated_at: string;
}

interface AuthContextType {
  login: (email: string, password: string) => Promise<number>;
  session: Session | null;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}
// Define a type for the function that makes the API call

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [session, setSession] = React.useState<Session | null>(null);
  const login = async (email: string, password: string): Promise<number> => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      console.log(error);
      throw error;
    }
    return 200; // Or handle the status code as you prefer
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };
  React.useEffect(() => {
    const subscription = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        setSession(null);
      } else if (session) {
        setSession(session);
      }
    });

    return () => {
      subscription.data.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        session,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
