import {
  Box,
  Button,
  CircularProgress,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";
import LayOut from "../components/layout";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [correctData, setCorrectData] = useState("");
  const [show , setShow] = useState(false)

  // ------------------start correct function
  const correctFunc = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("text", text);

      const res = await fetch("http://localhost:5000/correct", {
        method: "POST",
        body: formData,
      });
      const correctdata = await res.json();
      setCorrectData(correctdata);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
  // ------------------end correct function
  return (
    <Box className="home">
      {/* <LayOut /> */}
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
        {/* ----------------------what's The Tajrid------------------------- */}
        <Container maxWidth="lg">
          <Typography
            variant="div"
            component="div"
            sx={{ pt: "15px", pb: "15px", fontSize: "22px" }}
          >
            <Typography variant="p" component="p">
              تَجْرِيد هو: فحص مُتناهي الدِّقَّة، تَنْقية من الشَّوائب
            </Typography>
            <br />
            <Typography variant="p" component="p" sx={{ lineHeight: 1.7 }}>
              تَجْرِيد يساعدك على كتابة نصوص خالية من الأخطاء الإملائية
              والقواعدية، بالاستفادة من أحدث تقنيات الذكاء الاصطناعي للحفاظ على
              الكتابة الصحيحة للغة العربية
            </Typography>
          </Typography>
          {/* ---------------------------msg show max char is 255---------------- */}
          
          {show && <Typography
            variant="div"
            component="p"
            sx={{ background: "#DFC8BA",textAlign:'center' ,color: "#000",p: "10px " ,fontSize: "20px" , width:{xs:'300px', sm:'400px'},m:'10px auto'  }}
          >
            طول الجملة الواحدة لا يتجاوز 255 حرف
          </Typography>}
          {/* ---------------------------msg show max char is 255---------------- */}
        </Container>
        {/* ----------------------what's The Tajrid------------------------- */}

        <Stack
          sx={{
            width: "100%",
            minHeight: "250px",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* ---------------------write The Your Text---------------------- */}
          <Box
            className=" write"
            sx={{ width: "98%", height: "100%", position: "relative",padding:'20px' }}
          >
            <textarea
              className="textArea"
              name="textType"
              rows="15"
              placeholder="اكتب النص هنا"
              value={text}
              maxLength={255}
              style={{ width: "90%", marginRight: "20px" }}
              onChange={(e) => {
                setText(e.target.value);
                if (text.length === 254) {
                  setShow(true)
                }else {
                  setShow(false)
                }
              }}
            ></textarea>
            <Typography
              variant="span"
              component="span"
              sx={{
                color: "#E45E3A",
                position: "absolute",
                bottom: "40px",
                left: "60px",
                fontWeight: "bold",

              }}
            >
              حرف {text.length}
            </Typography>
          </Box>
          {/* ---------------------write The Your Text---------------------- */}
          {/* ---------------------Show The correct Text---------------------- */}
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
                  name="text"
                  rows="15"
                  value={correctData}
                  style={{ width: "90%", marginRight: "20px", padding:'10px' }}
                ></textarea>
              </Box>
            )}
          </Box>
          {/* ---------------------Show The correct Text---------------------- */}
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
