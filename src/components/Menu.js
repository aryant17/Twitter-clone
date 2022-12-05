import React from 'react'
import './SideBar.css';

const Menu = ({name, Icon}) => {

  return (
    <>
      <div style={{padding: "10px", alignItems: "center", display: "flex"}} className='menu-item'>
        <Icon sx={{fontSize: "40px"}}/>
        <h3 style={{margin:"10px"}}>
            {name}
        </h3>
      </div>
   </>
  )
}

export default Menu