import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { loginUser, logoutUser, signupUser, subscribeToAuth } from "../firebase/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToAuth((nextUser) => {
      setUser(nextUser);
      setAuthLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = useMemo(
    () => ({
      user,
      authLoading,
      isAuthenticated: Boolean(user),
      login: loginUser,
      signup: signupUser,
      logout: logoutUser
    }),
    [authLoading, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
