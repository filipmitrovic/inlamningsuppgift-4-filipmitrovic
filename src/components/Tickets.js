import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Tickets() {
    const { id } = useParams();
    const event = useSelector(state => state.events[id-1]);

    return (
        <div className='page-container'>
            <h3 className='ticket-title'>Tack för din <br/> beställning</h3>
            <div className='ticket-container'>
                <div>
                    <p className='ticket-description-label'>WHAT</p>
                    <h3 className='ticket-event-name'>{event.eventName}</h3>
                </div>
                <div>
                    <p className='ticket-description-label'>WHERE</p>
                    <h3>{event.location}</h3>
                </div>
                <div>
                    <div>
                        <p className='ticket-description-label'>WHEN</p>
                        <h3>{event.date.day.slice(0, 6)}</h3>
                    </div>
                    <div>
                        <p className='ticket-description-label'>FROM</p>
                        <h3>{event.date.time.starts}</h3>
                    </div>
                    <div>
                        <p className='ticket-description-label'>TO</p>
                        <h3>{event.date.time.ends}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tickets
