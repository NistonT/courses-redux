import { default as SearchIcon } from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router";
import { pagesConfig } from "../../config/pages.config";
import { useSearchValue } from "../../hooks/useSearchValue";

export const Header = () => {
	const { searchValue, setSearchValue } = useSearchValue();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static' color='success'>
				<Toolbar>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{
							flexGrow: 1,
							display: { xs: "none", sm: "block" },
							fontWeight: 500,
							textDecoration: "none",
						}}
					>
						<Link
							to={pagesConfig.HOME}
							style={{ textDecoration: "none", color: "white" }}
						>
							COURSE
						</Link>
					</Typography>
					<Link to={pagesConfig.ADD_COURSE}>Создать курс</Link>
					<Link to={pagesConfig.ADD_MODULE}>Создать модуль</Link>
					<TextField
						placeholder='Поиск...'
						value={searchValue}
						onChange={event => setSearchValue(event.target.value)}
						variant='outlined'
						size='small'
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<SearchIcon />
								</InputAdornment>
							),
							sx: {
								backgroundColor: "white",
								borderRadius: 1,
								width: { xs: 200, sm: 300 },
							},
						}}
					/>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
