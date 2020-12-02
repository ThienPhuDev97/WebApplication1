import React, { useState, useEffect } from 'react';
import './Category.css';
import axios from 'axios';
import './Service/Adapter';
import { api, url } from './Service/Adapter';
import { Link } from "react-router-dom";




export default function Category() {
    const [category, setCategory] = useState([]);
    
   
    

    useEffect(() => {
        populateWeatherData();
    },[])

    const populateWeatherData = async()=> {
        const response = await fetch('api/categories');
        const data = await response.json();
        setCategory(data);
            
    }

    const eventDetele = async (id) => {
        //c1 xóa bằng fetch
        //fetch('api/categories/' + id, {
        //    method: 'DELETE',
        //})
        //    .then(res => res.text()) // or res.json()
        //    .then(res => console.log(res));

        //c2 dùng axios
         const rs = await axios.delete('https://localhost:5001/api/categories/' + id);
        
        //const rs = await api.delete(url.category.url = { id });
        if (rs.status === 200) {
            console.log('success deleted');
        }
    }
            
 
    return (
       
            
                category.length > 0 ?
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">NameCategory</th>
                                <th scope="col">ICon</th>
                                <th scope="col"></th>
                               
                            </tr>
                        </thead>
                    <tbody>
                        {
                            category.map((e, i) => {
                                return (

                                    <tr key={i}>
                                        <th scope="row">{e.id}</th>
                                        <td>{e.name}</td>
                                        <td>{e.icon}</td>
                                        <td>
                                            <button type="button" className=" btn btn-danger mg-5" onClick={() => eventDetele(e.id)} >

                                           
                                                Delete</button>
                                            <button type="button" className="btn btn-primary">
                                                <Link to={"/EditCategory/" + e.id}>Update</Link>
                                                </button>
                                        </td>
                                        </tr>
                                   
                                    )
                            })}
                        </tbody></table>


                    :""
                    

            
        

        );
}
