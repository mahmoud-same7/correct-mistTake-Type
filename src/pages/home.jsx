import { Box, Typography, Stack, Button } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useState } from "react";
import NavBar from "../components/navBar";
import LayOut from "../components/layout";

const Home = () => {
  const [loading , setLoading] =  useState(true)
  const [text , setText] = useState('')
  return (
    <Box className="home" sx={{ position: "relative" }}>
      <LayOut/>
      <NavBar />
      {/* start correct mistake type */}
      <Box
        sx={{
          mt: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "400px",
          flexDirection: "column",
        }}
      >
        <Box sx={{p:'10px' , width:{xs:'300px' , md:'600px'}}}>
          
          <textarea
            className="textArea"
            name="textType"
            placeholder="ادخل النص المراد تصحيحة"
            rows='10'
            value={text}
            style={{width:'98%' , marginTop:'70px'}}
            onChange={(e)=> {setText(e.target.value)}}
          ></textarea>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt:'10px'
            }}
          >
            <Button className="correct_btn" disabled={text?false:true}>ابدء التصحيح</Button>
            <Button className="reset_btn" onClick={()=>{setText('')}}> نص جديد</Button>
          </Box>
        </Box>
        <Box sx={{ width: "300px", pt: "50px" }}>
          <Typography
            variant="p"
            component="p"
            sx={{
              background: "#1976d2",
              textAlign: "center",
              color: "#fff",
              p: "15px 10px",
              mt: "40px 0 0 0",
              fontWeight:'bold'
            }}
          >
            اظهار الاخطاء ان وجد
          </Typography>
          <KeyboardDoubleArrowDownIcon sx={{width:'300px' , textAlign:'center' , mt:'15px' ,mb:'10px' , color:'#1976d2'}}/>
          {loading?
             <Box sx={{ display: 'flex', justifyContent:'center' }}>
              <CircularProgress />
            </Box>
          :
          <Typography variant="body1" color="green" sx={{textAlign:'center' , mt:'20px' , fontWeight:'bold'}}>محمود سامح رمضان</Typography>
          }
        </Box>
      </Box>
      {/* end correct mistake type */}
    </Box>
  );
};
export default Home;
