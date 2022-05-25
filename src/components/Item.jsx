import { Stack, ListItem, ListItemText, IconButton, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";

const Item = ({ dataItem }) => {
    const { id, name, currency, price } = dataItem

    const dispatch = useDispatch()

    const openEditModal = () => dispatch({type: 'modalEdit/editTo', payload : dataItem})

    const deleteItem = () => dispatch({type:'list/delete', payload : id})

    return (
        <ListItem
        secondaryAction={
            <Stack direction='row' spacing={1}>
                <IconButton edge="end" aria-label="delete" onClick={openEditModal}>
                    <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={deleteItem}>
                    <DeleteIcon />
                </IconButton>
            </Stack>
        }>
            <ListItemText  sx={{color: '#000'}}>
                <Typography variant="h6" component="span">
                    { name } - { price }
                </Typography>
                <Typography component="span">
                    { currency }
                </Typography>
            </ListItemText>
        </ListItem>
    )
}

export default Item