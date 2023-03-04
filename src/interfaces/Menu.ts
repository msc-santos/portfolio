export interface MenuContextProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    handleOpen: Function
    handleClose: Function
}