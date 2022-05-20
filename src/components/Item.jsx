import { Stack, ListItem, ListItemText, IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";

const Item = ({ dataItem }) => {
    const { name, id } = dataItem
    const dispatch = useDispatch()

    const deleteItem = () => {
        dispatch({type:'list/delete', payload : id})
    }

    return (
        <ListItem
        secondaryAction={
            <Stack direction='row' spacing={1}>
                <IconButton edge="end" aria-label="delete">
                    <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={deleteItem}>
                    <DeleteIcon />
                </IconButton>
            </Stack>
        }>
            <ListItemText primary={name} />
        </ListItem>
    )
}

export default Item