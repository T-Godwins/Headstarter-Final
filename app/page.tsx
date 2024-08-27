import Image from "next/image";
import {Box, Stack, Typography, Button} from "@mui/material"

export default function Home() {
  return (
    <Box id="background"
    >
      <Stack>
      <Stack id="landing"
              width="100vw"
              sx={{
                height:{md:"40vh", xs:"20vh"},
                paddingTop:{xs:20}
              }}
              
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              // bgcolor="#F7F7F7"
              paddingBottom={10}

              >
                <Typography variant="h1" p={0} sx={{ textAlign:"center", fontSize: {xs:'2rem', md:'5rem', lg:'7rem'}}} >
                  Welcome to the Team!
                </Typography>
                <Typography variant="h5" gutterBottom p={1} sx={{ textAlign:"center", fontSize: {xs:'1rem', md:'2rem', lg:'3rem'}}} >
                  See what we're cooking next. <br/> 
                </Typography>
                
                <Button variant="contained"
                      sx={{
                          fontSize:'1rem',
                          borderRadius: '50px', 
                          bgcolor:"blue", 
                          color:"white",
                          "&:hover": {
                              bgcolor: 'rgba(2, 2, 2, 0.7)',
                              color: 'white',}
                          }}
                          ><a href="/generate">Get Priority Access</a> 
                </Button>
                {/* <Typography variant="h5">Thank you for your support!</Typography> */}
             </Stack>
      </Stack>
    </Box>
    );
}
