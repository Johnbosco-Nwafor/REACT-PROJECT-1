import  Axios  from "./Axios";
import { VscSymbolEvent } from "react-icons/vsc";
import { RiCompassDiscoverLine } from "react-icons/ri";


const CreateYourEvent = () => {
  return (
    <div className="yourevent-back">
      <div className="symbolic-Events">
        <div className="symnolic-flex">
          <p className="flex-vsc"> <span> <VscSymbolEvent /> </span> Events</p>
          <p className="flex-ri"> <span> <RiCompassDiscoverLine /> </span> Discover</p>
        </div>
        <div><p className="pst-event">2:32 AM PST</p></div>
      </div>
      <div className="axios-border1">
       
        <Axios />
        
    </div>
    </div>
  )
}

export default CreateYourEvent