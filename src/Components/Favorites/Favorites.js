import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Api } from '../../Api/Api';
import { Box } from '@mui/material';

export default function Favorites() {
      let [data,setData]=useState([])

    useEffect(() => {
        axios
          .get(Api + "product")
          .then((res) => setData(res.data));
      }, []);
      

  return (
    <Box sx={{width:"100vw",height:"100vh"}}>

    </Box>
  )
}
