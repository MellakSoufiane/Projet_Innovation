import React from 'react';
import { DescBox, LabelBox, Popupbox, BoxImg, BoxSelect } from './BoxPop';
import { TitlePopup ,Exit,Box,ButtonSubmit} from './BoxPop';
import { FiVideo,FiX } from "react-icons/fi";
import SelectButton from '../SelectButton/SelectButton';


const Popup = props => {

    const onInputChange = (e) => {
      console.log(e.target.value)
    }


  return (
    
      
    <Popupbox>
      
        <TitlePopup>Upload a new Video</TitlePopup>
        <Exit className="close-icon" onClick={props.handleClose}><FiX/></Exit>
        {props.content}
        <Box>
            <BoxImg><FiVideo size={70}/></BoxImg>
            
            <LabelBox>Drag and Drop video files to upload</LabelBox>
            <DescBox>Choose a PNG, JPG, or GIF file from your device</DescBox>
            <BoxSelect><SelectButton > 
                  <input
                   type="file"
                   onChange={onInputChange} />
                     
           
            </SelectButton></BoxSelect>
            <ButtonSubmit>Submit</ButtonSubmit>
        </Box>
    </Popupbox>
    
  );
};
 
export default Popup;