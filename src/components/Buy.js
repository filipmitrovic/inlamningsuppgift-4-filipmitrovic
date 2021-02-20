import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Buy() {
    
    const { id } = useParams();
    const history = useHistory();
    const event = useSelector(state => state.events[id-1]);
    
    return (
        <div style={{textAlign: 'center'}} className='page-container'>
            <p className='buy__top-text '>You are about to score <br/> some tickets to</p>
            <h3 className='buy__event-name'>{event.eventName}</h3>
            <p className='buy__event-date'>{event.date.day} kl {event.date.time.starts} - {event.date.time.ends}</p>
            <p className='buy__event-location'>@ {event.location}</p>
            <h3 className='buy__event-price'>{event.price}</h3>
            <button className='buy-btn' onClick={() => history.push(`/ticket/event-${id}`)}>Beställ</button>
        </div>
    )
}

export default Buy;