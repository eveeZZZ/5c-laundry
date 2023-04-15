import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           5C Laundry
//         </Link>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">
//                 About
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

const NavbarPom = () => {
    return (
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#"><Link className="nav-link" to="/">
                        5C Laundry
                    </Link></a>
                </div>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#"> Pomona College <span class="sr-only">(current)</span></a></li>
                        <li><a href="#"><Link className="nav-link" to="/timer">
                        Timer
                    </Link></a></li>
                        <li><a href="#"><Link className="nav-link" to="/countdown-pom">
                        Map
                    </Link></a></li>
                        {/* <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                aria-expanded="false">Dropdown <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Separated link</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">One more separated link</a></li>
                            </ul>
                        </li> */}
                    </ul>

                    <ul class="nav navbar-nav navbar-right">
                        <li><button type="submit" class="btn btn-default">username</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarPom;
