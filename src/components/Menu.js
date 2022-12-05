import React from 'react'
import './SideBar.css';

const Menu = ({name, Icon}) => {

  return (
    <>
      <div style={{padding: "10px",  alignItems: "center", display: "flex"}} className='my-5 menu-item'>
        <div className='menu-item-icon '>
        <Icon className="p-1" sx={{fontSize: "35px"}}/>
        </div>
        <h3 className="menu-item-name mx-3 text-lg">
            {name}
        </h3>
      </div>
   </>
  )
}

export default Menu