import { Box, Typography, Stack } from "@mui/material";
import Heading from "../components/Heading";

const Blog = () => {
  return (
    <Box>
      <Heading text="Blog" />

      <Stack gap={2}>
        <Box>
          <Typography fontWeight={600} color="gray">
            Exploring the Intersection of Design, AI, and Design Engineering
          </Typography>
          <Typography>How AI is changing the way we design</Typography>
        </Box>

        <Box>
          <Typography fontWeight={600} color="gray">
            What I learned from my first year of freelancing
          </Typography>
          <Typography>
            A look back at my first year of freelancing and what I learned
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Blog;
