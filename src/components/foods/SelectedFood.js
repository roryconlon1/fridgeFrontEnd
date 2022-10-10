import React, { memo, useState } from 'react'

const SelectedFood = (({select}) => {


    const showSelected = select.map((item, index) => {
        return <div key={index}>{item.name}</div>
    })

  return (
    <div>SelectedFood
        {showSelected}
    </div>
    
  )
})


export default SelectedFood