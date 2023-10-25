import React, { useState } from 'react'
import './Home.css'

const Home = () => {
    // getting data 
    const [data, setData] = useState("")
    const [newData, setNewData] = useState([])

    // button code 
    const handleSubmit = () => {
        // checking if it's empty 
    if(!data){
        alert('Enter ToDo')
    }

    // creating an Id for input 
    const item = {
        id: Math.floor(Math.random() * 1000),
        value: data
    }
    //  adding data to an array 
     setNewData(list => [...list, item])
     setData("")
    }

    const deleteItem = (id) => {
        const newArray = newData.filter( item => item.id !== id)
        setNewData(newArray)
    }
    
  return (
    <div className='main'>
    {/* header  */}
    <h1>ToDo App</h1>
    <div className='forms'>
    {/* input  */}
    <input 
    type='text'
    placeholder='Enter ToDo!'
    value={data}
    onChange={(e) => setData(e.target.value)}
    />
    {/* button  */}
    <button 
    onClick={handleSubmit}
    >Add.</button>

    {/* Outputs  */}
    <ul>{
        newData.map(item => {
            return <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)}>Delete</button></li>
        })
        }</ul>
    </div>
    </div>
  )
}

export default Home