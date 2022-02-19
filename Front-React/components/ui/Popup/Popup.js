import React from 'react';
import { Img,DescBox, LabelBox, Popupbox, BoxImg } from './BoxPop';
import { TitlePopup ,Exit,Box} from './BoxPop';

const Popup = props => {
  return (
    
      
    <Popupbox>
      
        <TitlePopup>Upload a new Video</TitlePopup>
        <Exit className="close-icon" onClick={props.handleClose}>X</Exit>
        {props.content}
        <Box>
            <BoxImg><Img/></BoxImg>
            
            <LabelBox>Drag and Drop video files to upload</LabelBox>
            <DescBox>Choose a PNG, JPG, or GIF file from your device</DescBox>
        </Box>
    </Popupbox>
    
  );
};
 
export default Popup;