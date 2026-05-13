import api from './axios'

export const bookAppointment = async ({ date, name, email, whatsapp, note }) => {
    console.log(name, email, whatsapp, date)

    console.log('service point 1')
    if (!name || !email || !whatsapp || !date) {
        console.log(name, email, whatsapp, date)
        console.log('check failed at service')

        return {
            success: false,
            message: 'All Fields are required'
        }
    }

    console.log('service point 2')

    try {



        console.log("data: ", date, name, email, whatsapp, note)
        const response = await api.post('/api/appointment/book', { date, name, email, whatsapp, note })
        console.log('service point 3: ', response)

        return {
            success: true,
            response
        }
    } catch (err) {
        return {
            success: false,
            message: "some thing went wrong on service",
            error: err.message
        }

    }
}

export const getBookings = async () => {
    try {
        const response = await api.get('/api/appointment')
        return {
            success: true,
            response: response.data
        }

    } catch(err){
        return {
            success: false,
            message: 'something went wrong at our service'
        }
    }
}