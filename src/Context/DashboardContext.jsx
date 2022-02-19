import {createContext, useState} from 'react';


export const DashboardContext = createContext();
export const DashboardProvider = ({children }) => {
    const [sidebar, setSidebar] = useState(1)
    const [dates, setDates] = useState(1)
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }
    
    return(
        <DashboardContext.Provider
        value={{sidebar,
            setSidebar,
            dates,
            modal,
            toggleModal, 
            setDates}}
            >
            {children}
        </DashboardContext.Provider>
    )
}