import { useState } from "react";
import { Divider ,Box, Stack, Typography, Button, List } from "@mui/material"
import { blueGrey } from '@mui/material/colors';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ModalNewItem from "../components/ModalNewItem";
import { useSelector } from "react-redux";
import Item from "../components/Item";

const Main = () => {

    const [ openModalNewItem, setOpenModalNewItem ] = useState(false)

    const listItems = useSelector((state) => state)

    const mainBoxStyle = {
        width : '100%',
        maxWidth:'400px',
        border : 1,
        borderColor: blueGrey[700],
        borderRadius: 1,
        padding : 3,
    }

    const buttonsStyle = {
        width:'10em',
    }

    return(
        <div className="wrapper">
            <Box sx={mainBoxStyle}>
                <Typography variant="h4" component="h4" fontWeight='bold' marginBottom={2}>
                    <Stack direction='row' spacing={2} justifyContent='center' alignItems='center'>
                        <span> My Shopping List </span>
                        <ShoppingCartIcon sx={{ fontSize: 35 }} />
                    </Stack>
                </Typography>
                <Divider sx={{marginBottom:3}}/>
                <Stack direction='row' spacing={2} justifyContent='center' alignItems='center' marginBottom={3}>
                    <Button variant="contained" startIcon={<SettingsIcon />} sx={buttonsStyle}>
                        Config
                    </Button>
                    <Button variant="contained" startIcon={<AddCircleIcon />} sx={buttonsStyle} onClick={() => setOpenModalNewItem(true)}>
                        New Item
                    </Button>
                </Stack>
                <List sx={{maxHeight : '10rem',overflow: 'auto',}}>
                    {
                        listItems.map((ele,index) => (
                            <Item key={index} dataItem={ele}/>
                        ))
                    }
                </List>
            </Box>
            <ModalNewItem open={openModalNewItem} handleClose={() => setOpenModalNewItem(false)}/>
        </div>
    )
}
export default Main