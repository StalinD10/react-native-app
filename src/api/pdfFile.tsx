import axios from "axios";

const pdfFile:any = axios.create({
    baseURL: 'https://moviles-back.onrender.com/api',
})
export default pdfFile;