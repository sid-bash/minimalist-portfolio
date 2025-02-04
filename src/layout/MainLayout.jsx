import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Container sx={{ width: "640px", p: 10 }}>
      <Outlet />
    </Container>
  );
};

export default MainLayout;
