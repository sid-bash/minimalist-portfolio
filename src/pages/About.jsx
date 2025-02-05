import { Box, Stack, Typography } from "@mui/material";
import { COLORS } from "../utils/constants";
import { aboutMe } from "../utils/content";

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
          <Typography fontWeight={600}>{aboutMe.name}</Typography>
          <Typography fontWeight={600} color={COLORS.TITLE} gutterBottom>{aboutMe.job}</Typography>
        </Box>
      </Stack>
      <Typography mt={1} color={COLORS.INFO}>{aboutMe.description}</Typography>
    </Box>
  );
};

export default About;
