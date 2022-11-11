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
import {useGetReadersQuery, useAddReaderMutation} from '../redux';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import {TextField} from '@mui/material';
import {IReader} from '../interfaces/IReader';
import Typography from '@mui/material/Typography';

export const ReadersPage = () => {
    const defaultReaderValue: Partial<IReader> = {
        surname: '',
        name: '',
        patronymic: '',
        phone: '',
        address: '',
    }

    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const [newReader, setNewReader] = useState<Partial<IReader>>(defaultReaderValue);
    const {data = [], isLoading} = useGetReadersQuery();
    const [addReader] = useAddReaderMutation();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewReader({...newReader, [event.target.id]: event.target.value})
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
                Добавить читателя
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
                        id="surname"
                        label="Фамилия"
                        variant="outlined"
                        value={newReader.surname}
                        onChange={handleChange}
                    />
                    <TextField
                        id="name"
                        label="Имя"
                        variant="outlined"
                        value={newReader.name}
                        onChange={handleChange}
                    />
                    <TextField
                        id="patronymic"
                        label="Отчество"
                        variant="outlined"
                        value={newReader.patronymic}
                        onChange={handleChange}
                    />
                    <TextField
                        id="address"
                        label="Адрес"
                        variant="outlined"
                        value={newReader.address}
                        onChange={handleChange}
                    />
                    <TextField
                        id="phone"
                        label="Телефон"
                        variant="outlined"
                        value={newReader.phone}
                        onChange={handleChange}
                    />
                    <Button
                        variant="contained"
                        style={{marginBottom: 20}}
                        onClick={async () => {
                            await addReader(newReader).unwrap();
                            setNewReader(defaultReaderValue);
                            setOpenDrawer(false);
                        }}
                    >
                        Добавить читателя
                    </Button>
                </Box>
            </Drawer>
            {
                data.length ?
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ФИО</TableCell>
                            <TableCell align="right">ID</TableCell>
                            <TableCell align="right">Адрес</TableCell>
                            <TableCell align="right">Телефон</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((reader) => (
                            <TableRow
                                key={reader.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {`${reader.surname} ${reader.name} ${ reader.patronymic}`}
                                </TableCell>
                                <TableCell align="right">{reader.id}</TableCell>
                                <TableCell align="right">{reader.address}</TableCell>
                                <TableCell align="right">{reader.phone}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            : <Typography>Читатели пока не добавлены</Typography>
            }
        </>
    )
}
