import '../styles/menu.css'
function Menu() {
  return (
    <div>
        <nav className='navBottom'>
            <ul>
				<li><img src='./menu/Home.svg'></img></li>
				<li><img src='./menu/Favorite.svg'></img></li>
				<li><img src='./menu/Chats.svg'></img></li>
				<li><img src='./menu/Settings.svg'></img></li>
			</ul>
        </nav>
    </div>
  )
}

export default Menu