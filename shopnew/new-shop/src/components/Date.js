import './date.css'
function Date(props){
    const day = props.day;
    const month = props.month;
    const year = props.year;
    return(
        <div className ="date">
            <p className ='month'>{year}</p>
            <p className="year">{month}</p>
            <p className="day">{day}</p>
        </div>
    )
}
export default Date; 