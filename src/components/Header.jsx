import React ,{useState} from 'react'
import { FiCode, FiMenu , FiX } from 'react-icons/fi'
import './Header.css'
import Content from './Content';
import Sileconnter from './Sile_conten'
import  Carouse  from './Carousel'
import Cotertabout from './about/Cotertabout'

function Header() {

  const [click , setClick] = useState(false);
  const handleClick = () => setClick(! click);
  const colseMobileMenu = () => setClick(false);

  return (
    <div className='header'>
      <div className='container'>
        <div className='header-con'>
          <div className="logo-container">
            <a href='#'>รูป</a>
          </div>
          <ul className={click ? "menu active":"menu"}>
            <li className='menu-link'>
              <a href='#'>หน้าแรก</a>
            </li>
            <li className='menu-link'>
              <a href='#'>เกี่ยวกับเรา</a>
            </li>
            <li className='menu-link'>
              <a href='#'>คลังพระเครื่อง</a>
            </li>

            <li className='menu-link'>
            <button class="btn btn-outline-success" type="submit">สมัครสมาชิก</button>
            </li>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <FiX />
          ) : (
            <FiMenu />
          )
        }

          
          </div>
       
        </div>
        {/* <Carouse />
        <Content/>
        <Sileconnter />
        <Cotertabout /> */}
      </div>
        
    </div>
  )
  }

export default Header