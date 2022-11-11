import React, {useState, ChangeEvent} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useGetReadersQuery, useAddReaderMutation, useGetBooksQuery, useAddBookMutation} from '../redux';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import {TextField} from '@mui/material';
import {IReader} from '../interfaces/IReader';
import Typography from '@mui/material/Typography';
import {IBook} from '../interfaces/IBook';

export const BooksPage = () => {
    const defaultBookValue: Partial<IBook> = {
        author: '',
        name: '',
        genre: '',
        collateralValue: 0,
        rentalPrice: 0,
    }

    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const [newBook, setNewBook] = useState<Partial<IBook>>(defaultBookValue);
    const {data = [], isLoading} = useGetBooksQuery();
    const [addBook] = useAddBookMutation();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewBook({...newBook, [event.target.id]: event.target.value})
    }

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        )
    }

    return (
        <>
            <Button
                variant="contained"
                style={{marginBottom: 20}}
                onClick={() => setOpenDrawer(true)}
            >
                Добавить книгу
            </Button>
            <Drawer
                anchor={'right'}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <Box
                    sx={{width: 300}}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignContent: 'space-around',
                        columnGap: 5,
                    }}
                >
                    <TextField
                        id="author"
                        label="Автор"
                        variant="outlined"
                        value={newBook.author}
                        onChange={handleChange}
                    />
                    <TextField
                        id="name"
                        label="Название"
                        variant="outlined"
                        value={newBook.name}
                        onChange={handleChange}
                    />
                    <TextField
                        id="genre"
                        label="Жанр"
                        variant="outlined"
                        value={newBook.genre}
                        onChange={handleChange}
                    />
                    <TextField
                        id="collateralValue"
                        label="Залоговая стоимость"
                        variant="outlined"
                        type="number"
                        value={newBook.collateralValue}
                        onChange={handleChange}
                    />
                    <TextField
                        id="rentalPrice"
                        label="Стоимость проката"
                        variant="outlined"
                        type="number"
                        value={newBook.rentalPrice}
                        onChange={handleChange}
                    />
                    <Button
                        variant="contained"
                        style={{marginBottom: 20}}
                        onClick={async () => {
                            await addBook(newBook).unwrap();
                            setNewBook(defaultBookValue);
                            setOpenDrawer(false);
                        }}
                    >
                        Добавить книгу
                    </Button>
                </Box>
            </Drawer>
            {
                data.length ?
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Название</TableCell>
                                    <TableCell align="right">ID</TableCell>
                                    <TableCell align="right">Автор</TableCell>
                                    <TableCell align="right">Жанр</TableCell>
                                    <TableCell align="right">Залоговая стоимость</TableCell>
                                    <TableCell align="right">Стоимость проката</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data?.map((book) => (
                                    <TableRow
                                        key={book.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {book.name}
                                        </TableCell>
                                        <TableCell align="right">{book.id}</TableCell>
                                        <TableCell align="right">{book.author}</TableCell>
                                        <TableCell align="right">{book.genre}</TableCell>
                                        <TableCell align="right">{book.collateralValue}</TableCell>
                                        <TableCell align="right">{book.rentalPrice}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    : <Typography>Книги пока не добавлены</Typography>
            }
        </>
    )
}
