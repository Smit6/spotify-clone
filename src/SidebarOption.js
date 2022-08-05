import React from 'react'

import './SidebarOption.css'

function SidebarOption({ optionTitle, Icon, onClick }) {
  return (
    <div className='sidebarOption'>
      {Icon && <Icon className='sidebarOption__icon' />}
      {Icon ? <h4>{optionTitle}</h4> : <p>{optionTitle}</p>}
    </div>
  )
}

export default SidebarOption