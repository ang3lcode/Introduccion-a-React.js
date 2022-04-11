import React from "react";
import './TodoSearch.css';


function TodoSearch(){
    const [searchValue, setSearchValue] = React.useState(''); // forma de agregar estado en componentes al crearlas como funciones
   
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return[
        <input 
        className="TodoSearch" 
        placeholder="Cebolla" 
        value={searchValue}
            onChange={onSearchValueChange}
        />,
        <p>{searchValue}</p>
    ];
}

export {TodoSearch};