import { ReactNode, createContext, useState } from "react";


interface TimeContextProps {
    selectedTime: Date | null;
    setSelectedTime: React.Dispatch<React.SetStateAction<Date | null>>;
}

export const TimeSelectorContext = createContext<TimeContextProps | undefined>(undefined);

interface TimeProviderProps {
    children: ReactNode;
}

const TimeSelectorProvider: React.FC<TimeProviderProps> = ({ children }) => {

    const [selectedTime, setSelectedTime] = useState<Date | null>(null);

    return (
        <TimeSelectorContext.Provider value={{ selectedTime, setSelectedTime }}>
            {children}
        </TimeSelectorContext.Provider>
    );
}

export default TimeSelectorProvider;


