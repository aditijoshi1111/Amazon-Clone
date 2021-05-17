import React, { useState } from 'react'
import CSSMyCard from '../CSSstyles/MyCard.module.css';
import amazon from '../img/amazon.png'
import {Link} from 'react-router-dom';

export default function MyCard(){
    const [sname,setsname]=useState("");
    const [pname,setpname]=useState("");
    const [desc,setdesc]=useState("");
    const [img,setimg]=useState("");
    const [price,setprice]=useState("");

    return (
        <div className={CSSMyCard.main}>
            <Link to="/">
                <img className={CSSMyCard.amazon} src={amazon} alt="Loading.." />
            </Link>
            <form className={CSSMyCard.Container}>
                <h1 className={CSSMyCard.header}>
                    Add Product 
                </h1>
                
                <h5>Product name</h5>
                <input type="text" 
                        value={pname}  
                        id="pname"
                        onChange={(e)=> {setpname(e.target.value)}}/>

                <h5>Image</h5>
                <input type="file" 
                        accept="image/*" 
                        id="img" 
                        value={img} 
                        onChange={(e)=> {setimg(e.target.value)}}/>

                <h5>Product description</h5>

                <textarea rows="4" columns="50" 
                        className={CSSMyCard.textarea} 
                        value={desc} 
                        id="desc"
                        onChange={(e)=> {setdesc(e.target.value)}}/>

                <h5>Seller name</h5>
                <input type="text" 
                        className={CSSMyCard.input} 
                        value={sname} 
                        id="sname"
                        onChange={(e)=> {setsname(e.target.value)}}/>        

                <h5>Price</h5>
                <input type="number" 
                        className={CSSMyCard.input} 
                        value={price}  
                        id="price"
                        onChange={(e)=> {setprice(e.target.value)}}/>

                <button>Add Product</button>        
            </form>
        </div>
    )
}