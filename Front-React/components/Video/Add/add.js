import * as styles from './style'
import Spacer from '../../ui/Spacer'
import LinkButtonVideo from '../../ui/LinkButtonVideo'
import Popupadd from '../../ui/PopupADD/Popup';
import ButtonLogout from '../../ui/LogoutButton/LogoutButton';
import { FiVideo,FiMic,FiSettings } from "react-icons/fi";
import {BiBarChartSquare} from "react-icons/bi";

function add() {
    
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
         
    
            <Popupadd >
                        
            </Popupadd>
            
               
            </styles.right>

       </styles.main>
       
        )
}
  
export default add