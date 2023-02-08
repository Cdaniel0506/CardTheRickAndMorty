import React from 'react'
import './styles/ResidentForm.css';

import '../assets/Rick.jpg'

//Aqui esta el buscador y el botton 
const ResidentForm = ({ handleSubmit }) => {
    return (
        <>
            <div className="residentForm">

                <div>
                    <img src="" alt="" />
                </div>
                <h1 className="residentForm_name">Rick And Morty</h1>
                <form className="residentForm_handle" onSubmit={handleSubmit}>
                    <input className="residentForm_input" type="text" id='idLocation' placeholder='type a location id' />
                    <button className="residentForm_button">Search</button>
                </form>
            </div>
        </>
    )
}

export default ResidentForm