import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {userid} = useParams()
  return (
    <div className='text-center p-4 bg-slate-200 text-2xl'>User: {userid}</div>
  )
}

export default User