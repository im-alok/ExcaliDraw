import React from 'react'
import Canvas from "@/components/DrawingArea/Canvas"


const page = async ({params}:{params:{roomId:string}}) => {

  const roomId = (await params).roomId

  return (
    <div className=''>
        <Canvas roomId={roomId}/>
    </div>
  )
}

export default page
