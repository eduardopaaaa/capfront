import {React, useState, useEffect} from 'react'
import axios from 'axios';
import ReactLoading from 'react-loading'
import './PreLoader.css';

function Preloader() {

    const [data, setData] = useState([]);
    const [done, setDone] = useState(undefined);

    useEffect(() => {
        setTimeout(() => { 
        axios.get("https://lit-caverns-62565.herokuapp.com/").then((response) => {
            
            setData(response.data);
            setDone(true);
        });
        },2000)
    }, []);

    return (
        <>
            {
            !done ? (<ReactLoading className='loading' type={"cylon"} color={"white"} z-index={5} height={10000} width={1300} /> 
            ) : (
            <ul>
                {data.map((data) => ( 
                <li key={data.id}>{data.id}</li>
                ))}
            </ul>
            )}
        </>
    )
}

export default Preloader;