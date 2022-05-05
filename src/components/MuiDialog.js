import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { themeContext } from '../context/theme/themeContext';
import { useContext } from 'react'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({children}) {

  // eslint-disable-next-line
  const [fullWidth, setFullWidth] = React.useState(true); // atributes to set width
  // eslint-disable-next-line
  const [maxWidth, setMaxWidth] = React.useState('sm');   // to the dialog  
  const themesContext = useContext(themeContext);
  const { darkmode } = themesContext;


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='prueba'>
      {/* the following is the element that will trigger the dialog, in this case its an <a>TAG</a> */}
      <a 
        href="#testimonials" 
        className={`md:flex text-center align-center mr-5 ${(darkmode === false) ? 'text-black hover:opacity-50' : 'text-white hover:opacity-50' }`} 
        onClick={handleClickOpen}>
          Resume
      </a>
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
      
        <DialogContent>
            {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}