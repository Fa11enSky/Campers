import "react-datepicker/dist/react-datepicker.module.css";
import "./styles.css";
import ReactDatePicker from "react-datepicker";
import svg from "../../assets/sprite.svg";
const Calendar = ({ setDate, date }) => {
      
  return (
    <div className="calendarWrapper">
      <svg className="calendarIcon" width={20} height={20}>
        <use href={`${svg}#icon-date`} />
      </svg>
      <ReactDatePicker
        useWeekdaysShort={true}
        required
        calendarStartDay={1}
        selected={date}
        onChange={(date) => setDate(date)}
        placeholderText="Booking date"
      />
    </div>
  );
};

export default Calendar;
