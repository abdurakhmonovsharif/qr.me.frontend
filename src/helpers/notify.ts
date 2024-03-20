import { toast } from "react-toastify"

export const notify = (type: string, message: string) => {
    if (type === "error") {
        toast.error(message)
    } else if (type === "success") {
        toast.success(message)
    }
}