import { Modal, Box, TextField, FormControl, InputLabel, Select, FormHelperText, MenuItem, Button } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

const ModalEditItem = () => {

    const dispatch = useDispatch()

    const isOpen =  useSelector(({ layout }) => (layout.modalEdit.isOpen))

    const defaultValues = useSelector(({ layout }) => (layout.modalEdit.editTo))

    const handleClose = () => dispatch({type: 'modalEdit/isOpen', payload : false})

    const validationSchema = (values) => {
        const errors = {}
        for (const field in values){
            const isEmpty = values[field].toString().trim() === ''
            if(isEmpty) errors[field] = '* Required'
        }
        return errors
    }

    const formik = useFormik({
        enableReinitialize : true,
        initialValues : {
            currency: defaultValues.currency,
            price: defaultValues.price,
        },
        validate: validationSchema,
        onSubmit: (values, { resetForm }) => {
            const { currency : newCurrency, price : newPrice } = values
            const valuesToEdit = {
                ...defaultValues,
                currency : newCurrency,
                price : newPrice
            }
            dispatch({type: 'list/edit', payload : valuesToEdit})
            resetForm()
            handleClose()
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
                <FormControl
                variant="standard"
                className="field-container"
                error = { formik.errors['currency'] ? true : false}>
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
                startIcon={<EditIcon/>}
                sx={{width:'50%'}}>
                    EDIT ITEM
                </Button>
            </Box>
        </Modal>
    )
}
export default ModalEditItem