import React from 'react';
import { DescBox, LabelBox, Popupbox, BoxImg, BoxSelect } from './BoxPop';
import { TitlePopup ,Exit,Box} from './BoxPop';
import { FiVideo,FiX } from "react-icons/fi";
import SelectButton from '../SelectButton/SelectButton';
import ButtonAddLink from '../LinkAddButton/LinkAddButton';
import { useState } from 'react';
import axios from 'axios';
import { toast} from 'react-toastify';
import { Preview } from '.';

const Popup = props => {
  const [files, setFiles] = useState([]);
    const onInputChange = (e) => {
      console.log(e.target.value)
    }
    const onSubmit = (e) => {
      e.preventDefault();

      const data = new FormData();

      for(let i = 0; i < files.length; i++) {
          data.append('file', files[i]);
      }

      axios.post('//localhost:8000/upload', data)
          .then((response) => {
              toast.success('Upload Success');
              onSuccess(response.data)
          })
          .catch((e) => {
              toast.error('Upload Error')
          })
  };


  return (
    
      
    <Popupbox>
      
        <TitlePopup>Upload a new Video</TitlePopup>
        <Exit className="close-icon" onClick={props.handleClose}><FiX/></Exit>
        {props.content}
        <Box>
          <form onSubmit={onSubmit}>
            <BoxImg><FiVideo size={70}/></BoxImg>
            
            <LabelBox>Drag and Drop video files to upload</LabelBox>
            <DescBox>Choose a PNG, JPG, or GIF file from your device</DescBox>
            <BoxSelect><SelectButton > 
                  <input
                   type="file"
                   onChange={onInputChange} />
                     
           
            </SelectButton></BoxSelect>
            <ButtonAddLink href = 'add'>Submit</ButtonAddLink>
            </form>
        </Box>
        <Preview files={files}/>
    </Popupbox>
    
  );
};
 
export default Popup;