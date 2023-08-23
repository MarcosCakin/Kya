import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

const CityDetail = () => {

    const { _id } = useParams(); // ID de mi evento
    const [cities, setCities] = useState();
    // Tener una variable de estado para almacenar la info de mi evento

    useEffect(() => {
        axios.get(`http://localhost:3000/api/cities/_id`)
            .then(response=>{setCities(response.data.city)})
            .catch(err => (console.log(err)))
    }, [])


    return (
        <section>
            <h2 className='text-center'>Detalle del evento: {_id}</h2>
        </section>
    )
}

export default CityDetail