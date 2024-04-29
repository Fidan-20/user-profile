import React from 'react'
import Name from './Name'
import Persomalinfo from './Persomalinfo'
import Email from './Email'
import Adress from './Adress'


const profile = () => {
  return (
   <div className='main'> 
    <Name/>
    <Adress/> 
    <Persomalinfo/>
    <Email/>
    </div>
  )
}

export default profile