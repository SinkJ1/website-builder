import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const SimpleCanvasExample: React.FC<{}> = () => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);


  const [cursour, setCursour] = useState({x:0,y:0})
  const [mouseDown, setMouseDown] = useState(false)

  let width = 500;
  let height = 500;

  const setCoords = (e: any) =>{
    setCursour({x: e.clientX, y: e.clientY})
    draw()
  }

  const onMouseDown = () => {
    setMouseDown(true)
  }
  
  const onMouseUp = () =>{    
    setMouseDown(false)
  }

  const draw = () => {
    if (canvasRef.current && mouseDown) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      let ctx = canvasCtxRef.current;
    
      ctx!.fillStyle = 'red';
      ctx!.strokeStyle = 'red';
      ctx!.lineWidth = 20;

      ctx!.beginPath();
      ctx!.lineTo(cursour.x, cursour.y);
      ctx!.stroke();

      ctx!.beginPath();
      ctx!.arc(cursour.x, cursour.y, 20 / 2, 0, Math.PI * 2);
      ctx!.fill();

      ctx!.beginPath();
      ctx!.moveTo(cursour.x,cursour.y);
      
    }
  }

  //#region 
  useEffect(()=>{
    const w = width;
    const h = height;
    const p = w / 20;

    const xStep = w / p;
    const yStep = h / p

    for( let x = 0; x < w; x += xStep )
    {
      if(canvasRef.current){
        canvasCtxRef.current = canvasRef.current.getContext('2d');
        let ctx = canvasCtxRef.current;
        ctx!.beginPath();
				ctx!.strokeStyle = "green";
				ctx!.lineJoin = 'miter';
				ctx!.lineWidth = 1;
				ctx!.moveTo(x, 0);
				ctx!.lineTo(x, h);
				ctx!.stroke();
      }
    }

    for( let y = 0; y < h; y += yStep )
    {

      if(canvasRef.current){
        canvasCtxRef.current = canvasRef.current.getContext('2d');
        let ctx = canvasCtxRef.current;
        ctx!.beginPath();
				ctx!.strokeStyle = "green";
				ctx!.lineJoin = 'miter';
				ctx!.lineWidth = 1;
				ctx!.moveTo(0, y);
				ctx!.lineTo(w, y);
				ctx!.stroke();
      }

    }

  }, [])
  //#endregion
  

  const calculate = () =>{
        const w = 500;
				const h = 500;
				const p = w / 20;

				const xStep = w / p;
				const yStep = h / p;
        const coords = []

				const vector = [];
				let __draw = [];

        if (canvasRef.current) {
          canvasCtxRef.current = canvasRef.current.getContext('2d');
          let ctx = canvasCtxRef.current;

          for( let x = 0; x < w; x += xStep )
          {
            for( let y = 0; y < h; y += yStep )
            {
            const data = ctx!.getImageData(x, y, xStep, yStep);
            
						let nonEmptyPixelsCount = 0;

						for(let i = 0; i < data.data.length; i += 10 )
						{

							const isEmpty = data.data[i] === 0;

							if( !isEmpty )
							{
								nonEmptyPixelsCount += 1;
							}
						}

						if( nonEmptyPixelsCount > 1 && draw )
						{
							__draw.push([x, y, xStep, yStep]);
						}
            if(nonEmptyPixelsCount > 1){
              coords.push({x:x, y:y})
            }
						vector.push(nonEmptyPixelsCount > 1 ? 1 : 0);
					}
				}


        for(let i = 0; i < coords.length; i++){          
          ctx!.fillStyle = 'blue';
          ctx!.strokeStyle = 'blue';
          ctx!.lineJoin = 'miter';
          ctx!.lineWidth = 1;
          ctx!.rect(coords[i].x, coords[i].y, p, p);
          ctx!.fill();
        }

      }

  }

  return <>
  <canvas ref={canvasRef} onMouseMove={setCoords} onMouseDown={onMouseDown} onMouseUp={onMouseUp}></canvas>
  <button onClick={calculate}>click</button>
  </>;
};

export default SimpleCanvasExample;