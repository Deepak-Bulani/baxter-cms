import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// Priority order: DEADLINE > MEETING > HOLIDAY > BIRTHDAY > REMINDER
const EVENT_TYPES = {
  DEADLINE: {
    type: 'DEADLINE',
    icon: '🏳️‍🌈',
    title: 'Deadline',
    priority: 1,
  },
  MEETING: {
    type: 'MEETING',
    icon: '🏳️‍🌈',
    title: 'Meeting',
    priority: 2,
  },
  HOLIDAY: {
    type: 'HOLIDAY',
    icon: '🏳️‍🌈',
    title: 'Holiday',
    priority: 3,
  },
  BIRTHDAY: {
    type: 'BIRTHDAY',
    icon: '🏳️‍🌈',
    title: 'Birthday',
    priority: 4,
  },
  REMINDER: {
    type: 'REMINDER',
    icon: '🏳️‍🌈',
    title: 'Reminder',
    priority: 5,
  },
};

const propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.oneOf(Object.keys(EVENT_TYPES)).isRequired,
    })
  ).isRequired,
  trigger: PropTypes.node.isRequired,
  openOnHover: PropTypes.bool,
  position: PropTypes.oneOf(['bottom', 'top', 'left', 'right']),
  onDateSelect: PropTypes.func,
};

const defaultProps = {
  events: [],
  openOnHover: false,
  position: 'bottom',
  onDateSelect: () => {},
};

function CustomCalendar({events, trigger, openOnHover, position, onDateSelect}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const calendarRef = useRef(null);
  const triggerRef = useRef(null);

  const handleClickOutside = event => {
    if (
      calendarRef.current &&
      !calendarRef.current.contains(event.target) &&
      !triggerRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getPriorityEventForDate = date => {
    const dateEvents = events.filter(
      event => new Date(event.date).toDateString() === date.toDateString()
    );

    if (dateEvents.length === 0) return null;

    // Sort by priority and return the highest priority event
    return dateEvents.sort(
      (a, b) => EVENT_TYPES[a.type].priority - EVENT_TYPES[b.type].priority
    )[0];
  };

  const handleDateChange = date => {
    setSelectedDate(date);
    onDateSelect(date);
    setIsOpen(false);
  };
  const renderTileContent = ({date, view}) => {
    if (view === 'month') {
      const priorityEvent = getPriorityEventForDate(date);
      const isCurrentMonth = date.getMonth() === selectedDate.getMonth();

      return (
        <div
          className={`border-[0.5px] border-[#888] pt-[3px] pl-[1px] h-[38.8px] w-[35.6px] ${!isCurrentMonth ? 'bg-gray-100' : ''}`}
        >
          <div className="flex flex-col h-full">
            <span
              className={`text-left text-xs font-sans ${isCurrentMonth ? 'text-[#6a6b55]' : 'text-gray-400'}`}
            >
              {date.getDate()}
            </span>
            {priorityEvent && isCurrentMonth && (
              <div className="flex justify-center">
                <span title={`${priorityEvent.title} (${EVENT_TYPES[priorityEvent.type].title})`}>
                  {EVENT_TYPES[priorityEvent.type].icon}
                </span>
              </div>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  const getPositionClasses = () => {
    const positions = {
      bottom: 'top-full left-0',
      top: 'bottom-full left-0',
      left: 'right-full top-0',
      right: 'left-full top-0',
    };
    return positions[position];
  };

  return (
    <div className="relative inline-block">
      <div
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => openOnHover && setIsOpen(true)}
        onMouseLeave={() => openOnHover && setIsOpen(false)}
        className="cursor-pointer"
      >
        {trigger}
      </div>

      {isOpen && (
        <div
          ref={calendarRef}
          className={`absolute z-50 ${getPositionClasses()}`}
          onMouseEnter={() => openOnHover && setIsOpen(true)}
          onMouseLeave={() => openOnHover && setIsOpen(false)}
        >
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            tileContent={renderTileContent}
            className="rounded-lg shadow-lg border border-gray-200 bg-white"
            formatDay={() => ''}
            showNeighboringMonth={true}
            tileClassName={() => 'p-0 m-0'}
            formatShortWeekday={(locale, date) =>
              ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'][
                date.getDay() === 0 ? 6 : date.getDay() - 1
              ]
            }
            minDetail="month"
            maxDetail="month"
            showFixedNumberOfWeeks={false}
            calendarType={'gregory'}
          />
        </div>
      )}
    </div>
  );
}

CustomCalendar.propTypes = propTypes;
CustomCalendar.defaultProps = defaultProps;

export default CustomCalendar;
