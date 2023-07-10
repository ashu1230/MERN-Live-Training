import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SpatialAudioOffIcon from '@mui/icons-material/SpatialAudioOff';

import DescriptionIcon from '@mui/icons-material/Description';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useRef } from 'react';
export const Add = (props)=>{
    const id = useRef();
    const title = useRef();
    const descr = useRef();
    const addNote = ()=>{
        console.log('Add Note is Called...');
        const idValue = id.current.value;
        const titleValue = title.current.value;
        const descValue = descr.current.value;
        console.log('Id ',idValue);
        console.log('Title ', titleValue);
        console.log('Descr ', descValue);

        const noteObject = {'id': idValue, 'Title': titleValue, 'Descr': descValue}
        props.fn(noteObject);
    }

    return (<>
        
       
        <Box sx={{
        margin:5, flexDirection:'column', display:'flex'
       
      }}>
         <TextField
        id="note-id"
        inputRef = {id}
        label="Id"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DescriptionIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <TextField
        id="note-title"
        label="Title"
        inputRef={title}
        
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SpatialAudioOffIcon/>
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
       <TextField
       inputRef = {descr}
        id="note-desc"
        label="Description"
        multiline
        maxRows={4}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SpatialAudioOffIcon/>
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <input type='date'/>
      <input type='color'/>
      <Button onClick={addNote} variant="contained" color='warning'>Add Note</Button>
       {/* <DatePicker value={value} 
       onChange={(selectedDate) => setValue(selectedDate)} /> */}
      </Box>
      
    </>)
}