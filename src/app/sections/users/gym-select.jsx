import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [name, setName] = React.useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant='filled' fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{color:'#fafafa'}}>Nombre completo del usuario:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={name}
          label="Name"
          onChange={handleChange}
          sx={{border:'2px solid white'}}
        >
        <MenuItem value={'c1'}>Carlos</MenuItem>
          <MenuItem value={'c2'}>Carlos</MenuItem>
          <MenuItem value={'c3'}>Carlos</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}