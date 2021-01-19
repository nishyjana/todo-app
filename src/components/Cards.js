import React,{useEffect,useState} from 'react';
import {Card,CardText,CardBody,CardHeader,Button} from 'reactstrap';
import axios from 'axios';
import '../CSS/card.css';

export default function Cards() {

  const [lists, setlist] = useState([])
  
  useEffect(() => {
      async function fetchdata (){
          const result = await axios.get(
            'http://localhost:8000/'
          );
          setlist(result.data)
       }
       fetchdata();
  }, []);
  
  const remove=(id)=>{
     axios.delete(`http://localhost:8000/${id}`)
    
  }


  let cardDet = lists.map(list=>{
    return(
      <div>
        <div className="card">
          <Card>
             <CardBody>
               <CardHeader>
                    {list.id}
               </CardHeader>
               <CardText>
                     {list.detail}
               </CardText>
             </CardBody>
          </Card>
    
         </div>
         <div className="card__buttons">
            <Button onClick={()=>remove(list.id)}>delete</Button>
         </div>
     </div>
    )
  })

  return (
    <div>
    {cardDet}
    </div>
  );

}
