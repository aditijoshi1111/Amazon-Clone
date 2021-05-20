<<<<<<< HEAD
import React, { useState } from "react";
import CSSMyCard from "../CSSstyles/MyCard.module.css";
import amazon from "../img/amazon.png";
import { Link } from "react-router-dom";

export default function MyCard() {
  const [product_name, setproduct_name] = useState("camera");
  const [img, setimg] = useState("");
  const [description, setdescription] = useState("HD Quality");
  const [seller_name, setseller_name] = useState("qwerty");
  const [price, setprice] = useState("10000");

  function upload() {
    var form = new FormData();
    form.append("product_name", product_name);
    form.append("file", img);
    form.append("description", description);
    form.append("seller_name", seller_name);
    form.append("price", price);

    fetch("http://localhost:8000/api/postProduct", {
      method: "POST",
      body: form,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log("Error in adding product ", err));
  }

  return (
    <div className={CSSMyCard.main}>
      <Link to="/">
        <img className={CSSMyCard.amazon} src={amazon} alt="Loading.." />
      </Link>
      <div className={CSSMyCard.Container}>
        <h1 className={CSSMyCard.header}>Add Product</h1>

        <h5>Product name</h5>
        <input
          type="text"
          value="camera"
          onChange={(e) => {
            setproduct_name(e.target.value);
          }}
        />

        <h5>Image</h5>
        <input
          type="file"
          onChange={(e) => {
            setimg(e.target.files[0]);
          }}
        />

        <h5>Product description</h5>
        <textarea
          className={CSSMyCard.textarea}
          value="HD quality photography"
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />

        <h5>Seller name</h5>
        <input
          type="text"
          className={CSSMyCard.input}
          value="qwerty"
          onChange={(e) => {
            setseller_name(e.target.value);
          }}
        />

        <h5>Price</h5>
        <input
          type="number"
          className={CSSMyCard.input}
          value="10000"
          onChange={(e) => {
            setprice(e.target.value);
          }}
        />

        <button onClick={upload}>Add Product</button>
      </div>
    </div>
  );
=======
import React, { useState } from 'react'
import CSSMyCard from '../CSSstyles/MyCard.module.css';
import amazon from '../img/amazon.png'
import {Link} from 'react-router-dom';

export default function MyCard(){
    const [product_name,setproduct_name]=useState('');
    const [img,setimg]=useState('');
    const [description,setdescription]=useState('');
    const [seller_name,setseller_name]=useState('');
    const [price,setprice]=useState('');


    function upload(e){
        e.preventDefault();
        var form = new FormData();
        form.append('product_name',product_name);
        form.append('file',img);
        form.append('description', description);
        form.append('seller_name', seller_name);
        form.append('price',price);

        fetch('http://localhost:8000/api/postProduct', {
            method: 'POST',
            body: form
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.length===0){
            alert("Sorry, request failed.");
            }
            else{
            alert("Product added successfully.");
            }
        })
        .catch(err => console.log("Error in adding product ",err))

        
        e.target.reset();
    }

    return (
        <div className={CSSMyCard.main}>
            <Link to="/">
                <img className={CSSMyCard.amazon} src={amazon} alt="Loading.." />
            </Link>
            <form className={CSSMyCard.Container} onSubmit={upload}>
                <h1 className={CSSMyCard.header}>
                    Add Product 
                </h1>
                
                <h5>Product name</h5>
                <input type="text" 
                        value={product_name}
                        onChange={(e)=> {setproduct_name(e.target.value)}}/>

                <h5>Image</h5>
                <input type="file"
                        onChange={(e)=> {setimg(e.target.files[0])}}/>

                <h5>Product description</h5>
                <textarea className={CSSMyCard.textarea} 
                        value={description}
                        onChange={(e)=> {setdescription(e.target.value)}}/>

                <h5>Seller name</h5>
                <input type="text" 
                        className={CSSMyCard.input} 
                        value={seller_name} 
                        onChange={(e)=> {setseller_name(e.target.value)}}/>        

                <h5>Price</h5>
                <input type="number" 
                        className={CSSMyCard.input} 
                        value={price}
                        onChange={(e)=> {setprice(e.target.value)}}/>

                <button type="submit">Add Product</button>        
            </form>
        </div>
    )
>>>>>>> 10843e9db8934034b50d44bff111d473be8990fe
}
