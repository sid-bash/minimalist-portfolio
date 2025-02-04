import {
  Box,
  Button,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Heading from "../components/Heading";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { COLORS } from "../utils/constants";

const links = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/siddharth-singh-b30280164/",
    icon: LinkedInIcon,
  },
  {
    title: "GitHub",
    url: "https://github.com/sid-bash",
    icon: GitHubIcon,
  },
  {
    title: "GitHub (Alt)",
    url: "https://github.com/SiddharthSingh23",
    icon: GitHubIcon,
  },
  {
    title: "Resume",
    url: "https://github.com/SiddharthSingh23",
    icon: FileDownloadIcon,
  },
];

const Contact = () => {
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
          {links.map((item) => (
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
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
