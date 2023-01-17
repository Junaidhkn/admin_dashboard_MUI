import './index.css';
import { useMode, ColorModeContext } from './theme.js';
import { CssBaseline, ThemeProvider } from '@mui/material';

const App = () => {
	const [theme, colorMode] = useMode();

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app'>HomePage</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default App;
