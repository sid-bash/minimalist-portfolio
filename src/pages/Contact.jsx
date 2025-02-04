import { Box, Button, Stack, Typography } from "@mui/material";
import Heading from "../components/Heading";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { COLORS } from "../utils/constants";

const links = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/siddharth-singh-b30280164/",
  },
  {
    title: "GitHub",
    url: "https://github.com/sid-bash",
  },
  {
    title: "GitHub (Alt)",
    url: "https://github.com/SiddharthSingh23",
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

        <Stack direction="row" gap={2}>
          {links.map((item) => (
            <Button
              component="a"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontSize: "14px",
                color: COLORS.INFO,
                background: COLORS.BG,
                borderRadius: "10rem",
                boxShadow: "5px 8px 15px -5px rgba(0,0,0,0.1)",
              }}
              endIcon={<NorthEastIcon />}
            >
              {item.title}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
