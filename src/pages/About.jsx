import { Box, Stack, Typography } from "@mui/material";

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
          <Typography gutterBottom>Full Stack Developer</Typography>
        </Box>
      </Stack>
      <Typography>
        Focused on creating intuitive and performant web experiences. Bridging
        the gap between design and development.
      </Typography>
    </Box>
  );
};

export default About;
