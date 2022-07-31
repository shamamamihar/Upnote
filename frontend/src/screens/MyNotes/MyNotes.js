
import MainScreen from '../../components/MainScreen';
import { Badge, Button, Card } from "react-bootstrap";
import { Link } from  "react-router-dom";
//import notes ,{} from "../../data/notes";
import { useEffect, useState } from 'react';
import axios from 'axios';



const MyNotes = () => {


        const [notes, setNotes] = useState([]);




      const deleteHandler =(id) => {
        if (window.confirm("Are you sure?"))  {


        }
      };

//useEffect

const fetchNotes = async() => {
  const { data } = await axios.get('/api/notes');
  
  setNotes(data);

};

    console.log(notes);


        useEffect(() => {
          fetchNotes();
  
        },  []);
      




//UseEffect
  return (
    <MainScreen title = "Welcome to Upnotes!">
      
      <Link to = 'createnote'>
        <Button variant ="info" style ={{ marginLeft : 10, marginBottom: 6}}  size="lg"> Create New Note</Button>
        </Link>


        {

         notes.map(note  => (

          <Card key = {note._id} style={{margin:10}}>
      <Card.Header style = {{display:"flex"}}>
        
        <span style={{
          color : "black",
          flex : 1,
          cursor:"pointer",
          alignSelf: "center",
          fontSize: 18,

        }}>     {note.title} </span>
       

     <div>
     <Button href ={`/note/${note._id}`}variant ="success" className= "mx-2" > Edit</Button>
      <Button variant ="danger" className= "mx-2" onClick= {() => deleteHandler(note._id)}> Delete</Button>
     </div>


      </Card.Header>
      <Card.Body>
       
       <h4>
        <Badge variant ="Dark">

          Created by - {note.created}
        </Badge>

       </h4>




        <blockquote className="blockquote mb-0">
          <p>
            
            {note.content}
          </p>
          <footer className="blockquote-footer">
            Created on <cite title="Source Title">Date</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>



         ))


        }



       
  
      
     </MainScreen>
  )
}

export default MyNotes;