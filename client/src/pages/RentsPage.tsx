import React, {ChangeEvent, useState} from 'react';
import {useAddRentMutation, useGetRentsQuery} from '../redux';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import {TextField} from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import {IRent} from '../interfaces/IRent';

export const RentsPage = () => {
    return (
        <div>

        </div>
    )
    // const defaultRentValue: Partial<IRent> = {
    //     returnDate: '',
    //     discount: 0,
    //     cost: 0,
    //     surcharge: 0,
    //     bookId: 0,
    //     readerId: 0,
    // }
    //
    // const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    // const [newRent, setNewRent] = useState<Partial<IRent>>(defaultRentValue);
    // const {data = [], isLoading} = useGetRentsQuery();
    // const [addReader] = useAddRentMutation();
    //
    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     setNewRent({...newRent, [event.target.id]: event.target.value})
    // }
    //
    // if (isLoading) {
    //     return (
    //         <Box sx={{ display: 'flex' }}>
    //             <CircularProgress />
    //         </Box>
    //     )
    // }
    //
    // return (
    //     <>
    //         <Button
    //             variant="contained"
    //             style={{marginBottom: 20}}
    //             onClick={() => setOpenDrawer(true)}
    //         >
    //             Новая аренда
    //         </Button>
    //         <Drawer
    //             anchor={'right'}
    //             open={openDrawer}
    //             onClose={() => setOpenDrawer(false)}
    //         >
    //             <Box
    //                 sx={{width: 300}}
    //                 style={{
    //                     display: 'flex',
    //                     flexDirection: 'column',
    //                     flexWrap: 'wrap',
    //                     alignContent: 'space-around',
    //                     columnGap: 5,
    //                 }}
    //             >
    //                 <TextField
    //                     id="returnDate"
    //                     label="Дата возврата"
    //                     variant="outlined"
    //                     value={newRent.returnDate}
    //                     onChange={handleChange}
    //                 />
    //                 <TextField
    //                     id="discount"
    //                     label="Скидка"
    //                     variant="outlined"
    //                     value={newRent.discount}
    //                     onChange={handleChange}
    //                 />
    //                 <TextField
    //                     id="cost"
    //                     label="Отчество"
    //                     variant="outlined"
    //                     value={newRent.cost}
    //                     onChange={handleChange}
    //                 />
    //                 <TextField
    //                     id="surcharge"
    //                     label="Штраф"
    //                     variant="outlined"
    //                     value={newRent.surcharge}
    //                     onChange={handleChange}
    //                 />
    //                 <Button
    //                     variant="contained"
    //                     style={{marginBottom: 20}}
    //                     onClick={async () => {
    //                         await addReader(newRent).unwrap();
    //                         setNewRent(defaultRentValue);
    //                         setOpenDrawer(false);
    //                     }}
    //                 >
    //                     Добавить читателя
    //                 </Button>
    //             </Box>
    //         </Drawer>
    //         {
    //             data.length ?
    //                 <TableContainer component={Paper}>
    //                     <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //                         <TableHead>
    //                             <TableRow>
    //                                 <TableCell>ФИО</TableCell>
    //                                 <TableCell align="right">ID</TableCell>
    //                                 <TableCell align="right">Адрес</TableCell>
    //                                 <TableCell align="right">Телефон</TableCell>
    //                             </TableRow>
    //                         </TableHead>
    //                         <TableBody>
    //                             {data?.map((reader) => (
    //                                 <TableRow
    //                                     key={reader.id}
    //                                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //                                 >
    //                                     <TableCell component="th" scope="row">
    //                                         {`${reader.surname} ${reader.name} ${ reader.patronymic}`}
    //                                     </TableCell>
    //                                     <TableCell align="right">{reader.id}</TableCell>
    //                                     <TableCell align="right">{reader.address}</TableCell>
    //                                     <TableCell align="right">{reader.phone}</TableCell>
    //                                 </TableRow>
    //                             ))}
    //                         </TableBody>
    //                     </Table>
    //                 </TableContainer>
    //                 : <Typography>Читатели пока не добавлены</Typography>
    //         }
    //     </>
    // )
}
