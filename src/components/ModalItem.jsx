import { Modal, Box, Typography, TextField, FormControl, InputLabel, Select, FormHelperText, MenuItem, Button } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

const ModalItem = ({ open, handleClose }) => {
    const dispatch = useDispatch()

    const validationSchema = (values) => {
        const errors = {}

        for (const field in values){
            const isEmpty = values[field].toString().trim() === ''
            if(isEmpty) errors[field] = '* Required'
        }
        return errors
    }

    const formik = useFormik({
        initialValues : {
            name: '',
            currency: '',
            price: '',
        },
        validate: validationSchema,
        onSubmit: (values, { resetForm }) => {
            dispatch({type:'list/add',payload:values})
            resetForm()
        },
    })

    const boxStyle = {
        width : '100%',
        maxWidth : '450px',
        bgcolor:'#fff',
        borderRadius: 1,
        paddingY: 2,
        paddingX: 3,
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    }

    const fieldStyle = {
        height : '5rem',
        width: '100%'
    }

    const fieldProps = (label, fieldName) => {
        const result = {
            ...formik.getFieldProps(fieldName),
            variant :"standard",
            label : label,
            helperText : formik.errors[fieldName],
            error : formik.errors[fieldName] ? true : false,
            sx: fieldStyle
        }
        return result
    }

    return(
        <Modal open={open} onClose={handleClose} sx={{padding:2,display:'grid',placeItems:'center'}}>
            <Box component='form' sx={boxStyle} onSubmit={formik.handleSubmit}>
                <Typography variant="h4" component="h4" fontWeight='bold' align="center" marginBottom={3}>
                    New Item
                </Typography>
                <TextField {...fieldProps('Name','name')}/>
                <FormControl variant="standard" sx = {fieldStyle} error = { formik.errors['currency'] ? true : false}>
                    <InputLabel id="currency-label"> Currency </InputLabel>
                    <Select
                    labelId="currency-label"
                    defaultValue={formik.values.currency}
                    {...formik.getFieldProps('currency')}>
                        <MenuItem value={'USD'}> USD </MenuItem>
                        <MenuItem value={'VES'}> VES </MenuItem>
                    </Select>
                    <FormHelperText> { formik.errors.currency } </FormHelperText>
                </FormControl>
                <TextField type='number' {...fieldProps('Price','price')}/>
                <Button
                type="submit"
                variant="contained"
                startIcon={<SaveIcon/>}
                sx={{width:'50%'}}>
                    Save Item
                </Button>
            </Box>
        </Modal>
    )
}

export default ModalItem