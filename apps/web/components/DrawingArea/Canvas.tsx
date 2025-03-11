"use client"

import { Circle, Eraser, LineChart, Minus, MousePointer, Pencil, Square } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import IconButton from './Icon';

export type Shape = {
    type: "rect";
    x: number;
    y: number;
    width: number;
    height: number;

} | {
    type: "circle";
    centerX: number;
    centerY: number;
    radius: number
} | {
    type: "StraightLine";
    startX: number;
    startY: number;
    endX: number;
    endY: number;
}


const Canvas = ({ roomId }: { roomId: string }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const selectedTool = useRef<string>("rect")
    const [tool, setTool] = useState<string>("rect");

    useEffect(() => {

        selectedTool.current = tool
        console.log("Inside use Effect :", selectedTool.current)
    }, [tool])

    useEffect(() => {
        if (canvasRef?.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            if (!ctx) return

            let existingShapes: Shape[] = []
            let startX: number;
            let startY: number;
            let clicked: boolean;

            function clearCanvas() {
                ctx?.clearRect(0, 0, canvas.width, canvas.height);

                existingShapes.forEach((shape) => {
                    if (shape.type === "rect") {
                        ctx!.strokeStyle = "rgba(255,255,255)"
                        ctx?.strokeRect(shape.x, shape.y, shape.width, shape.height);
                    }
                    if (shape.type === "StraightLine") {
                        ctx?.beginPath();
                        ctx?.moveTo(shape.startX, shape.startY);
                        ctx?.lineTo(shape.endX, shape.endY);
                        ctx!.strokeStyle = "rgba(255,255,255)"
                        ctx?.stroke()
                    }
                })
            }

            canvas.addEventListener("mousedown", function (e) {
                clicked = true
                startX = e.clientX;
                startY = e.clientY
                console.log(startX, startY)

            })


            canvas.addEventListener("mouseup", (e) => {
                clicked = false;
                let shape: Shape;
                if (selectedTool.current === "rect") {
                    const width = e.clientX - startX;
                    const height = e.clientY - startY;
                    shape = {
                        type: "rect",
                        x: startX,
                        y: startY,
                        width: width,
                        height: height
                    }
                    existingShapes.push(shape)
                }
                if (selectedTool.current === "StraightLine") {
                    shape = {
                        type: "StraightLine",
                        startX: startX,
                        startY: startY,
                        endX: e.clientX,
                        endY: e.clientY
                    }
                    existingShapes.push(shape)
                }
            })

            canvas.addEventListener("mousemove", (e) => {
                if (clicked) {

                    if (selectedTool?.current === "rect") {
                        const width = e.clientX - startX;
                        const height = e.clientY - startY;
                        clearCanvas();
                        ctx.strokeStyle = "rgba(255,255,255)"
                        ctx.strokeRect(startX, startY, width, height);
                    }

                    if (selectedTool?.current === "StraightLine") {
                        clearCanvas();
                        ctx.beginPath()
                        ctx.moveTo(startX, startY);
                        ctx.lineTo(e.clientX, e.clientY)

                        ctx.strokeStyle = "green";
                        ctx.stroke()
                    }

                    if (selectedTool?.current === "pencil") {
                        // console.log(e.clientX,e.clientY)
                        ctx.beginPath();
                        ctx.moveTo(startX, startY);
                        ctx.lineTo(e.offsetX, e.offsetY);
                        ctx.strokeStyle = "green";
                        ctx.lineWidth = 2; 
                        ctx.lineCap = "round";
                        ctx.stroke();

                        [startX,startY] = [e.offsetX,e.offsetY]
                    }

                }

            })
        }
    }, [canvasRef])

    return (
        <div className='relative w-screen h-screen overflow-hidden'>
            <canvas ref={canvasRef} width={1550} height={750} className='bg-black'></canvas>

            {/* buttons selector */}
            <TopBar selectedTool={tool} setTool={setTool} />

        </div>
    )
}

export default Canvas



function TopBar({ selectedTool, setTool }: any) {
    console.log(selectedTool.current)

    return (
        <div className='fixed inset-0 top-4 left-1/2 -translate-x-1/2 w-fit h-fit  bg-[#232329] p-2 rounded-md' >
            <div className={`flex gap-2`}>
                <IconButton
                    icon={<MousePointer className='w-4 h-4' />}
                    onclick={() => { setTool("pointer") }}
                    selectedTool={selectedTool}
                    tool='pointer'
                />
                <IconButton
                    icon={<Eraser className='w-4 h-4' />}
                    onclick={() => { setTool('eraser') }}
                    selectedTool={selectedTool}
                    tool='eraser'
                />
                <IconButton
                    icon={<Minus className='w-4 h-4' />}
                    onclick={() => { setTool('StraightLine') }}
                    selectedTool={selectedTool}
                    tool='StraightLine'
                />
                <IconButton
                    icon={<Circle className='w-4 h-4' />}
                    onclick={() => { setTool("circle") }}
                    selectedTool={selectedTool}
                    tool='circle'
                />
                <IconButton
                    icon={<Square className='w-4 h-4' />}
                    onclick={() => { setTool('rect') }}
                    selectedTool={selectedTool}
                    tool='rect'
                />
                <IconButton
                    icon={<Pencil className='w-4 h-4' />}
                    onclick={() => { setTool('pencil') }}
                    selectedTool={selectedTool}
                    tool='pencil'
                />
            </div>
        </div>
    )
}