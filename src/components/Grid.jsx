
// Components: Header/Footer
import { Header } from './Header';
import { Footer } from './Footer';

// Components: Styles
import { chakra } from '@chakra-ui/react';

// Components: Grid
export const Grid = ({ children }) => {
	return (
		<>
			<chakra.header userSelect='none' mt={{ base: 3, lg: 6 }} display='flex' alignItems='center' justifyContent='space-between' w='100%' maxW='1280px' marginInlineEnd='auto' marginInlineStart='auto' paddingInlineStart={4} paddingInlineEnd={4}>
				<Header />
			</chakra.header>
			<chakra.main userSelect='none' w='100%' maxW='1280px' marginInlineEnd='auto' marginInlineStart='auto' paddingInlineStart={4} paddingInlineEnd={4}>
				{children}
			</chakra.main>
			<chakra.footer borderTop='1px solid' borderColor='border' userSelect='none' px={{ base: 3, lg: 2 }} pt={{ base: 3, lg: 4 }} pb={{ base: 1.5, lg: 1.5 }}>
				<Footer />
			</chakra.footer>
		</>
	)
}