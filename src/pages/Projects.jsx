import { Box, Stack, Typography } from "@mui/material";
import Heading from "../components/Heading";
import { COLORS } from "../utils/constants";
import { projects } from "../utils/content";

const Projects = () => {
  return (
    <Box>
      <Heading text="Projects" />

      <Stack
        display="grid"
        gap={4}
        gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
      >
        {projects.map((work) => (
          <Box
            key={work.title}
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href={work.url}
            sx={{ cursor: "pointer", textDecoration: "none" }}
          >
            <img
              alt="project1"
              src={work.image}
              style={{
                width: "100%",
                borderRadius: "12px",
                marginBottom: "15px",
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
              }}
            />
            <Typography
              sx={{ fontWeight: 600, color: COLORS.TITLE, letterSpacing: 1.1 }}
            >
              {work.title}
            </Typography>
            <Typography color={COLORS.INFO}>{work.description}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Projects;
