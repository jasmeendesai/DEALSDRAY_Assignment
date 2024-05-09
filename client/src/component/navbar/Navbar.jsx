import style from './navbar.module.css'
import logo from '../../assets/logo.jpg'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={style.routes}>
        <Link style={{textDecoration : "none"}} to="/"><span>Home</span></Link>
        <Link style={{textDecoration : "none"}} to="/employee"><span>Employee List</span></Link>      
      </div>
      <div className={style.name}>
        <p>Jasmeen Desai</p>
      </div>
      <div className={style.logout}>
        <ExitToAppIcon/>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
