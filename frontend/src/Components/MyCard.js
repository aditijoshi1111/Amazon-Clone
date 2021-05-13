import React, { useState } from 'react'
import CSSMyCard from '../CSSstyles/MyCard.module.css';
import arrow from '../img/arrow.png';
import Cards from "./Cards";

export const MyCard = () => {
    const [sname,setsname]=useState("");
    const [pname,setpname]=useState("");
    const [desc,setdesc]=useState("");
    const [img,setimg]=useState("");
    const pri=useState(600);
    const rat=useState(5);

    const submit=(e)=>{
        e.preventDefault(); 
        if(!pname || !desc || !sname)
        alert("To-do Title or Description or Seller name can not be empty!!");
       /* Cards(pname,desc,sname,img);*/
        <Cards
        title={pname}
        pri={pri}
        img={img}
        rat={rat}
      />
      }

    return (
        <div className={CSSMyCard.card}>
            <div className={CSSMyCard.Container}>
                <form onSubmit={submit}>
                <h1 align="center" className={CSSMyCard.h1}>Create your Item </h1>
                    <h5>Product name</h5>
                    <input type="text" className={CSSMyCard.input} 
                    value={pname} onChange={(e)=> {setpname(e.target.value)}} id="pname"/>

                    <h5>Image</h5>
                    <input type="file" accept="image/*" id="img" value={img} onChange={(e)=> {setimg(e.target.value)}}/>

                    <h5>Product description</h5>
                    <textarea rows="4" columns="50" className={CSSMyCard.textarea} 
                    value={desc} onChange={(e)=> {setdesc(e.target.value)}} id="desc"/>

                    <h5>Seller name</h5>
                    <input type="text" className={CSSMyCard.input} 
                    value={sname} onChange={(e)=> {setsname(e.target.value)}} id="sname"/>
                    <br/><br></br>

                    <input type="image" src={arrow} className={CSSMyCard.arr} />


                </form>
            </div>
        </div>
    )
}
