
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { optionsMenu } from 'src/constant/options';
import useMenu from 'src/hooks/useMenu';

export default function DrawerComponent() {
  const { open, handleClose } = useMenu()
	const theme = useTheme()

	// TODO: O Menu marcado deve ficar destacado com cor diferente

  return (
    <Drawer
			anchor='left'
			open={open}
			onClose={handleClose as (event: {}, reason: "backdropClick" | "escapeKeyDown") => {}}
    >
			<Box sx={{ width: 250, height: '100%', background: theme.palette.primary.light }}>
				<List>
					{optionsMenu.map((item, index) => (
						<ListItem key={index} disablePadding>
							<ListItemButton href={item.path}>
								<ListItemText primary={item.label} sx={{ color: theme.palette.primary.contrastText }} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Box>
    </Drawer>
  );
}