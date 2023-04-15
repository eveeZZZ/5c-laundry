import Navbar from "./navbar"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const HomePage = () => {
    
    return (
        <div>
        <Navbar />
  
        {/* Creating 5 buttons */}
        
        <Link to="/hmc">
        <button class = "HPbutton" id = "HMC">HMC</button>
                    </Link>
        <Link to="/PO">
        <button class = "HPbutton" id = "PO">POMONA</button>
                    </Link>
        <Link to="/cmc">
        <button class = "HPbutton" id = "CMC">CMC</button>
                    </Link>
        <Link to = "PTZ">
        <button class = "HPbutton" id = "PTZ">PITZER</button>
        </Link>
        <Link to = "SCS">
        <button class = "HPbutton" id = "SCS">SCRIPPS</button>
        </Link>
      </div>
    )
}

export default HomePage