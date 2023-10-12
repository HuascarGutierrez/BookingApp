import "../styles/Profile.css"

function Profile(props) {
    const profiles = props.profiles
  return (
    <div className="profiles">
        <img src={profiles[0].user} alt={profiles[0].name} className="user"/>
        <div className={'available '+profiles[0].available}></div>
    </div>
  )
}

export default Profile