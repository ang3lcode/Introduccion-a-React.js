import React from "react";
import './TodoCounter.css';

function TodoCounter({total, completed}) {
    

    return (
        <h2 className="TodoCounter">has completado {completed} de {total} Todos</h2>
    );
}

export { TodoCounter };