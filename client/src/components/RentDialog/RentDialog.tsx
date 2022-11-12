import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import {IRent} from '../../interfaces/IRent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useGetBooksQuery, useGetReadersQuery, useAddRentMutation} from '../../redux';
import BasicSelect from '../Select/Select';

interface RentDialogProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    rent: Partial<IRent>,
}

export const RentDialog = (props: RentDialogProps) => {
    const {open, setOpen, rent} = props;
    const [currentRent, setCurrentRent] = useState(rent);

    const books = useGetBooksQuery().data;
    const readers = useGetReadersQuery().data;
    const [addRent] = useAddRentMutation();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentRent({...currentRent, [event.target.id]: event.target.value})
    }

    const createRentHandle = () => {
        addRent(currentRent);
        handleClose();
    }
    console.log(currentRent)
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Создать аренду
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{!!rent ? 'Создать аренду' : 'Редактировать аренду'}</DialogTitle>
                <DialogContent>
                    <BasicSelect
                        selectId="bookId"
                        label="Книги"
                        items={books}
                        onChange={handleChange}
                    />
                    <BasicSelect
                        selectId="readerId"
                        label="Читатель"
                        items={readers}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="returnDate"
                        label="Дата возврата"
                        type="date"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="surcharge"
                        label="Штраф"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="cost"
                        label="Стоимость"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Отмена</Button>
                    <Button onClick={createRentHandle}>Добавить</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
