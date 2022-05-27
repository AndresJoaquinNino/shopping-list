import { Divider ,Box, Stack, Typography, Button, List, TextField, InputAdornment } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ModalItem from "../components/ModalItem";
import ModalEditItem from "../components/ModalEditItem";
import ModalConfig from "../components/ModalConfig";
import Item from "../components/Item";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Main = () => {

    const [searchValue, setSearchValue] = useState('')
    const handleChange = ({ target }) => setSearchValue(target.value)

    const dispatch = useDispatch()

    const listItems = useSelector(({ listItems }) => {
        const result = listItems.filter((ele) => {
            const searchedElement = ele.name.substring(0,searchValue.length).toLowerCase()
            return searchValue === searchedElement
        })
        return result
    })

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
                <TextField
                    variant="standard"
                    placeholder="Search"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                    }}
                    value={searchValue}
                    onChange={handleChange}
                    sx={{marginBottom:3, width: '100%'}}/>

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