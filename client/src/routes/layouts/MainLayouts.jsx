import LeftBar from '../../components/leftBar/LeftBar'
import TopBar from '../../components/topBar/TopBar'
import './mainLayouts.css'
import { Outlet } from 'react-router'

const MainLayouts = () => {
  return (
    <div className='app'>
      <LeftBar />
      <div className='content'>
        <TopBar />
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayouts
