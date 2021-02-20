import { useEffect } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import addEvents from '../redux/actions/addEvents';
import Data from '../data/events.json';
// routing
import { useHistory } from "react-router-dom";

function Events() {

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => dispatch(addEvents(Data)), []);

    const events = useSelector((state) => state.events);

    return (
        <div className='page-container'>
            <h1 className='event-title'>Events</h1>
            { events.map((event) => (
                <div key={event.id} className='event-container'>
                    <div className='date-square'>
                        <p className='date-square__day'>{event.date.day.slice(0, 2)}</p>
                        <p className='date-square__month'>{event.date.day.slice(3, 6).toUpperCase()}</p>
                    </div>
                    <div className='event-details-container' onClick={() => history.push(`/buy/event-${event.id}`)}>
                        <h3 className='event-details-container__name'>{event.eventName}</h3>
                        <p className='event-details-container__location'>{event.location}</p>
                        <div className='date-price-container'>
                            <p className='event-details-container__time'>{event.date.time.starts} - {event.date.time.ends}</p>
                            <p className='event-details-container__price'>{event.price}</p>
                        </div>
                        <hr style={{border: '1px solid rgba(255, 255, 255, 0.3)'}}/>
                    </div>
                </div>
            )) }
        </div>
    )
}

export default Events;