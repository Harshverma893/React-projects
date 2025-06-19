import './Item.css'

function Item(props){
    const item= props.item;
    return (
        <div>
<p>{item}</p>
{props.children}
        </div>
        
    )
}
export default Item;