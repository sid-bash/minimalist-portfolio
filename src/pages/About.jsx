import { Box, Stack, Typography } from "@mui/material";
import { COLORS } from "../utils/constants";

const About = () => {
  return (
    <Box>
      <Stack direction="row" gap={2}>
        <Box width={50}>
          <img
            alt="about"
            src="/assets/bg2.png"
            style={{ objectFit: "none" }}
          />
        </Box>
        <Box>
          <Typography fontWeight={600}>Siddharth Singh</Typography>
          <Typography fontWeight={600} color={COLORS.TITLE} gutterBottom>Full Stack Developer</Typography>
        </Box>
      </Stack>
      <Typography mt={1} color={COLORS.INFO}>
        Transforming ideas into powerful and seamless digital experiences.
        Bringing together design, functionality, and performance to create
        websites and applications that just work.
      </Typography>
    </Box>
  );
};

export default About;
