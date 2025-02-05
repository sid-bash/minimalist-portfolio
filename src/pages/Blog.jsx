import { Box, Typography, Stack } from "@mui/material";
import Heading from "../components/Heading";
import { COLORS } from "../utils/constants";
import { blogs } from "../utils/content";

const Blog = () => {
  return (
    <Box>
      <Heading text="Blog" />

      <Stack gap={2}>
        {blogs.map((work) => (
          <Box
            key={work.title}
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href={work.url}
            sx={{ cursor: "pointer", textDecoration: "none" }}
          >
            <Typography fontWeight={600} color={COLORS.TITLE}>
              {work.title}
            </Typography>
            <Typography color={COLORS.INFO}>{work.description}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Blog;
