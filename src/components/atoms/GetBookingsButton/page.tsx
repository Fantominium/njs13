// components/FetchBookingsButton.tsx

import React, { useState } from 'react';
import { fetchBookings } from '../../../handlers/fetchBookingHandler';
import { Booking } from '../../../types/Booking';
import { log } from 'console';

interface GetBookingsButtonProps {
    onFetch: (data: Booking[]) => void;
    onError: (error: string) => void;
}

const GetBookingsButton: React.FC<GetBookingsButtonProps> = ({ onFetch, onError }) => {
    const [loading, setLoading] = useState<boolean>(false);

    const handleFetchBookings = async () => {
        setLoading(true);
        onError(''); 

        try {
            const data = await fetchBookings();
            onFetch(data);
        } catch (error) {
            console.log(error);
            
            onError('Failed to fetch bookings.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <button onClick={handleFetchBookings} disabled={loading} className='btn btn-ghost normal-case text-xl'>
            {loading ? 'Loading...' : 'Fetch Bookings'}
        </button>
    );
};

export default GetBookingsButton;
