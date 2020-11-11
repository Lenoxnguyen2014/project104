import React from 'react'
import { Box, Grid, Flex } from "theme-ui"

function Logo(){
    const circle = {
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        border: "solid 1px black",
      }

      const line ={
        width: "200px",
        height: "100px",
        background: "red",
        border: "solid 1px black"
      }
    return(
        <>
        <Grid
        style={{
                    display: "flex"
            }}>
        <Box id="circle" style={circle}></Box>
        <Box id="circle" style={circle}></Box>
        </Grid>
        <Grid >
        <Box>
        </Box>
        <Box>
        <h3 style={{textAlign:"right"}}>KennyDN</h3>
        </Box>
        </Grid>
    </>
    )
}

export default Logo