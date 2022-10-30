import { appWithTranslation } from 'next-i18next';
import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';

// Next: Styles
import { ChakraTheme } from '../styles/Global';
import '@fontsource/manrope/600.css';
import '@fontsource/russo-one';

// Next: Components
import { Head } from '../components/Head';

// Next: App
const App = ({ Component, pageProps }) => {

	// Next: Loading Screen
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const loader = document.getElementById('dev-loader');
			if (loader) {
				setTimeout(() => loader.style.opacity = 0, 2000);
				setTimeout(() => loader.style.display = 'none', 3000);
			}
		}
	}, []);

	return (
		<>
			<Head />
			<ChakraProvider theme={ChakraTheme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	)
}

export default appWithTranslation(App);
