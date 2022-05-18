import { ChangeEvent, FC, MouseEvent, useState, DragEvent, useRef } from 'react'

const EventExemple: FC = () => {

    const [state, setstate] = useState<string>('')
    const [isDrag, setisDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        setstate(e.target.value)
    }
    const clickHandler = (e: MouseEvent<HTMLButtonElement>) =>{
        console.log(inputRef.current?.value);
        setstate('')
    }
    const dragHandler = (e: DragEvent<HTMLDivElement>) =>{
        // console.log("Drag");
        
    }
    const dropHandler = (e: DragEvent<HTMLDivElement>) =>{
        e.preventDefault()
        setisDrag(false)
        console.log("drop")
    }
    const dragWithPrefentHandler = (e: DragEvent<HTMLDivElement>) =>{
        e.preventDefault()
        setisDrag(true)
    }
    const dragLeave = (e: DragEvent<HTMLDivElement>) =>{
        e.preventDefault()
        setisDrag(false)
    }


  return (
    <div>
        <input type="text" value={state} onChange={changeHandler} placeholder="Управляемый" />
        <input type="text" ref={inputRef} placeholder="Неправляемый" />
        <button onClick={clickHandler}>Click</button>
        <div onDrag={dragHandler} draggable className="" style={{width:200, height: 200, background:"pink", margin:'15px 0'}}></div>
        <div style={{width:200, height: 200, background:isDrag?"blue":"pink"}}
            onDrop={dropHandler}
            onDragLeave={dragLeave}
            onDragOver={dragWithPrefentHandler}
        ></div>
    </div>
  )
}

export default EventExemple