import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { saveAs } from "file-saver";
import resume from "../files/resume.pdf";
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
    icon: FileDownloadIcon,
  },
];

const Contact = () => {
  const handleDownload = () => {
    saveAs(resume, "Resume-Siddharth-Singh.pdf");
  };

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
                onClick={item.title === "Resume" ? handleDownload : null}
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
