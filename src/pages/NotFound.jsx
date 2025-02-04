import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h3" color="error" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Go Home
      </Button>
    </Box>
  );
};

export default NotFound;
