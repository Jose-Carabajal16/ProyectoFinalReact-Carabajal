import { Link } from "react-router-dom"


const Item = ( {producto} ) => {
  return (
    <div className="card">
        <img src={producto.img} alt={producto.titulo} />
        <div className="detalle">
            <h3 className="titulo-card">{producto.titulo}</h3>
            <p className="descripcion">{producto.descripcion}</p>
            <p className="precio">${producto.precio}</p>
            <button className="agregar"><Link to={`/item/${producto.id}`}>Ver Mas</Link></button>
            
        </div>
        
    </div>
  )
}

export default Item