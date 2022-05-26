import { Modal, Box, Typography, TextField, InputAdornment, Stack, Button } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';
import { grey } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";

const ModalConfig = () => {

    const dispatch = useDispatch()

    const isOpen = useSelector(({ layout }) => layout.modalConfig.isOpen)

    const handleClose = () => dispatch({type:'modalConfig/isOpen', payload: false})

    return(
        <Modal open={isOpen} onClose={handleClose} sx={{padding:2,display:'grid',placeItems:'center'}}>
            <Box className="box-modal">
                <Typography variant="h4" component="h4" fontWeight='bold' align="center" marginBottom={3}>
                    Configs Setting
                </Typography>

                <Stack direction='row' spacing={2} justifyContent='center'>
                    <TextField
                    variant="standard"
                    defaultValue={'1'}
                    InputProps={{
                        readOnly : true,
                        endAdornment: (
                            <InputAdornment position="start">
                                USD
                            </InputAdornment>
                        ),
                    }}
                    sx={{marginBottom: 4, width: '4em'}}
                    />
                    <Typography variant="h6" component="span" fontWeight='bold' color={grey[600]}>
                        =
                    </Typography>
                    <TextField
                    variant="standard"hhg
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                USD
                            </InputAdornment>
                        ),
                    }}
                    sx={{marginBottom: 4, width: '6em'}}
                    />
                </Stack>
                <Button type="submit" variant="contained" sx={{width:'50%'}} startIcon={ <SaveIcon/> }>
                    Save Config
                </Button>
            </Box>
        </Modal>
    )
}

export default ModalConfig