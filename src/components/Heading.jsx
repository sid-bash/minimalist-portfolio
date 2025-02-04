import { Typography } from "@mui/material";

const Heading = ({ text }) => {
  return (
    <Typography
      gutterBottom
      sx={{
        fontWeight: 600,
      }}
    >
      {text}
    </Typography>
  );
};

export default Heading;
