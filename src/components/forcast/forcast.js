import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "./forcast.css";
const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Forcast = ({ data }) => {
    const dayInWeek = new Date().getDay();
    const forcastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInWeek),
    );

    return (
        <>
            <label className='title'>Daitly</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, i) => (
                    <AccordionItem key={i}>
                        {" "}
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily-item'>
                                    <img
                                        alt='weather'
                                        className='icon-small'
                                        src={`icons/${item.weather[0].icon}.svg`}
                                    />
                                    <label className='day'> {forcastDays[i]}</label>
                                    <label className='description'>
                                        {" "}
                                        {item.weather[0].description}{" "}
                                    </label>
                                    <label className='min-max'>
                                        {" "}
                                        {Math.round(item.main.temp_min)}°C /{" "}
                                        {Math.round(item.main.temp_max)}°C{" "}
                                    </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='daily-details-grid'>
                                <div className='daily-details-grid-item'>
                                    <label>Pressure</label>
                                    <label>{item.main.pressure}</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Wind speed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>sea level</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};

export default Forcast;
