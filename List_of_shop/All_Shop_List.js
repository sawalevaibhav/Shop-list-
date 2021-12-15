import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


//material ui componet 
import{Box,Container, Paper, Grid,TableContainer, TableCell, TableHead,AppBar,Button,Toolbar,
    Typography,TableRow,Table,TableBody} from "@material-ui/core"


// getting the values of local storage
const getDatafromLS = () => {
    const data = localStorage.getItem('Shop_Information');
    if (data) {
        return JSON.parse(data);
    }
    else {
        return []
    }
}

function All_Shop_List() {
    const [getdata, setdata] = React.useState(getDatafromLS())
    const [list, setlist] = React.useState([])


    useEffect(() => {
        setlist([...list.concat(getdata)])

    }, [getdata])

    return (
        <div>
                 <Box>
                <Container>
                    <AppBar color="secondary">
                        <Toolbar>
                            <Typography variant="h6" style={{ flexGrow: 1 }}> Shopping Mall </Typography>
                            <Button color="inherit"  component={Link} to="/home"  variant="h6" > Home </Button>
                           <Button color="inherit"  component={Link} to="/addshop"   variant="h6" > Add New Shop </Button>
                        
                        </Toolbar>
                    </AppBar>

                </Container>
            </Box>

           




             {/* All data in Table format */}
        <div style={{paddingTop:"8rem"}}>


        <Box className='mainDiv' p={4} width="80%" mx="auto">
          <Grid item lg={8}>
                <TableContainer component={Paper} margin={4}  >
                    <Box p={2}> <Typography variant="h5" align="center" >All Shop list</Typography></Box>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell> Shop Name</TableCell>
                                <TableCell>Area of the shop</TableCell>
                                <TableCell>Shop Category</TableCell>
                                <TableCell>Opening Date</TableCell>
                                <TableCell>Closing Date</TableCell>
                                <TableCell>Delete information</TableCell>


                            </TableRow>

                        </TableHead>
                        <TableBody>

                            {list.map((item) => (

                                <TableRow>
                                    <TableCell> {item.shopname}</TableCell> 
                                    <TableCell>{item.area}</TableCell>
                                    <TableCell>{item.shopcategory}</TableCell>
                                    <TableCell>{item.openingdate}</TableCell>
                                    <TableCell>{item.closingdate}</TableCell>
                                   <Box p={2}> <Button variant='contained' color="primary"
                                  >delete</Button></Box>

                                </TableRow>

                            ))

                            }
                        </TableBody>

                    </Table>
                </TableContainer>

            </Grid>

          </Box>
         
        </div>


           

        </div>
    )
}




export default All_Shop_List