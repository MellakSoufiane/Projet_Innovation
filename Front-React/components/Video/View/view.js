import * as styles from './style'
import Spacer from '../../ui/Spacer'
import LinkButtonVideo from '../../ui/LinkButtonVideo'
import Button from  '../../ui/Button'
import {useState} from 'react';
import Popup from '../../ui/Popup/Popup';
import ButtonLogout from '../../ui/LogoutButton/LogoutButton';
import { FiVideo,FiMic,FiSettings } from "react-icons/fi";
import {BiBarChartSquare} from "react-icons/bi";

function view() {
    const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
    return (
        
        
        <styles.main>

           <styles.left>

            <styles.TitleLeft>FASTCAST</styles.TitleLeft>
            <Spacer y={63.5}></Spacer>
            
            <LinkButtonVideo>
                <ul>
                  <li>
                  <FiVideo size={20}/>
                    Profile
                    </li>
                </ul>
                
                
            </LinkButtonVideo>
           
            <LinkButtonVideo><ul>
                  <li>
                  <FiMic size={20}/>
                    Audio
                    </li>
                </ul></LinkButtonVideo>
            <LinkButtonVideo><ul>
                  <li>
                  <BiBarChartSquare size={20}/>
                    Statistics
                    </li>
                </ul></LinkButtonVideo>
            <LinkButtonVideo><ul>
                  <li>
                  <FiSettings size={20}/>
                    Settings
                    </li>
                </ul></LinkButtonVideo>
            
            <ButtonLogout>Log out</ButtonLogout>
            
           </styles.left>

           <styles.right>
         
           <styles.LinkImg/>
           
           < styles.TitleRight>You have no video !</styles.TitleRight>
           <div>
                    {isOpen && <Popup handleClose={togglePopup} >
                        
                        </Popup>
                        }
            </div>
                <styles.ButtonDiv>
               <Button type="Button"
                    value="Click to Open Popup"
                    onClick={togglePopup}>Add Video</Button>
               
               </styles.ButtonDiv>
            </styles.right>

       </styles.main>
       
        )
}
  
export default view