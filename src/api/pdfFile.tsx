import axios from "axios";

const pdfFile: any = axios.create({
    baseURL: "http://localhost:9022/api"
})
export default pdfFile;