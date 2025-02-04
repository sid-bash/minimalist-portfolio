import { Box, Button, Stack, Typography } from "@mui/material";
import Heading from "../components/Heading";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const Contact = () => {
  return (
    <Box>
      <Heading text="Connect" />

      <Stack gap={2}>
        <Typography>
          Feel free to contact me at{" "}
          <span style={{ color: "#52525c", fontWeight: 600 }}>
            siddharth.bash@gmail.com
          </span>
        </Typography>

        <Stack direction="row" gap={2}>
          <Button
            sx={{
              color: "#52525c",
              background: "#f4f4f5",
              borderRadius: "10rem",
            }}
            endIcon={<NorthEastIcon />}
          >
            Github
          </Button>

          <Button
            sx={{
              color: "#52525c",
              background: "#f4f4f5",
              borderRadius: "10rem",
            }}
            endIcon={<NorthEastIcon />}
          >
            Linkedin
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
