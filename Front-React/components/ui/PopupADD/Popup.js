import React from 'react';
import {  Desc, LabelBody,LabelDesc, Popupbox,Img} from './BoxPop';
import { TitlePopup ,Exit,Box,Input} from './BoxPop';
import { FiX } from "react-icons/fi";
import { CustomPlaceholder } from 'react-placeholder-image';
import { CgLoadbar } from "react-icons/cg";

const Popupadd = props => {
 


  return (
    
      
    <Popupbox>

        <TitlePopup>New Video</TitlePopup>
        <Exit className="close-icon" onClick={props.handleClose}><FiX/></Exit>
        {props.content}
        
        
        <Box><Img><CustomPlaceholder />
        <CgLoadbar size={40}/>

        </Img></Box>
        <LabelBody>Title (required)</LabelBody>
        <Input placeholder='Enter Title'></Input>
        <LabelDesc>Description</LabelDesc>
        <Desc placeholder='Write Long Text here'></Desc>
    </Popupbox>
    
  );
};
 
export default Popupadd;