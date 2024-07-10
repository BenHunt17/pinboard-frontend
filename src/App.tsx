import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { Box } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingPlaceholder from "./components/LoadingPlaceholder";

export default function App() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth0();

  if (!isAuthenticated) {
    navigate("/login");
  }

  if (isLoading) {
    return <LoadingPlaceholder />;
  }

  return (
    <>
      <Header />
      <Box padding={2}>
        <Outlet />
      </Box>
    </>
  );
}
