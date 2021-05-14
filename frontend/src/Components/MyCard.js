import React, { useState } from 'react'
import CSSMyCard from '../CSSstyles/MyCard.module.css';
import arrow from '../img/arrow.png';
import Cards from "./Cards";
//import {useStateValue} from "./StateProvider";

export const MyCard = (props) => {


    const [sname,setsname]=useState("");
    const [pname,setpname]=useState("");
    const [desc,setdesc]=useState("");
    const [img,setimg]=useState("");
    const [price,setprice]=useState("");
    const [rat,setrat]=useState("");

    const submit=(e)=>{
        e.preventDefault(); 
        if(!pname || !img || !price)
        alert("Product name or Product image or Price can not be empty!!");
       /* Cards(pname,desc,sname,img);*/
        <Cards
        title={pname}
        price={price}
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
                    <table>
                        <tr> 
                            <td>
                                <h5>Price</h5>
                                <input type="number" className={CSSMyCard.input} 
                    value={price} onChange={(e)=> {setprice(e.target.value)}} id="price"/>
                            </td>
                            <td>
                                <h5>Rating</h5>
                                <input type="number" maxlength="1" className={CSSMyCard.input} 
                    value={rat} onChange={(e)=> {setrat(e.target.value)}} id="rat"/>
                            </td>
                        </tr>
                    </table>
                    <br></br>
                    <input type="image" src={arrow} className={CSSMyCard.arr} onClick={submit}/>


                </form>
            </div>
        </div>
    )
}
