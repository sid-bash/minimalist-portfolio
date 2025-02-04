import { Box, Stack, Typography } from "@mui/material";
import Heading from "../components/Heading";
import { COLORS } from "../utils/constants";

const data = [
  {
    title: "ISV Insights",
    description:
      "Unlock Meaningful Insights of your Salesforce ISV Application with ISV Insights.",
    image: "/assets/isv-main.jpg",
  },
  {
    title: "Helvetia",
    description:
      "Advanced bordereaux validations and transformations for your business needs.",
    image: "/assets/helvetia-main.png",
  },
];

const Projects = () => {
  return (
    <Box>
      <Heading text="Projects" />

      <Stack direction={{ xs: "column", sm: "row" }} gap={5}>
        {data.map((work) => (
          <Box key={work.title} width={{ sm: "50%" }}>
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
