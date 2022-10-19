import { toast } from 'react-toastify';

export const showNotification = (type, customMessage, response) => {
    let description = '';
    if (type === 'error') {
        if (!response) {
            description = customMessage || "Unknown Error";
        } else if (response.response) {
            description = response?.data?.message || customMessage || "Unknown Error";
        } else if (response.request) {
            description = "Network Error";
        } else {
            description = customMessage || "Unknown Error";
        }
    } else {
        description = response?.data?.message || customMessage || "Unknown Error";
    }
    switch (type) {
        case "error":
            toast.error(description);
            break;
        case "success":
            toast.success(description);
            break;
        case "info":
            toast.info(description);
            break;
        case "warning":
            toast.warn(description);
            break;
        default:
            toast(description);
            break;
    }
}