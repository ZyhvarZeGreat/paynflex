import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";

interface RequireAuthProps {
  children: JSX.Element;
}

const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookieValue = parts.pop();
    return cookieValue ? cookieValue.split(";").shift() : undefined;
  }
};

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const { user } = useAuth();
  const location = useLocation();
  const token = getCookie("token"); // Check for the token in cookies

  if (!user || !token) {
    toast({
      title: "Unauthorized access",
      description: "Unauthorized access. Please login to continue.",
      className: "bg-yellow-50 text-yellow-500 font-inter warning",
    });
    // Redirect to login page but save the attempted location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
