import { FaTrash, FaStarHalfAlt } from 'react-icons/fa';

const Item = ( { item, onDelete }) => {
    return (
        <div className='item'>
        <div className="row">
            <div className="column">
                <h3>{item.name} </h3>
                <p>{item.text}</p>
            </div>
            <div className="column">
                <div className="txtAlign">
                    <span><FaStarHalfAlt /></span>
                    <span><FaTrash  onClick={ () => onDelete(item.id)} /></span>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Item
