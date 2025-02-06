import { Box, Stack, Typography } from "@mui/material";
import Heading from "../components/Heading";
import { COLORS } from "../utils/constants";
import { workExperience } from "../utils/content";

const Experience = () => {
  return (
    <Box>
      <Heading text="Experience" />

      <Stack gap={2}>
        {workExperience.map((exp) => (
          <Stack
            key={exp.company}
            direction={{ sm: "row" }}
            justifyContent="space-between"
            sx={{
              px: 2,
              py: 1.5,
              borderRadius: "12px",
              boxShadow: "4px 4px 10px -3px rgba(0,0,0,0.1)",
            }}
          >
            <Stack direction="row" gap={2} alignItems="center">
              <Box>
                <img alt="about" src={exp.image} width={30} />
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
