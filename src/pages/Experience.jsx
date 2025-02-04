import { Box, Stack, Typography } from "@mui/material";
import Heading from "../components/Heading";

const Experience = () => {
  return (
    <Box>
      <Heading text="Experience" />

      <Stack gap={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ background: "#f4f4f5", borderRadius: "12px", p: 2 }}
        >
          <Stack direction="row" gap={2} alignItems="center">
            <Box width={40}>
              <img alt="about" src="/assets/habilelabs-logo.svg" />
            </Box>
            <Box>
              <Typography sx={{ letterSpacing: 1.1 }}>
                Software Engineer
              </Typography>
              <Typography>HabileLabs Pvt. Ltd.</Typography>
            </Box>
          </Stack>

          <Box>
            <Typography>2022 - Present</Typography>
          </Box>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ background: "#f4f4f5", borderRadius: "12px", p: 2 }}
        >
          <Stack direction="row" gap={2} alignItems="center">
            <Box width={40}>
              <img alt="about" src="/assets/ohLocal-logo.png" />
            </Box>
            <Box>
              <Typography sx={{ letterSpacing: 1.1 }}>
                Frontend Developer
              </Typography>
              <Typography>OhLocal</Typography>
            </Box>
          </Stack>

          <Box>
            <Typography>Internship</Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Experience;
