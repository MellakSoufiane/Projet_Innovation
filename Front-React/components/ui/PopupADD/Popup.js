import React from 'react';
import {  LabelBody, Popupbox} from './BoxPop';
import { TitlePopup ,Exit,Box,Input} from './BoxPop';
import { FiX } from "react-icons/fi";


const Popupadd = props => {
 


  return (
    
      
    <Popupbox>

        <TitlePopup>New Video</TitlePopup>
        <Exit className="close-icon" onClick={props.handleClose}><FiX/></Exit>
        {props.content}
        
        
        <Box></Box>
        <LabelBody>Title (required)</LabelBody>
        <Input></Input>
       
    </Popupbox>
    
  );
};
 
export default Popupadd;