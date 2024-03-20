import { styled } from '@mui/material/styles';

export const AddHotelFormStyle = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    '& label': {
        display: 'block',
        marginBottom: theme.spacing(1),
        fontSize: '1rem',
        fontWeight: 600,
        textTransform: 'capitalize',
    },
    '& input, & select, & textarea': {
        padding: theme.spacing(0.75, 1),
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.grey[300]}`,
        width: '100%',
        '&:focus': {
            borderColor: theme.palette.primary.main,
        },
    },
    '& button': {
        marginTop: theme.spacing(2),
        padding: theme.spacing(1, 2),
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        fontSize: '1rem',
        fontWeight: 600,
        textTransform: 'capitalize',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
}));