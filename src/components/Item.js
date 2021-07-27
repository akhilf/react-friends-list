import { FaTimes } from 'react-icons/fa';

const Item = ( { item, onDelete }) => {
    return (
        <div className='item'>
            <h3>{item.name} <FaTimes  onClick={ () => onDelete(item.id)} /></h3>
            <p>{item.text}</p>
        </div>
    )
}

export default Item
