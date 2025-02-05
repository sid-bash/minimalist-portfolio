import { Box, Stack, Typography } from "@mui/material";
import Heading from "../components/Heading";
import { COLORS } from "../utils/constants";

const data = [
  {
    role: "Software Engineer",
    company: "HabileLabs Pvt. Ltd.",
    duration: "2022 - Present",
    image: "/assets/habilelabs-logo.svg",
  },
  {
    role: "Frontend Developer",
    company: "OhLocal",
    duration: "Internship",
    image: "/assets/ohLocal-logo.png",
  },
];

const Experience = () => {
  return (
    <Box>
      <Heading text="Experience" />

      <Stack gap={2}>
        {data.map((exp) => (
          <Stack
            key={exp.company}
            direction={{ sm: "row" }}
            justifyContent="space-between"
            sx={{
              px: 2, py: 1.5,
              borderRadius: "12px",
              boxShadow: "4px 4px 10px -3px rgba(0,0,0,0.1)",
            }}
          >
            <Stack direction="row" gap={2} alignItems="center">
              <Box width={30}>
                <img alt="about" src={exp.image} />
              </Box>
              <Box>
                <Typography sx={{ color: COLORS.INFO, letterSpacing: 1.1 }}>
                  {exp.role}
                </Typography>
                <Typography color={COLORS.INFO}>{exp.company}</Typography>
              </Box>
            </Stack>

            <Box alignSelf={"flex-end"}>
              <Typography color={COLORS.INFO}>{exp.duration}</Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default Experience;
