import { Box, Button, Stack, Typography } from "@mui/material";
import { COLORS } from "../utils/constants";
import { aboutMe } from "../utils/content";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { saveAs } from "file-saver";
import resume from "../files/resume.pdf";

const About = () => {
  const handleDownload = () => {
    saveAs(resume, "Resume-Siddharth-Singh.pdf");
  };

  return (
    <Box>
      <Stack direction="row" gap={2} justifyContent="space-between">
        <Stack direction="row" gap={2}>
          <Box>
            <img
              alt="about"
              src="/assets/bg2.png"
              style={{ objectFit: "none" }}
              width={50}
            />
          </Box>
          <Box>
            <Typography fontWeight={600}>{aboutMe.name}</Typography>
            <Typography fontWeight={600} color={COLORS.TITLE} gutterBottom>
              {aboutMe.job}
            </Typography>
          </Box>
        </Stack>
        <Box
          sx={{
            position: { xs: "fixed", sm: "initial" },
            bottom: 16,
            right: 16,
          }}
        >
          <Button
            color="primary"
            sx={{
              borderRadius: "8px",
              backgroundColor: COLORS.BG,
              color: COLORS.INFO,
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
            }}
            startIcon={<FileDownloadIcon />}
            onClick={handleDownload}
          >
            Resume
          </Button>
        </Box>
      </Stack>
      <Typography mt={1} color={COLORS.INFO}>
        {aboutMe.description}
      </Typography>
    </Box>
  );
};

export default About;
