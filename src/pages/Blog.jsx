import { Box, Typography, Stack } from "@mui/material";
import Heading from "../components/Heading";
import { COLORS } from "../utils/constants";

const data = [
  {
    title: "Exploring the Intersection of Design, AI, and Design Engineering",
    description: "How AI is changing the way we design",
  },
  {
    title: "What I learned from my first year of freelancing",
    description:
      "A look back at my first year of freelancing and what I learned",
  },
];

const Blog = () => {
  return (
    <Box>
      <Heading text="Blog" />

      <Stack gap={2}>
        {data.map((work) => (
          <Box key={work.title}>
            <Typography fontWeight={600} color={COLORS.TITLE}>
              {work.title}
            </Typography>
            <Typography>{work.description}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Blog;
