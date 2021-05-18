<<<<<<< HEAD
import React, { useState } from "react";
import CSSMyCard from "../CSSstyles/MyCard.module.css";
import arrow from "../img/arrow.png";
import Cards from "./Cards";

export const MyCard = () => {
  const [sname, setsname] = useState("");
  const [pname, setpname] = useState("");
  const [desc, setdesc] = useState("");
  const [img, setimg] = useState("");
  const [price, setprice] = useState("");
  const [rat, setrat] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!pname || !desc || !sname)
      alert("To-do Title or Description or Seller name can not be empty!!");
    /* Cards(pname,desc,sname,img);*/
    <Cards title={pname} price={price} img={img} rat={rat} />;
  };

  return (
    <div className={CSSMyCard.card}>
      <div className={CSSMyCard.Container}>
        <form onSubmit={submit}>
          <h1 align="center" className={CSSMyCard.h1}>
            Create your Item{" "}
          </h1>
          <h5>Product name</h5>
          <input
            type="text"
            className={CSSMyCard.input}
            value={pname}
            onChange={(e) => {
              setpname(e.target.value);
            }}
            id="pname"
          />

          <h5>Image</h5>
          <input
            type="file"
            accept="image/*"
            id="img"
            value={img}
            onChange={(e) => {
              setimg(e.target.value);
            }}
          />

          <h5>Product description</h5>
          <textarea
            rows="4"
            columns="50"
            className={CSSMyCard.textarea}
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
            id="desc"
          />

          <h5>Seller name</h5>
          <input
            type="text"
            className={CSSMyCard.input}
            value={sname}
            onChange={(e) => {
              setsname(e.target.value);
            }}
            id="sname"
          />
          <br />
          <br></br>
          <table>
            <tr>
              <td>
                <h5>Price</h5>
                <input
                  type="number"
                  className={CSSMyCard.input}
                  value={price}
                  onChange={(e) => {
                    setprice(e.target.value);
                  }}
                  id="price"
                />
              </td>
              <td>
                <h5>Rating</h5>
                <input
                  type="number"
                  maxlength="1"
                  className={CSSMyCard.input}
                  value={rat}
                  onChange={(e) => {
                    setrat(e.target.value);
                  }}
                  id="rat"
                />
              </td>
            </tr>
          </table>
          <br></br>
          <input type="image" src={arrow} className={CSSMyCard.arr} />
        </form>
      </div>
    </div>
  );
};
=======
import React, { useState } from 'react'
import CSSMyCard from '../CSSstyles/MyCard.module.css';
import amazon from '../img/amazon.png'
import {Link} from 'react-router-dom';

export default function MyCard(){
    const [product_name,setproduct_name]=useState('camera');
    const [img,setimg]=useState('');
    const [description,setdescription]=useState('HD Quality');
    const [seller_name,setseller_name]=useState('qwerty');
    const [price,setprice]=useState('10000');


    function upload(){
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
        .then(data => console.log(data))
        .catch(err => console.log("Error in adding product ",err));
    }

    return (
        <div className={CSSMyCard.main}>
            <Link to="/">
                <img className={CSSMyCard.amazon} src={amazon} alt="Loading.." />
            </Link>
            <div className={CSSMyCard.Container}>
                <h1 className={CSSMyCard.header}>
                    Add Product 
                </h1>
                
                <h5>Product name</h5>
                <input type="text" 
                        value="camera"
                        onChange={(e)=> {setproduct_name(e.target.value)}}/>

                <h5>Image</h5>
                <input type="file"
                        onChange={(e)=> {setimg(e.target.files[0])}}/>

                <h5>Product description</h5>
                <textarea className={CSSMyCard.textarea} 
                        value="HD quality photography"
                        onChange={(e)=> {setdescription(e.target.value)}}/>

                <h5>Seller name</h5>
                <input type="text" 
                        className={CSSMyCard.input} 
                        value="qwerty" 
                        onChange={(e)=> {setseller_name(e.target.value)}}/>        

                <h5>Price</h5>
                <input type="number" 
                        className={CSSMyCard.input} 
                        value="10000" 
                        onChange={(e)=> {setprice(e.target.value)}}/>

                <button onClick={upload}>Add Product</button>        
            </div>
        </div>
    )
}
>>>>>>> 230ee837a9f7329e3f8277635c6c6f6ae114b8ec
