import { useState } from "react";
import useModal from "./useModal";

export default function useMessage() {
  const [message, setMessage] = useState<string>('')

  const { handleOpen } = useModal()

  const showMessage = () => {
    setMessage('Message send with success!')
    handleOpen()
  }

  return {
    message,
    showMessage
  }
}