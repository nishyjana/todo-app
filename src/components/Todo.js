import React,{useEffect,useState} from 'react';
import '../CSS/todo.css';
import Card from './Cards'
import {InputGroup,Input,Button} from 'reactstrap';
import axios from 'axios';


export default function Todo() {

const [items, setItems] = useState({id:'',detail:''})
 
const addItem=(e)=>{
    axios.post('http://localhost:8000/', items)
    .then(function (response) {
        console.log(response)
        setItems({id:'',detail:''})
    })
    .catch(function (error) {
        console.log(error)
    }) 
    e.preventDefault()
    }
    
const update=(e)=>{
    axios.put(`http://localhost:8000/${items.id}`,items)
        .then(function (response) {
            console.log(response)
            setItems({id:'',detail:''})
        })
        .catch(function (error) {
            console.log(error)
        }) 
        e.preventDefault()
        }

    
const handleChange=(evt)=> {
    const value = evt.target.value;
    setItems({
      ...items,
      [evt.target.name]: value
    });
  }


return (
    <div className="todo__main">

        <div className="todo__input">
            <InputGroup> 
                <Input  placeholder="Enter id" name="id" value={items.id} onChange={handleChange}/>

                <Input placeholder="Enter detail" name="detail" value={items.detail} onChange={handleChange}/>
            </InputGroup>

        </div>

        <div className="todo__addBtn">
            <Button onClick={addItem}>Add</Button>
            <Button onClick={update}>update</Button>
        </div>

        <div className="todo__card">
            <Card/>
        </div>
        
    </div>
    
  
  );
}
