import { Box, Stack, Typography } from "@mui/material";
import Heading from "../components/Heading";

const Projects = () => {
  return (
    <Box>
      <Heading text="Projects" />

      <Stack direction="row" gap={5}>
        <Box>
          <img
            alt="project1"
            src="/assets/bg3.jpg"
            style={{
              objectFit: "cover",
              height: "200px",
              width: "100%",
              borderRadius: "6px",
              marginBottom: "15px",
            }}
          />
          <Typography sx={{ textDecoration: "underline", letterSpacing: 1.1 }}>
            Motion Primitives Pro
          </Typography>
          <Typography>
            Advanced components and templates to craft beautiful websites.
          </Typography>
        </Box>

        <Box>
          <img
            alt="project1"
            src="/assets/bg2.png"
            style={{
              objectFit: "cover",
              height: "200px",
              width: "100%",
              borderRadius: "6px",
              marginBottom: "15px",
            }}
          />
          <Typography sx={{ textDecoration: "underline", letterSpacing: 1.1 }}>
            Motion Primitives Pro
          </Typography>
          <Typography>
            Advanced components and templates to craft beautiful websites.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Projects;
