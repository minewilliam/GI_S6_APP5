import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: '#9fa8bd',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));

export default Item;