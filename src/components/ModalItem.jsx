import { Modal, Box, Typography, TextField, FormControl, InputLabel, Select, FormHelperText, MenuItem, Button } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

const ModalItem = () => {

    const dispatch = useDispatch()

    const isOpen = useSelector((state) => state.modalItems.isOpen)

    const handleClose = () => dispatch({type:'modal/isOpen', payload: false})

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

    const fieldProps = (label, fieldName) => {
        const result = {
            ...formik.getFieldProps(fieldName),
            variant :"standard",
            label : label,
            helperText : formik.errors[fieldName],
            error : formik.errors[fieldName] ? true : false,
            className: 'field-container'
        }
        return result
    }

    return(
        <Modal open={isOpen} onClose={handleClose} sx={{padding:2,display:'grid',placeItems:'center'}}>
            <Box component='form' className="box-modal" onSubmit={formik.handleSubmit}>
                <Typography variant="h4" component="h4" fontWeight='bold' align="center" marginBottom={3}>
                    New Item
                </Typography>
                <TextField {...fieldProps('Name','name')}/>
                <FormControl variant="standard" className="field-container" error = { formik.errors['currency'] ? true : false}>
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