import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Eventos() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null); // Track selected date
  const [events, setEvents] = useState([
    { date: new Date(2024, 9, 14), title: 'festa' },
    { date: new Date(2024, 9, 16), title: 'festa' },
    { date: new Date(2024, 9, 20), title: 'festa' },
    { date: new Date(2024, 9, 25), title: 'festa' },
    { date: new Date(2024, 9, 25), title: 'festa' },
  ]); // Sample events

  // Navegar para o mês anterior
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  // Navegar para o próximo mês
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  // Função para filtrar os eventos do dia selecionado
  const getEventsForDay = (date) => {
    return events.filter(event => isSameDay(event.date, date));
  };

  // Gerar a matriz de dias do calendário
  const renderDays = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd');
        const cloneDay = day;
        const hasEvents = getEventsForDay(cloneDay).length > 0; // Check if day has events

        days.push(
          <div
            className={`p-6 flex justify-center items-center cursor-pointer transition text-xl ${
              !isSameMonth(day, monthStart)
                ? 'text-gray-400' // Dias fora do mês atual
                : isSameDay(day, new Date())
                ? 'bg-[#85D8FB] text-white font-bold rounded-full' // Dia atual
                : 'text-gray-900 hover:bg-blue-100 rounded-full' // Dias normais
            } ${hasEvents ? 'border-2 border-[#AFAFAF]' : ''}`} // Highlight days with events
            key={day}
            onClick={() => setSelectedDate(cloneDay)} // Select the date
          >
            <span>{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 gap-4" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="flex justify-center items-center bg-[#ffffff]">
      <div className="flex flex-col md:flex-row items-start md:items-center">
        {/* Calendar Section */}
        <div className="bbg-[#85D8FB] shadow-lg rounded-lg mt-[5vw] mb-10 max-w-4xl md:w-2/3">
          <div className="flex justify-between items-center mb-8">
            <button onClick={prevMonth} className="text-gray-600 bg-white hover:text-[#85D8FB] transition">
              <FiChevronLeft size={32} />
            </button>
            <h2 className="text-3xl font-semibold text-gray-900">
              {format(currentMonth, 'MMMM yyyy')}
            </h2>
            <button onClick={nextMonth} className="text-gray-600 bg-white hover:text-[#85D8FB] transition">
              <FiChevronRight size={32} />
            </button>

          </div>

          <div className="grid grid-cols-7 gap-4 text-center font-semibold text-lg text-gray-700">
            <div>Dom</div>
            <div>Seg</div>
            <div>Ter</div>
            <div>Qua</div>
            <div>Qui</div>
            <div>Sex</div>
            <div>Sab</div>
          </div>

          {renderDays()}
        </div>

        {/* Event Legend Section */}
        <div className="bg-[#ffff] shadow-2xl border-[#AFAFAF] text-black rounded-lg mt-6 md:mt-0 md:ml-6 p-6 w-full md:w-1/3">
          <h3 className="text-2xl text-black font-semibold mb-4">Eventos</h3>

          {selectedDate ? (
            <div>
              <h4 className="text-xl font-semibold mb-2">
                {format(selectedDate, 'MMMM d, yyyy')}
              </h4>
              <ul>
                {getEventsForDay(selectedDate).length > 0 ? (
                  getEventsForDay(selectedDate).map((event, index) => (
                    <li key={index} className="mb-2">
                      <span className="block text-lg font-medium text-gray-800">{event.title}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-black">Sem eventos.</li>
                )}
              </ul>
            </div>
          ) : (
            <p className="text-black">Selecione um dia para conferir enventos.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Eventos;
