
export const POST = "POST";
export const GET = "GET";
export const PUT = "PUT";
export const DELETE = "DELETE";


const auth = "auth";
const leader = "leader";

export const api = {
    // BASE_URL:'http://localhost:2727',
    BASE_URL:'http://134.122.126.126/api',
    login:`${auth}/login`,
    signUp:`${auth}/register`,
    changeWalletAddress:`${auth}/changeWalletAddress`,
    getUser:`${auth}/getUser`,
    getAllUser:`${auth}/getAllUser`,
    withdrawHistory:`${leader}/withdrawHistory`,
    deleteNotification: (id) => `notifications/${id}`,

}