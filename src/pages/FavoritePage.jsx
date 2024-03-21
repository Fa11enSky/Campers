import React from 'react'
import { useSelector } from 'react-redux'
import CatalogItem from '../components/CatalogItem/CatalogItem'

const FavoritePage = () => {
  const campers = useSelector(state => state.favorites.favor)
  return (
    <ul style={{display:'flex',flexDirection:"column",alignItems:"center"}}>
      {campers.map(el=><CatalogItem key={el._id} item={el}/>)}
   </ul>
  )
}

export default FavoritePage
