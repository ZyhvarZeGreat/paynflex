import { login } from "@/services/login";
import * as React from "react";
import { toast, useToast } from "./use-toast";
import { useNavigate } from "react-router";
import { setAuthToken } from "@/api/axios";

interface User {
  id: string;
  email: string;
  token: string;
  // Add other user properties as needed
}

interface AuthContextType {
  user: User | null;
  signin: (
    email: string,
    password: string,
    phoneNumber: string
  ) => Promise<void>;
  signout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = React.createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { toast } = useToast();
  const [user, setUser] = React.useState<User | null>(() => {
    // Check if there's a stored token on initial load
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
    if (token) {
      // Set the auth token in Axios when provider mounts
      setAuthToken(token);
      return { id: "1", email: "", token: token };
    }
    return null;
  });

  // Set up an effect to update Axios headers whenever user/token changes
  React.useEffect(() => {
    const token = user?.token;
    if (token) {
      setAuthToken(token);
    } else {
      setAuthToken(null); // Clear the auth token if no user
    }
  }, [user]);

  const signin = async (
    email: string,
    password: string,
    phoneNumber: string
  ) => {
    try {
      // Use your login service
      const response = await login({ phoneNumber: phoneNumber, password });
      const token = response.token;
      setAuthToken(token);
      // Set cookie
      document.cookie = `token=${token}; path=/; secure; samesite=strict`;

      // Update user state
      setUser({ id: "1", email, token });
    } catch (error: any) {
      toast({
        title: "Login failed",
        description: error?.message || "Please check your credentials",
        className: "bg-red-500 text-white font-inter",
      });
      throw error;
    }
  };

  const signout = () => {
    // Clear cookie
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    setUser(null);
  };

  const value = {
    user,
    signin,
    signout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const navigate = useNavigate();
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const checkAuth = () => {
    if (!context.isAuthenticated) {
      toast({
        title: "Login failed",
        description: "Unauthorized access. Please login to continue.",
        className: "bg-red-500 text-white font-inter",
      });
      navigate("/login");
    }
    return context.isAuthenticated;
  };

  return {
    ...context,
    checkAuth,
  };
}
