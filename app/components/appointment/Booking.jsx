'use client';

import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import "../../fc.css"
import BookingModal from './BookingModal';
import { getBookings } from '@/app/api/booking';

export default function Booking() {
    const [events, setEvents] = useState([]);

    const fetchBookings = async () => {
        console.log('called fetch booking')
        const response = await getBookings()
        setEvents(response.response?.data || [])
        // setEvents(response.data.data)
    }

    useEffect(() => {
        fetchBookings()
    }, [])

    const [isModal, setIsModal] = useState(false)
    const [allowForm, setAllowForm] = useState(true)
    const [currentData, setCurrentData] = useState({})


    const getLocalDateStr = (date) => {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    };

    const getCountForDate = (dateStr) => {
        return events.filter(e => e.start === dateStr).length;
    };


    //Today Date
    const todayStr = getLocalDateStr(new Date());

    //Date Click Handler
    const handleDateClick = (arg) => {
        setIsModal(true)
        const dateStr = arg.dateStr;
        const count = getCountForDate(dateStr);
        console.log(...events)


        if (count >= 10) {
            setAllowForm(false)
            setIsModal(true)
            return;
        }
        setCurrentData(
            {
                date: dateStr
            }
        )
        setAllowForm(true)
        setIsModal(true)
        // if (title) {
        //     const newEvent = {
        //         id: Date.now().toString(),
        //         title,
        //         start: dateStr,
        //         allDay: true,
        //         display: 'none',
        //     };
        //     setEvents((prev) => [...prev, newEvent]);
        // }
    };

    return (
        <>
            <div className="sm:p-6">
                <div className="bg-black border-white/5 border text-white/80 font-poppinsRegular text-[10px] overflow-hidden rounded-2xl">
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        dateClick={handleDateClick}
                        events={events}

                        //Blocking all the dates before today one
                        validRange={{
                            start: todayStr,
                        }}

                        height="auto"

                        //First Row (Header)
                        headerToolbar={{
                            left: 'prev',
                            center: 'title',
                            right: 'next',
                        }}


                        //Days Row
                        dayHeaderClassNames="bg-secondary-orange uppercase text-md font-poppins text-white font-medium py-3"


                        //Content of Date Container
                        dayCellContent={(arg) => {
                            const dateStr = getLocalDateStr(arg.date);
                            const count = getCountForDate(dateStr);
                            const isFull = count >= 10;

                            return (
                                <div className="flex flex-col items-center justify-center w-full h-16">  {/* no group here */}
                                    <p className="text-md sm:text-lg">{arg.dayNumberText.replace(/\D/g, '')}</p>
                                    {isFull && (
                                        <span className="text-[10px] font-medium text-red-500">Full</span>
                                    )}
                                    {!isFull && (
                                        <span className="text-[8px] sm:text-[10px] font-medium text-white/80 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            {count}/10
                                        </span>
                                    )}
                                </div>
                            );
                        }}

                        showNonCurrentDates={true}

                        dayCellClassNames={(arg) => {
                            const dateStr = getLocalDateStr(arg.date);
                            const count = getCountForDate(dateStr);
                            const day = arg.date.getDay();
                            const isWeekend = day === 0 || day === 6;

                            let classes = "relative transition-all";

                            if (isWeekend || arg.isPast) {
                                classes += " bg-white/25 text-gray-400 cursor-not-allowed pointer-events-none";
                            } else if (count >= 10) {
                                classes += " bg-red-50 cursor-not-allowed pointer-events-none";
                            } else {
                                classes += " group cursor-pointer hover:bg-primary-orange";
                            }

                            

                            return classes;
                        }}

                        eventClassNames="rounded-lg text-xs font-medium px-2 py-0.5"
                    />
                </div>
            </div>

            <BookingModal open={isModal} setOpen={setIsModal} allow={allowForm} data={currentData} refresh={fetchBookings} />
        </>
    );
}