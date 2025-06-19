import './Itemdate.css'

function ItemDate(props){
    const day = props.day;
    const month = props.month;
    const year = props.year

    return (
        <div className="parent">
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
    )
}
export default ItemDate;