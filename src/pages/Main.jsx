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

    const [totalVES, totalUSD] = useSelector((state) => {
        const { listItems, config } = state
        const { usdValue } = config
        const sumVES = listItems.reduce((acc,ele) => ele.currency === 'VES' ? acc + ele.price : acc, 0)
        const sumUSD = listItems.reduce((acc,ele) => ele.currency === 'USD' ? acc + ele.price : acc, 0)
        const totalVES = sumVES + (sumUSD * usdValue)
        const totalUSD = sumUSD + (sumVES /  usdValue)
        return [totalVES.toFixed(2), totalUSD.toFixed(2)]
    })

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
                <List sx={{maxHeight : '10rem',overflow: 'auto',marginBottom: 1}}>
                    {
                        listItems.map((ele,index) => (
                            <Item key={index} dataItem={ele}/>
                            ))
                        }
                </List>
                <Divider sx={{marginBottom:2}}/>
                <Typography variant="h6" component="span" fontWeight='bold'>
                    Total : { ' ' }
                </Typography>
                <Typography variant="h6" component="span" color='#000'>
                    { totalVES }VES - { totalUSD }USD
                </Typography>
            </Box>
            <ModalItem/>
            <ModalEditItem/>
            <ModalConfig/>
        </div>
    )
}
export default Main