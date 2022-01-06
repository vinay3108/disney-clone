import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import db from '../firebase';
import { useState,useEffect } from 'react';
import {collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from 'firebase/firestore'
import { useHistory } from "react-router-dom";
const EditData = () => {
  const history = useHistory()
  const usersCollectionRef=collection(db,"movies")
    const [state,setState]=useState({
        backgroundImg:"",
        cardImg:"",
        title:"",
        type:"",
        description:"",
        subTitle:"",
    });

    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          setState(data.docs.filter(id=>data.docs.id===id).map((doc) =>({ ...doc.data(), id: doc.id })));
        };
       
        getUsers();
      }, []);

    
    const changeHandler=(e)=>{
        setState({...state,[e.target.name]:e.target.value});
        
    }
    const loginSubmit=async (e)=>{
        e.preventDefault();
       
    }
    return (
        <AddNewStyled>
                    <form className="loginForm"  onSubmit={loginSubmit}>
                <div className="loginEmail">
                    <label htmlFor="backgroundImg">Background Image</label><br/>
                  {/* <MailOutlineIcon /> */}
                  <input
                    type="text"
                    placeholder="Image Url"
                    required
                    name="backgroundImg"
                    value={state.backgroundImg}
                       onChange={changeHandler}
            
                  />
                </div>
                <div className="loginEmail">
                    <label htmlFor="backgroundImg">CardImage</label>  <br/>
                  {/* <MailOutlineIcon /> */}
                  <input
                    type="text"
                    placeholder="Image Url"
                    required
                    name='cardImg'
                    value={state.cardImg}
                       onChange={changeHandler}
                  />
                </div>
                <div className="loginEmail">
                    <label htmlFor="backgroundImg">Title</label>  <br/>
                  {/* <MailOutlineIcon /> */}
                  <input
                    type="text"
                    placeholder="Title"
                    required
                    name='title'
                    value={state.titleImg}
                       onChange={changeHandler}
                  />
                </div>
                <div className="loginEmail">
                    <label htmlFor="backgroundImg">Type</label>  <br/>
                  {/* <MailOutlineIcon /> */}
                  <input
                    type="text"
                    placeholder="Enter type name"
                    required
                    name='type'
                    value={state.type}
                    onChange={changeHandler}
                  />
                </div>
                <div className="loginEmail">
                    <label htmlFor="backgroundImg">SubTitle</label>  <br/>
                  {/* <MailOutlineIcon /> */}
                  <input
                    type="text"
                    placeholder="Enter SubTitle"
                    required
                    name='subTitle'
                    value={state.subTitle}
                    onChange={changeHandler}
                  />
                </div>
                <div className="loginEmail">
                    <label htmlFor="backgroundImg">Description</label>
                    <br/>
                  {/* <MailOutlineIcon /> */}
                  <textarea name="description" type="text" id="" cols="30" rows="3" value={state.description} onChange={changeHandler}></textarea>
                </div>
              
            
                <input type="submit" value="Submit" className="loginBtn" />
              </form>
        </AddNewStyled>
    )
}
const AddNewStyled=styled.div`
    text-align: center;
    height:100vh;
    width:100vw;
    color:white;
    z-index:6;
    margin-top:5rem;
    display:flex;
    /* border: 1px solid red; */
    font-size : 1.2rem;
    justify-content: center;
    
    input{
      margin:.5rem 0;
      padding: .4rem 2rem;
      border-radius: 4px;
      /* border: none; */
      background:transparent;
      color:white;
      outline: none;
      &::placeholder{
        text-align: center;
      }
    }
    textarea{
      margin:.5rem 0;
      padding: .4rem 2rem;
      border-radius: 4px;
      /* border: none; */
      background:transparent;
      color:white;
      outline: none;
    }
    .loginBtn{
      width:100%;
      &:hover{
        cursor: pointer;
      }
    }

`;
export default EditData;
