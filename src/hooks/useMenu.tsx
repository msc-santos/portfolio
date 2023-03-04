import { useContext } from "react";
import MenuContext from "src/context/menuContext";

const useMenu = () => useContext(MenuContext)

export default useMenu