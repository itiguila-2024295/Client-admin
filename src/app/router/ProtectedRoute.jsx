import { Navigate } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import { useAuthStore } from "../../features/auth/store/authStore.js";
import { Children } from "react";

export const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const isLoadingAuth = useAuthStore((state) => state.isLoadingAuth);

    if (isLoadingAuth) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Spinner color="blue" size="xl" />
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children;
}