import { extendTheme } from '@chakra-ui/react';

// Config: ChakraTheme
export const ChakraTheme = extendTheme({
	config: {
		cssVarPrefix: 'dev'
	},
	fonts: {
		body: "'Manrope', 'Russo One', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji"
	},
	colors: {
		void: '#1D1135',
		blue: {
			beau: '#BDD4E7',
			midnight: '#0A0C21'
		},
		nero: '#191919',
		border: 'rgba(203, 213, 225, .1)'
	},
	styles: {
		global: {
			body: {
				color: 'whiteAlpha.800',
				bg: 'nero',
				bgGradient: 'radial(blue.midnight, nero)'
			},
			'#__next': {
				display: 'grid',
				gridTemplateAreas: "'header' 'main' 'footer'",
				gridTemplateRows: 'auto 1fr auto',
				p: 0,
				m: 0,
				height: '100vh',
			},
			header: {
				gridArea: 'header'
			},
			main: {
				gridArea: 'main',
				height: '100%',
				width: '100%'
			},
			footer: {
				gridArea: 'footer'
			},
			a: {
				textDecoration: 'none !important'
			}
		}
	}
});
