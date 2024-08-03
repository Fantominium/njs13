// components/BookingList.tsx
"use client"
import React, { useState } from 'react';
import GetBookingsButton from '@/components/atoms/GetBookingsButton/page';
import { Booking } from '@/types/Booking';

const BookingList: React.FC = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [error, setError] = useState<string>('');

    const handleFetchSuccess = (data: Booking[]) => {
        setBookings(data);
    };

    const handleFetchError = (error: string) => {
        setError(error);
    };

    return (
        <div>
            <GetBookingsButton onFetch={handleFetchSuccess} onError={handleFetchError} />

            {error && <p className="error">{error}</p>}

            <ul role="list" className="mt-8 space-y-8 text-base-content">
            {bookings.length > 0 ? (
                    bookings.map((booking) => (
                        <li key={booking.id} className="flex gap-x-3">
                            <h3 className="font-semibold text-primary">{booking.title}</h3>
                            <p>{booking.description}</p>
                            <p className="font-semibold text-secondary">Status: {booking.completed ? 'Completed' : 'Pending'}</p>
                        </li>
                    ))
                ) : (
                    <p>No bookings available.</p>
                )}
            </ul>
        </div>
    );
};

export default BookingList;
