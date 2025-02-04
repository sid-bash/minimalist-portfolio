import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Container sx={{ width: "700px", p: { xs: 6, sm: 8 } }}>
      <Outlet />
    </Container>
  );
};

export default MainLayout;
