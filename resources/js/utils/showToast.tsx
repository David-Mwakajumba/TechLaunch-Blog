import { toast, ToastPosition } from "react-hot-toast";

/**
 * Shows a toast notification
 * @param message The message to show
 * @param type The type of toast. Can be 'success', 'error', or undefined
 * @param position The position of the toast. Can be any valid react-hot-toast position
 */
export const showToast = (
    message: string,
    type: "success" | "error" | undefined = "success",
    position: ToastPosition = "bottom-right"
) => {
    const options = {
        position,
    };

    if (type === "success") {
        toast.success(message, options);
    } else if (type === "error") {
        toast.error(message, options);
    } else {
        toast(message, options);
    }
};
