import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { Box } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingPlaceholder from "./components/LoadingPlaceholder";
import { useEffect } from "react";

export default function App() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
    if (isAuthenticated) {
      navigate("/notes");
    }
  }, [isAuthenticated, navigate]);

  if (isLoading) {
    return <LoadingPlaceholder />;
  }

  return (
    <>
      <Header isLandingPage={!isAuthenticated} />
      <Box padding={2}>
        <Outlet />
      </Box>
    </>
  );
}
