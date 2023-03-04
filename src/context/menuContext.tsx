import { useState, createContext, useMemo } from "react";
import { MenuContextProps } from 'src/interfaces/Menu'


const MenuContext = createContext<MenuContextProps>({} as MenuContextProps);

export function MenuProvider({ children }: { children: any }) {
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const contextValue = useMemo(() => {
        return {
            open,
            setOpen,
            handleOpen,
            handleClose
        };
      }, [
        open,
        setOpen,
        handleOpen,
        handleClose
      ]);

    return (
        <MenuContext.Provider value={contextValue}>
            {children}    
        </MenuContext.Provider>
    )
}

export default MenuContext