import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Box } from "@mui/material";

export default function App() {
  //TODO - logic to redirect to login page if no auth details available. Show pending page until user is confirmed

  return (
    <>
      <Header />
      <Box padding={2}>
        <Outlet />
      </Box>
    </>
  );
}
