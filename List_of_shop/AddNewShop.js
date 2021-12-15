import React from 'react'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'




//Materia ui component
import { Box, Paper, Container, TextField, Button, Typography, Options, InputLabel, Select } from '@material-ui/core'
import { AppBar, Toolbar } from "@material-ui/core"

import { Label } from '@mui/icons-material'



function AddNewShop() {

  const [addshop, setaddshop] = useState([]);


  // input field states
  const [shopname, setshopname] = useState('');
  const [area, setarea] = useState('');
  const [shopcategory, setshopcategory] = useState('');
  const [openingdate, setopeningdate] = useState('');
  const [closingdate, setclosingdate] = useState('');


  // saving data to local storage
  useEffect(() => {
    localStorage.setItem('Shop_Information', JSON.stringify(addshop));

  }, [addshop])


  const navigate = useNavigate()
  // form submit event
  const formsubmit = (e) => {
    e.preventDefault();

    // for validation 

    const regixname = /[a-zA-z]{4,9}/
    const checkname = shopname

    if (regixname.test(checkname) && area.length > 0 && shopcategory.length > 0 && openingdate.length > 0 && openingdate < closingdate) {
      alert("shop information succesfully added in list")
      // creating an object
      let shopinfo = {
        shopname, shopcategory, area, openingdate, closingdate
      }
      setaddshop([...addshop, shopinfo]);
      setshopname("")
      setarea("")
      setshopcategory("")
      setopeningdate('')
      setclosingdate('')





    } else {
      alert("please Fill correct information")
    }


  }

  return (
    <div>


      <Box className='appbar'>



        <Container>
          <AppBar color="secondary">
            <Toolbar>
              <Typography variant="h6" style={{ flexGrow: 1 }}> Shopping Mall </Typography>
              <Button color="inherit" component={Link} to="/shoplist" variant="h6" > List of Shops </Button>


            </Toolbar>
          </AppBar>

        </Container>

      </Box>



      {/*  Add new shop code start here */}

      <div style={{ paddingTop: "8rem" }}>

        <Container >
          <Paper component={Box} width="45%" mx="auto" height="650px" boxShadow={7} p="50px">


            <Typography align='center' variant="h4" color="primary"> Add-New-Shop</Typography>


            <Box component="form" id='clear' p={4}  >

              <TextField type="text" variant="outlined" name="shopname" fullWidth
                color="primary" label="Enter Shop Name" margin="normal"
                onChange={(e) => setshopname(e.target.value)} required value={shopname}
                helperText="at least 4 alphabate  "
              />

              {/* starting of Area dropDown */}

              <Box p={2}><InputLabel > Area of the Shop</InputLabel></Box>

              <Select fullWidth variant='outlined' margin='normal' name='area'
                onChange={(e) => setarea(e.target.value)} value={area} required >
                <option value="Thane" > Thane</option>
                <option value="Pune" >Pune</option>
                <option value="Mumbai Suburban" >Mumbai Suburban</option>
                <option value="Nashik" >Nashik</option>
                <option value="Nagpur" >Nagpur</option>
                <option value="Ahmednagar" >Ahmednagar</option>
                <option value="Solapur" >Solapur</option>
                <option value="Other"  > Other</option>
              </Select>


              {/* End of Area dropDown */}



              {/* starting of Catergy */}

              <Box p={2}><InputLabel > Shops Category</InputLabel></Box>

              <Select fullWidth variant='outlined' margin='normal' name='shopcategory'
                onChange={(e) => setshopcategory(e.target.value)} value={shopcategory} required>
                <option value="Grocery" > Grocery</option>
                <option value="Baker" >Baker</option>
                <option value="Chemist" >Chemist</option>
                <option value="Stationery shop" >Stationery shop</option>
                <option value="Other" >Other</option>
              </Select>



              {/* End of Catergy dropDown */}








              <span> <Typography>Opening Date of the Shop</Typography>
                <TextField type="date" variant="outlined"
                  color="primary" name=" openingdate" margin='normal'
                  onChange={(e) => setopeningdate(e.target.value)} value={openingdate} /></span>

              <span>   <Typography>Closing Date of Shop</Typography>
                <TextField type="date" variant="outlined"
                  onChange={(e) => setclosingdate(e.target.value)} value={closingdate}
                  color="primary" name="closingdate" margin='normal' /></span>


              <Box p={4}><Button variant="contained" onClick={formsubmit} fullWidth color="secondary"> Add-Shop + </Button></Box>

            </Box>


          </Paper>
        </Container>

      </div>



    </div>





  )
}

export default AddNewShop