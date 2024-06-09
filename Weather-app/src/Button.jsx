import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './Btn.css'

export default function BasicButtons() {
    return (
        <Stack className='btn' spacing={2} direction="row">
        <Button type='submit' variant="contained" endIcon={<SendIcon />}>Search</Button>
    </Stack>
    );
}