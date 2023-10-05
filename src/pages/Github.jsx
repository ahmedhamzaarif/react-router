import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

  const data = useLoaderData()
  
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/ahmedhamzaarif')
  //   .then(response => response.json())
  //   .then(data => {
  //     setData(data)
  //     console.log(data)
  //   })
  // }, [])
  
  return (
    <div className='p-4 bg-slate-200'>
      <div className="flex m-auto gap-x-12">
      <img src={data.avatar_url} alt="" style={{
        height: "100px",
        borderRadius: "50%"
      }}/>
      <div>
        <h3 className='text-2xl'> Github Followers: {data.followers} </h3>
        <p> {data.bio} </p>
        <h3> Website: {data.blog} </h3>
      </div>
      </div>
    </div>
  )
}

export default Github

export const GithubInfoLoader = async ()=>{
  const response = await fetch('https://api.github.com/users/ahmedhamzaarif')
  return response.json()
}