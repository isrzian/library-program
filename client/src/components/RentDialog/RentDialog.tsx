import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import {
    useGetBooksQuery,
    useGetReadersQuery,
    useAddRentMutation,
    usePassedRentMutation,
} from '../../redux';
import BasicSelect from '../Select/Select';
import {defaultRent} from '../../pages';
import {IRent} from '../../interfaces/IRent';

interface RentDialogProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    currentRent: Partial<IRent>,
    setCurrentRent: (value: (((prevState: Partial<IRent>) => Partial<IRent>) | Partial<IRent>)) => void
}

export const RentDialog = (props: RentDialogProps) => {
    const {open, setOpen, currentRent, setCurrentRent} = props;

    const books = useGetBooksQuery().data;
    const readers = useGetReadersQuery().data;
    const [addRent] = useAddRentMutation();
    const [passedRent] = usePassedRentMutation();

    const handleClickOpen = () => {
        setCurrentRent(defaultRent);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentRent({...currentRent, [event.target.name]: event.target.value})
    }

    const createRentHandle = () => {
        addRent(currentRent);
        handleClose();
    }

    const passedRentHandle = (rentId?: number) => {
        if (rentId) {
            passedRent(rentId);
        }
        handleClose();
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Создать аренду
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{!!currentRent.issueDate ? 'Создать аренду' : 'Редактировать аренду'}</DialogTitle>
                <DialogContent>
                    <BasicSelect
                        selectId="bookId"
                        label="Книги"
                        items={books}
                        onChange={handleChange}
                        value={currentRent.bookId}
                    />
                    <BasicSelect
                        selectId="readerId"
                        label="Читатель"
                        items={readers}
                        onChange={handleChange}
                        value={currentRent.readerId}
                    />
                    <TextField
                        margin="dense"
                        id="returnDate"
                        label="Дата возврата"
                        type="date"
                        name="returnDate"
                        fullWidth
                        variant="standard"
                        value={currentRent.returnDate}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="surcharge"
                        label="Штраф"
                        type="number"
                        fullWidth
                        variant="standard"
                        name="surcharge"
                        value={currentRent.surcharge}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="cost"
                        label="Стоимость"
                        type="number"
                        fullWidth
                        variant="standard"
                        name="cost"
                        value={currentRent.cost}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="discount"
                        label="Скидка"
                        type="number"
                        fullWidth
                        variant="standard"
                        name="discount"
                        value={currentRent.discount}
                        onChange={handleChange}
                    />
                    <br/>
                    <Button
                        onClick={() => passedRentHandle(currentRent.id)}
                        disabled={!currentRent.issueDate}
                    >
                        {currentRent.isPassed ? 'Пометить несданным' : 'Пометить сданным'}
                    </Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={createRentHandle}>Добавить</Button>
                    <Button onClick={handleClose}>Отмена</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
