import * as styles from './style'
import Spacer from '../../ui/Spacer'
import LinkButtonVideo from '../../ui/LinkButtonVideo'
import Button from  '../../ui/Button'


function view() {
    
    return (
        
        
        <styles.main>

           <styles.left>

            <styles.TitleLeft>FASTCAST</styles.TitleLeft>
            <Spacer y={63.5}></Spacer>
            <LinkButtonVideo>Videos</LinkButtonVideo>
            <LinkButtonVideo>Audio</LinkButtonVideo>
            <LinkButtonVideo>Statistics</LinkButtonVideo>
            <LinkButtonVideo>Settings</LinkButtonVideo>
            
            <styles.LinkLogOut>Log out</styles.LinkLogOut>
            
           </styles.left>

           <styles.right>
         
           <styles.LinkImg/>
           
           < styles.TitleRight>You have no video !</styles.TitleRight>
                <styles.ButtonDiv>
               <Button>Add Video</Button>
               </styles.ButtonDiv>
            </styles.right>

       </styles.main>
       
        )
}
  
export default view