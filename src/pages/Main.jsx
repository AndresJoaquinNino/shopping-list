import { Divider ,Box, Stack, Typography, Button, List } from "@mui/material"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ModalItem from "../components/ModalItem";
import ModalEditItem from "../components/ModalEditItem";
import ModalConfig from "../components/ModalConfig";
import Item from "../components/Item";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {

    const dispatch = useDispatch()

    const listItems = useSelector((state) => state.listItems)

    const buttonsStyle = {
        width:'10em',
    }

    return(
        <div className="wrapper">
            <Box className="box-container">
                <Typography variant="h4" component="h4" fontWeight='bold' marginBottom={2}>
                    <Stack direction='row' spacing={2} justifyContent='center' alignItems='center'>
                        <span> My Shopping List </span>
                        <ShoppingCartIcon sx={{ fontSize: 35 }} />
                    </Stack>
                </Typography>
                <Divider sx={{marginBottom:3}}/>
                <Stack direction='row' spacing={2} justifyContent='center' alignItems='center' marginBottom={3}>
                    <Button variant="contained" startIcon={<SettingsIcon />} sx={buttonsStyle}
                    onClick={() => dispatch({type:'modalConfig/isOpen', payload: true})}>
                        Config
                    </Button>
                    <Button variant="contained" startIcon={<AddCircleIcon />} sx={buttonsStyle}
                    onClick={() => dispatch({type:'modalItem/isOpen', payload: true})}>
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
            <ModalItem/>
            <ModalEditItem/>
            <ModalConfig/>
        </div>
    )
}
export default Main