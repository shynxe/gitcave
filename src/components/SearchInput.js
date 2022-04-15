import * as React from 'react';
import {styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


const Input = styled(InputBase)(({ theme }) => ({
  "&": {
    width: "100%"
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    margin: '10px',
    width: '100%',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(166, 218, 255, 1)',
    },
  },
}));

export default function SearchInput({placeholder, onChange}) {

  return (
        <Input id="demo-customized-textbox" placeholder={placeholder} onChange={onChange} />
  );
}


