import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box textAlign="center" p={3} mt={5} bgcolor="grey.200">
      <Typography variant="body2">
        © {new Date().getFullYear()} Nim. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
