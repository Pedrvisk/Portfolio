import { Html, Head, Main, NextScript } from 'next/document';

// Next: Stykes
import { chakra, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';

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
			<chakra.div as='body' m={0} p={0}>
				<chakra.div id='dev-loader' transition='all 1s ease-in-out' display='flex' w='100%' h='100%' bg='#0A0C21' position='fixed' zIndex={1000} alignItems='center' justifyContent='center'>
					<chakra.div as={motion.div} animation={loader}>
						<svg version='1.0' xmlns='http://www.w3.org/2000/svg'
							width='100px' h='100px' viewBox='0 0 195.000000 189.000000'
							preserveAspectRatio='xMidYMid meet'>
							<g transform='translate(0.000000,189.000000) scale(0.100000,-0.100000)'
								fill='#F0F8FF' stroke='none'>
								<path d='M835 1716 c-521 -231 -622 -279 -643 -302 l-22 -25 0 -450 c0 -373 2 -455 14 -478 13 -24 72 -54 399 -200 211 -94 387 -171 390 -171 4 0 7 211 7 469 0 452 1 469 20 494 20 26 188 105 293 138 111 36 218 21 280 -39 91 -86 112 -281 46 -419 -13 -27 -50 -75 -83 -109 -59 -59 -129 -100 -278 -163 l-48 -20 0 -125 c0 -69 2 -126 4 -126 15 0 542 242 555 255 14 14 16 70 19 479 l3 464 -23 26 c-27 31 -748 356 -788 356 -14 -1 -79 -25 -145 -54z' />
								<path d='M1360 983 c-8 -3 -45 -19 -82 -36 l-68 -30 0 -114 c0 -114 0 -114 23 -107 82 25 160 83 186 138 28 58 27 101 -4 131 -25 26 -29 27 -55 18z' />
							</g>
						</svg>
					</chakra.div>
				</chakra.div>
				<Main />
				<NextScript />
			</chakra.div>
		</Html>
	);
}

export default Document;