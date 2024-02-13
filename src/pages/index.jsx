import {
  Box,
  Button,
  CircularProgress,
  Container,
  IconButton,
  Stack,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";
import LayOut from "../components/layout";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [correctData, setCorrectData] = useState("");

  const correctFunc = async()=> {
    setLoading(true)
    try {
        const res = await fetch('localhost: 5000/correct',{
            method:'POST',
            body:JSON.stringify({textType:text})
        })
        const correctdata = res.json()
        setCorrectData(correctdata)
        setLoading(false)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <Box className="home">
        <LayOut/>
      <Container maxWidth="lg">
        <Box
          className="img"
          sx={{
            textAlign: "center",
            pt: "40px",
            width: { xs: "310px", sm: "400px" },
            m: "0 auto",
          }}
        >
          <img src={require("../assets/Capture.PNG")} width="100%" alt="logo" />
        </Box>
        <Stack
          sx={{
            width: "100%",
            minHeight: "250px",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box className=" write" sx={{ width: "98%", height: "100%" }}>
            <textarea
              className="textArea"
              name="textType"
              rows="10"
              placeholder="اكتب النص هنا"
              value={text}
              style={{ width: "90%", marginRight: "20px" }}
              onChange={(e) => {
                setText(e.target.value);
              }}
            ></textarea>
          </Box>
          <Box
            className="show_Correct"
            sx={{ width: "98%", mr: "10px", p: "20px" }}
          >
            {loading ? (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress sx={{ color: "#ff6d86" }} />
              </Box>
            ) : (
              <Box sx={{ position: "relative" }}>
                <IconButton
                  sx={{
                    display: "block",
                    position: "absolute",
                    top: "15px",
                    left: "30px",
                  }}
                >
                  <ContentCopyIcon />
                </IconButton>
                <textarea
                  className="textArea"
                  name="textType"
                  rows="10"
                  value={correctData}
                  style={{ width: "90%", marginRight: "20px" }}
                ></textarea>
              </Box>
            )}
          </Box>
        </Stack>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            mt: "20px",
            mr: "30px",
            mb: "10px",
          }}
        >
          <Button
            sx={{ ml: "30px", display: "inline-block", mb: "10px" }}
            className="correct_btn"
            disabled={text ? false : true}
            onClick={correctFunc}
          >
            صحح
          </Button>
          {/* <Button
            className="reset_btn"
            onClick={() => {
              setText("");
            }}
          >
            نص جديد
          </Button> */}
        </Box>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#DFC8BA"
          fill-opacity="1"
          d="M0,128L48,117.3C96,107,192,85,288,117.3C384,149,480,235,576,234.7C672,235,768,149,864,128C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </Box>
  );
};
export default Home;
