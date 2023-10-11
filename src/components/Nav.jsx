import '../styles/nav.css'

function Nav() {
    return (
       <nav className="navigation"> 
         <ul className="nav-list"> 
            <li><a href="bets">Bests</a></li>
            <li><a href="popular">Popular</a></li>
            <li><a href="immediate">Immediate</a></li>
            <li><a href="new">New</a></li>
            <li><a href="profitable">Profitable</a></li>
         </ul>
       </nav>
    )
  }
  
  export default Nav
  