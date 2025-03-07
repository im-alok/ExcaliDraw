"use client"

import React, { useEffect, useRef } from 'react'

const Canvas = ({roomId}:{roomId:string}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(()=>{
        if(canvasRef?.current){
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            if(!ctx) return

            canvas.addEventListener("mousedown",function (e){
                console.log("mouse is clicked");
                console.log(e);
            })
        }
    },[canvasRef])

    return (
        <div className='w-screen h-screen overflow-hidden'>
            <canvas ref={canvasRef} width={1550} height={750} style={{backgroundColor:"#800080"}}></canvas>
        </div>
    )
}

export default Canvas
