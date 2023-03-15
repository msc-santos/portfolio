import { Alert, Dialog  } from '@mui/material';
import useMessage from 'src/hooks/useMessage';
import useModal from 'src/hooks/useModal';

const Modal = () => {
  const { message } = useMessage()
  const { open, handleClose } = useModal()

  return <Dialog
  open={open}
  onClose={() => handleClose()}
  aria-labelledby="alert-dialog-title"
  aria-describedby="alert-dialog-description"
>
  <Alert severity="success">{message}</Alert> 
</Dialog>
}

export default Modal;