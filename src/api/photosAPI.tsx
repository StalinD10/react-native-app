import axios from "axios";

const photosAPI:any = axios.create({

    baseURL: 'https://api.unsplash.com/photos/?client_id=',
    params: {
        client_id: '5y9RzuUNdsKMnmJ395vuopgB4bGJd6-C21G0I_F2K4w'
    }
})

export default photosAPI;