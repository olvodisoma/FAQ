import React from 'react'
import { useState } from 'react';
import { motion } from "framer-motion"
import Button from "@mui/material/button";
 
export const SingleQuestion=({title,info})=> {
    const [showInfo,setshowInfo] = useState(false);
    const openBox=()=>{
        setshowInfo(!showInfo)
 
    }
  return (
      <div className="row border doboz m-2 justify-content-between">
 
<div className="d-flex justify-content-between p-2">
    <h5 className="pt-2">{title}</h5>
<motion.span  whileHover={{ scale: 1.1 }}>
<Button className="gomb m-1" sx={{ borderRadius:100 }} size="small"  onClick={openBox}>{showInfo ? "-":"+"}
</Button>
</motion.span>
 
 
 
</div>
{showInfo && <motion.div className='mb-3' initial={{scale: 0.3}} animate={{scale: 1}} transition={{duration:1}}>{info}</motion.div>}
</div>
  )
}
 