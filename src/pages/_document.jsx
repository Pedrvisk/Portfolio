import { Html, Head, Main, NextScript } from 'next/document';

// Next: Styles
import { chakra, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Next: Assets
import { Logo } from '../assets/Logo';

const LoaderAnimation = keyframes`
  0% { transform: scale(1) rotate(0); }
	25% { transform: scale(0.90) rotate(0); }
	50% { transform: scale(1) rotate(360deg); }
	75% { transform: scale(0.90) rotate(360deg); }
	100% { transform: scale(1) rotate(0); }
`
// Next: Document
const Document = () => {
	const loader = `${LoaderAnimation} 4s ease-in-out infinite`;

	return (
		<Html>
			<Head />
			<chakra.body m={0} p={0}>
				<chakra.div id='dev-loader' gap={5} transition='all 1s ease-in-out' display='flex' flexDirection='column' w='100%' h='100%' bg='#0A0C21' position='fixed' zIndex={1000} alignItems='center' justifyContent='center'>
					<chakra.div as={motion.div} animation={loader}>
						<Logo />
					</chakra.div>
					<chakra.noscript color='#BDD4E7' borderBottom='2px solid' borderBottomColor='rgba(203, 213, 225, .1)'>
						Enable JavaScript
					</chakra.noscript>
				</chakra.div>
				<Main />
				<NextScript />
			</chakra.body>
		</Html>
	);
}

export default Document;