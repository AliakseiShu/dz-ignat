import axios from "axios";

type RequestApiType = {
    errorText: string
    info: string
    yourBody: {
        success: boolean
    }
    yourQuery: {}
}

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
})


export const RequestApi = {
    createRequest(success: boolean) {
        return instance.post<RequestApiType>('auth/test', {success})
    }
}