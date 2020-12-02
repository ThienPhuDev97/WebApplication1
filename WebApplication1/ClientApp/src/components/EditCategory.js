import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function EditCategory() {
    //const [dataEdit, setDataEdit] = useState({}); // khai bao kieu doi tuong

    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');
    const { id } = useParams();


    useEffect(() => {
        fetch("api/categories/" + id)
            .then(rs => rs.json())
            .then(rs => {
                console.log(rs)
                setName(rs.name);
                setIcon(rs.icon);
            })
        //console.log('hjhj')
    }, []) // componentDidUpdate

    const onHandleChange = (event) => {

        console.log('hello');
    }
    const submitHandler = (event) => {
        event.preventDefault();
        alert(`sumit=  ${ name } ${ icon }`)
    }
    return (

        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label> Name Category:  </label>
                <input type="text" className="form-control" value={name} name="name" onChange={e => setName(e.target.value)} />
            </div>
            <div className="form-group">
                    <label>Icon: </label>
                <input type="text" className="form-control" value={icon} name="icon" onChange={e => setIcon(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="submit" value="Update" className="btn btn-primary" />
            </div>
        </form>
    )
}
