import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetails = () => {

  const params = useParams();
  const {itemId} = params

  return (
    <div>
      <h1>{itemId}</h1>
    </div>
  )
}

export default ItemDetails