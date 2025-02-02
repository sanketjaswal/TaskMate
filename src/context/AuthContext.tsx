import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../firebase";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

// Define the type for the context value
interface AuthContextType {
  user: User | null;
  login: () => Promise<User | null>;
  logout: () => Promise<void>;
}

// Initialize the context with a default value
const AuthContext = createContext<AuthContextType | null>(null);

// Auth provider that wraps app and provides the context value
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Subscribe to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  // Firebase login
  const login = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      setUser(res.user);
      return res.user; // ✅ Return user to handle navigation outside
    } catch (error) {
      console.error("Login failed", error);
      return null;
    }
  };

  // Firebase logout
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
