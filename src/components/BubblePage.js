import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import  fetchColorService from '../services/fetchColorService';
import axiosWithAuth from "../helpers/axiosWithAuth";
import axios from "axios"

const BubblePage = (props) => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  // const { id } = useParams()
  
  useEffect(() => {
    
    // fetchColorService().then(res => {
    //   console.log(res)
    //   setColors(res)
    // })
    axiosWithAuth().get("/colors")
      .then(res => {
        console.log(res.data)
        setColors(res.data)
      })
    
    
  },[])


  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    // console.log(editColor.id)
    // console.log(colors)
    axiosWithAuth().put(`/colors/${editColor.id}`, editColor)
      .then(res => {
        console.log(res)
        
        setColors([
          ...colors.filter((color) => 
            color.id !== editColor.id
          ), res.data

        ])
        
        
      })
      .catch(err => console.log(err))
  };


  // deleteColor with appropriate filter to remove color from the list
  const deleteColor = (colorToDelete) => {
    axiosWithAuth().delete(`/colors/${colorToDelete.id}`)
      .then(res => {
        console.log(res)
        setColors(
    
          colors.filter((color) => 
          color.id !== colorToDelete.id)
          
        )
      })
      .catch(err => console.log(err))
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
