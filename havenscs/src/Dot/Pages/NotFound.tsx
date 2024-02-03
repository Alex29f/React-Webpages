import {Box, Typography, useTheme} from "@mui/material";
import Button from "@mui/material/Button";

const NotFound = () => {
    const theme = useTheme()
    return (
     <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} textAlign={'center'} mt={'76.771px'} height={'100vh'}>
        <Typography mb={2} variant={'h1'} color={theme.palette.warning.main}>Ooops...</Typography>
        <Typography mb={2} variant={'h2'} color={theme.palette.warning.main}>Looks like this page does not exist!</Typography>
         <Button sx={{mb:2}} href={'/'} variant={'contained'}>Home</Button>
     </Box>
    )
}

export default NotFound