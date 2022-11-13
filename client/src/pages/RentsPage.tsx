import React, {useState} from 'react';
import {useGetRentsQuery} from '../redux';
import {RentDialog} from '../components';
import {IRent} from '../interfaces/IRent';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export const defaultRent: IRent = {
    returnDate: '',
    discount: 0,
    surcharge: 0,
    cost: 0,
    bookId: 0,
    readerId: 0,
}

export const RentsPage = () => {
    const [openRentDialog, setOpenRentDialog] = useState<boolean>(false);
    const [currentRent, setCurrentRent] = useState<Partial<IRent>>(defaultRent);
    const passedRents = useGetRentsQuery({isPassed: true}).data;
    const nonPassedRents = useGetRentsQuery({isPassed: false}).data;

    return (
        <>
            <RentDialog
                open={openRentDialog}
                setOpen={setOpenRentDialog}
                currentRent={currentRent}
                setCurrentRent={setCurrentRent}
            />
            <br/>
            <Typography style={{fontSize: 30}}>Должники</Typography>
            <br/>
            {
                nonPassedRents?.length ?
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Фамилия читателя</TableCell>
                                    <TableCell align="right">Идентификатор</TableCell>
                                    <TableCell align="right">Название книги</TableCell>
                                    <TableCell align="right">Дата выдачи</TableCell>
                                    <TableCell align="right">Дата возврата</TableCell>
                                    <TableCell align="right">Цена</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {nonPassedRents?.map((rent) => (
                                    <TableRow
                                        key={rent.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        onClick={() => {
                                            setCurrentRent(rent);
                                            setOpenRentDialog(true);
                                        }}
                                        style={{cursor: 'pointer'}}
                                    >
                                        <TableCell component="th" scope="row">
                                            {rent?.reader?.surname}
                                        </TableCell>
                                        <TableCell align="right">{rent?.id}</TableCell>
                                        <TableCell align="right">{rent?.book?.name}</TableCell>
                                        <TableCell align="right">{rent.issueDate}</TableCell>
                                        <TableCell align="right">{rent.returnDate}</TableCell>
                                        <TableCell align="right">{rent.cost}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    : <Typography>Должников книг пока нет</Typography>
            }
            <br/>
            <Typography style={{fontSize: 30}}>Сдано</Typography>
            {
                passedRents?.length ?
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Фамилия читателя</TableCell>
                                    <TableCell align="right">Идентификатор</TableCell>
                                    <TableCell align="right">Название книги</TableCell>
                                    <TableCell align="right">Дата выдачи</TableCell>
                                    <TableCell align="right">Дата возврата</TableCell>
                                    <TableCell align="right">Цена</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {passedRents?.map((rent) => (
                                    <TableRow
                                        key={rent.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        onClick={() => {
                                            setCurrentRent(rent);
                                            setOpenRentDialog(true);
                                        }}
                                        style={{cursor: 'pointer'}}
                                    >
                                        <TableCell component="th" scope="row">
                                            {rent?.reader?.surname}
                                        </TableCell>
                                        <TableCell align="right">{rent?.id}</TableCell>
                                        <TableCell align="right">{rent?.book?.name}</TableCell>
                                        <TableCell align="right">{rent.issueDate}</TableCell>
                                        <TableCell align="right">{rent.returnDate}</TableCell>
                                        <TableCell align="right">{rent.cost}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    : <Typography>Сданных книг пока нет</Typography>
            }
        </>
    );
}
