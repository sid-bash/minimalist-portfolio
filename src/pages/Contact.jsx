import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import Heading from "../components/Heading";
import ContrastIcon from "@mui/icons-material/Contrast";
import { COLORS } from "../utils/constants";
import { contactLinks } from "../utils/content";
import { useTheme } from "../theme";

const Contact = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <Box>
      <Heading text="Connect" />

      <Stack gap={2}>
        <Typography>
          Feel free to contact me at{" "}
          <span style={{ color: COLORS.INFO, fontWeight: 600 }}>
            siddharth.bash@gmail.com
          </span>
        </Typography>

        <Stack direction="row" gap={2} flexWrap="wrap">
          {contactLinks.map((item) => (
            <Tooltip key={item.title} title={item.title}>
              <IconButton
                component="a"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.icon />
              </IconButton>
            </Tooltip>
          ))}

          <IconButton onClick={() => setDarkMode(!darkMode)}>
            <ContrastIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
