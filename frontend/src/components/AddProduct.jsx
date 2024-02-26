import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function AddProduct(){

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const navigate = useNavigate();

    const saveProduct = (e)=>{
        
    }

    return(
        <div className="container mt-5">
            <Link to="/" className="bg-green-500 hover:bg-green-700 border-slate-200 text-white font-bold py-2 px-4 rounded-lg">Kembali</Link>
            <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
                <form className="my-10">


                    <div className="flex flex-col">
                        <div className="mb-5">
                            <label className="font-bold text-slate-700">Product Name</label>
                            <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Product Name"
                            
                            />

                        </div>
                        <div className="mb-5">
                            <label className="font-bold text-slate-700">Product Name</label>
                            <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Product Name"/>

                        </div>
                        <button type="submit" className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default AddProduct;