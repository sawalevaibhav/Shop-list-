import React from 'react' // react componet 
import { Link } from 'react-router-dom'
import shopping_mall from "./shopping_mall.jpg"





// Material Ui Componet 

import { Box, Container, Typography, AppBar, Toolbar, Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core'


const UseStyle = makeStyles({
    root:{
       
        margin: "0px", padding: "0px",
        height: "96.5vh",
        width: "100vw",
          backgroundColor:"#f5f5f5"
        //  backgroundImage: `url(${shopping_mall})`,  
       
       
      
    }
})





//Actul Componet Start 
function ShopHomePage() {
    const style = UseStyle()
    return (
        <div className={style.root}>
            <Box>
                <Container>
                    <AppBar color="secondary">
                        <Toolbar>
                            <Typography variant="h6" style={{ flexGrow: 1 }}> Shopping Mall </Typography>
                            <Button color="inherit"  component={Link} to="/shoplist"  variant="h6" > List of Shops </Button>
                           <Button color="inherit"  component={Link} to="/addshop"   variant="h6" > Add New Shop </Button>
                        
                        </Toolbar>
                    </AppBar>

                </Container>
            </Box>


        </div>
    )
}


export default ShopHomePage