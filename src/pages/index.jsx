import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation, Trans } from 'next-i18next';

// Pages: Styles
import { GridTemplate } from '../components/gridTemplate';
import { chakra, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Pages: Assets
import { Planet } from '../assets/Planet';
import { People } from '../assets/People';
import { Rocket } from '../assets/Rocket';
import { Moon } from '../assets/Moon';

// Pages: Components
import { Cards } from '../components/Cards';

// Pages: Planet Animation
const PlanetAnimation = keyframes`
	0% { filter: drop-shadow(0px 0px 8px #BDD4E7); transform: rotate(0deg); }
	25% { filter: drop-shadow(0px 0px 4px #BDD4E7); }
	50% { filter: drop-shadow(0px 0px 8px #BDD4E7); transform: rotate(90deg); }
	75% { filter: drop-shadow(0px 0px 4px #BDD4E7); }
	100% { filter: drop-shadow(0px 0px 8px #BDD4E7); transform: rotate(0deg); }
`

// Pages: Moon Animation
const MoonAnimation = keyframes`
	0% { filter: drop-shadow(0px 0px 3px #BDD4E7); transform: rotate(0deg); }
	50% { filter: drop-shadow(0px 0px 1px #BDD4E7); }
	100% { filter: drop-shadow(0px 0px 3px #BDD4E7); transform: rotate(360deg); }
`

// Pages: Arrow Scroll Down
const ArrowScrollDown = keyframes`
	0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(.8,0,1,1); }
	50% { transform: none; animation-timing-function: cubic-bezier(0,0,.2,1); }
`

// Pages: Home (/)
const Home = ({ github }) => {
	const { t } = useTranslation();

	const planet = `${PlanetAnimation} 240s linear infinite`;
	const moon = `${MoonAnimation} 20s linear infinite`;
	const arrow = `${ArrowScrollDown} 1s ease-in-out infinite`

	return (
		<GridTemplate>
			<chakra.div display={{ base: 'block', lg: 'flex' }} justifyContent={{ base: 'center', lg: 'space-evenly' }} textAlign='center' alignItems='center' h={{ base: 'auto', lg: '30rem' }}>
				<chakra.div display='flex' justifyContent='center' p={16} position='relative'>
					<Planet as={motion.svg} animation={planet} filter='drop-shadow(0px 0px 8px #BDD4E7)' height={{ base: '200px', lg: '250px' }} width={{ base: '200px', lg: '250px' }} />
					<chakra.div as={motion.div} transform='rotate(-30deg)' position='absolute' top={0} bottom={0} animation={moon}>
						<Moon width={{ base: '35px', lg: '40px' }} height={{ base: '35px', lg: '40px' }} />
					</chakra.div>
				</chakra.div>
				<chakra.div color='blackAlpha.800'>
					<chakra.div display='flex' alignItems='end' justifyContent={{ base: 'center', lg: 'start' }}>
						<People me={2} width='50px' height='50px' />
						<chakra.h1 color='blue.beau' fontFamily='Russo One' fontSize='3xl'>
							Pedrovisk
						</chakra.h1>
					</chakra.div>
					<chakra.div borderTop='1px solid' borderTopColor='border' w={{ base: 'auto', lg: '32rem' }} p={2} textAlign={{ base: 'center', lg: 'start' }} color='whiteAlpha.600'>
						<Trans i18nKey='index.description' components={{ span: <chakra.span color='whiteAlpha.700' /> }} />
					</chakra.div>
				</chakra.div>
			</chakra.div>
			<chakra.div my={{ base: 2, lg: 3 }} display='flex' alignItems='center' justifyContent='space-around'>
				<Rocket filter='drop-shadow(0px 0px 3px #BDD4E7)' animation={arrow} w='60px' h='60px' />
			</chakra.div>
			<chakra.div mb={{ base: 5, lg: 10 }}>
				<chakra.h1 color='blue.beau' fontFamily='Russo One' fontSize='xl' mb={2}>
					{t('index.projects')}
				</chakra.h1>
				<Cards data={github} />
			</chakra.div>
		</GridTemplate>
	)
}

// Pages: getStaticProps
export async function getStaticProps({ locale }) {
	let res = await fetch('https://api.github.com/users/Pedasdasdsadrvisk/repos')
		.then(async (res) => await res.json());

	return {
		props: {
			...await serverSideTranslations(locale),
			github: res?.message ? false : res
		}
	}
};

export default Home;
