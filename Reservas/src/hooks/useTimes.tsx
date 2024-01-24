import { useContext } from "react";
import { TimeSelectorContext } from "../context/TimeSelectorContext";



export const useTime = () => {
    const context = useContext(TimeSelectorContext);

    if (!context) {
        throw new Error('useTime debe ser utilizado dentro de TimeProvider');
    }

    return context;
};