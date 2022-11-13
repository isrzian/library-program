import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {IReader} from '../../interfaces/IReader';
import {IBook} from '../../interfaces/IBook';

interface BasicSelectProps {
    selectId: string,
    label: string,
    items: IReader[] | IBook[] | undefined,
    onChange: (event: any) => void,
    value: any,
}

export default function BasicSelect(props: BasicSelectProps) {
    const {label, items, selectId, onChange, value} = props;

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id={selectId}
                    name={selectId}
                    label={label}
                    value={value}
                    onChange={event => onChange(event)}
                    variant="standard"
                >
                    {
                        items?.map(item => <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>)
                    }
                </Select>
            </FormControl>
        </Box>
    );
}
