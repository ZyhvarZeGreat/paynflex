import * as React from "react";

interface User {
  id: string;
  email: string;
  // Add other user properties as needed
}

interface AuthContextType {
  user: User | null;
  signin: (email: string, password: string) => Promise<void>;
  signout: () => void;
}

const AuthContext = React.createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);

  const signin = async (email: string, password: string) => {
    // TODO: Implement actual authentication logic here
    // This is just a mock implementation
    setUser({ id: "1", email: email });
  };

  const signout = () => {
    setUser(null);
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
