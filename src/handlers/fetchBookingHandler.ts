import { Booking } from "@/types/Booking";

const api_url = "http://localhost:8080/getBookings/";

export async function fetchBookings(): Promise<Booking[]> {
    try {
        const response = await fetch(api_url, {
            method: 'GET',
            headers:{
                'Content-Type':'application/json',
            }
        });
        if (!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data  = await response.json()
        const body: Booking[] = data[0];
        return body;
    }
    catch (error) {
        console.error("Failed to fetch booking data", error)
        throw error
    }
}

