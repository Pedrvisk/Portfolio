import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation, Trans } from 'next-i18next';

// Pages: Styles
import { chakra, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { GridTemplate } from '../components/gridTemplate';

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
const Home = () => {
	const { t } = useTranslation();

	const planet = `${PlanetAnimation} 240s linear infinite`;
	const moon = `${MoonAnimation} 20s linear infinite`;
	const arrow = `${ArrowScrollDown} 1s ease-in-out infinite`

	return (
		<GridTemplate>
			<chakra.div display={{ base: 'block', lg: 'flex' }} justifyContent={{ base: 'center', lg: 'space-evenly' }} textAlign='center' alignItems='center' h={{ base: 'auto', lg: '30rem' }}>
				<chakra.div display='flex' justifyContent='center' p={16} position='relative'>
					<chakra.svg as={motion.svg} animation={planet} filter='drop-shadow(0px 0px 8px #BDD4E7)' height={{ base: '200px', lg: '250px' }} width={{ base: '200px', lg: '250px' }} viewBox='0 0 222 222' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<g clipPath='url(#clip0_80_330)'>
							<path d='M106.167 110.667H221.333C221.333 100.269 219.896 90.208 217.215 80.667H172.167C168.024 80.667 164.667 77.31 164.667 73.167C164.667 69.024 168.024 65.667 172.167 65.667H211.795C194.552 26.975 155.761 0 110.667 0C71.663 0 37.376 20.18 17.667 50.667H95.167C99.31 50.667 102.667 54.024 102.667 58.167C102.667 62.31 99.31 65.667 95.167 65.667H9.538C5.356 75.05 2.445 85.123 1.016 95.667H22.167C26.31 95.667 29.667 99.024 29.667 103.167C29.667 107.31 26.31 110.667 22.167 110.667H0C0 132.783 6.491 153.381 17.666 170.667H40.166C44.309 170.667 47.666 174.024 47.666 178.167C47.666 182.31 44.309 185.667 40.166 185.667H29.299C49.52 207.594 78.487 221.333 110.666 221.333C134.692 221.333 156.928 213.673 175.071 200.667H142.166C138.023 200.667 134.666 197.31 134.666 193.167C134.666 189.024 138.023 185.667 142.166 185.667H192.033C200.149 176.867 206.855 166.748 211.794 155.667H160.166C156.023 155.667 152.666 152.31 152.666 148.167C152.666 144.024 156.023 140.667 160.166 140.667H217.214C218.583 135.795 219.623 130.786 220.316 125.667H106.167C102.024 125.667 98.667 122.31 98.667 118.167C98.667 114.024 102.024 110.667 106.167 110.667ZM114.167 20.667H131.167C135.31 20.667 138.667 24.024 138.667 28.167C138.667 32.31 135.31 35.667 131.167 35.667H114.167C110.024 35.667 106.667 32.31 106.667 28.167C106.667 24.024 110.024 20.667 114.167 20.667ZM107.167 155.667C111.31 155.667 114.667 159.024 114.667 163.167C114.667 167.31 111.31 170.667 107.167 170.667H68.167C64.024 170.667 60.667 167.31 60.667 163.167C60.667 159.024 64.024 155.667 68.167 155.667H107.167ZM86.167 95.667C82.024 95.667 78.667 92.31 78.667 88.167C78.667 84.024 82.024 80.667 86.167 80.667H131.167C135.31 80.667 138.667 84.024 138.667 88.167C138.667 92.31 135.31 95.667 131.167 95.667H86.167Z' fill='#BDD4E7' />
						</g>
						<defs>
							<clipPath id='clip0_80_330'>
								<rect width='221.333' height='221.333' fill='white' />
							</clipPath>
						</defs>
					</chakra.svg>
					<chakra.div as={motion.div} transform='rotate(-30deg)' position='absolute' top={0} bottom={0} animation={moon}>
						<chakra.svg width={{ base: '35px', lg: '40px' }} height={{ base: '35px', lg: '40px' }} viewBox='0 0 512 512' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path d='M315.077 250.092V368.245L512 368.246V250.092H315.077ZM354.462 328.86V289.477H393.847V328.86H354.462ZM472.615 328.862L433.23 328.861V289.478H472.615V328.862Z' fill='#BDD4E7' />
							<path d='M0 250.092V368.246L196.923 368.245V250.092H0ZM39.385 328.862V289.477H78.77V328.86L39.385 328.862ZM157.538 328.86L118.153 328.861V289.476H157.538V328.86Z' fill='#BDD4E7' />
							<path d='M157.538 203.487V400.41H354.462V203.487L308.513 111.59H203.487L157.538 203.487Z' fill='#BDD4E7' />
							<path d='M256 400.41H354.462V203.487L308.513 111.59H256V400.41Z' fill='#BDD4E7' />
							<path d='M256 308.512C270.501 308.512 282.256 296.757 282.256 282.256C282.256 267.755 270.501 256 256 256C241.499 256 229.744 267.755 229.744 282.256C229.744 296.757 241.499 308.512 256 308.512Z' fill='#202C39' />
						</chakra.svg>
					</chakra.div>
				</chakra.div>
				<chakra.div color='blackAlpha.800'>
					<chakra.div display='flex' alignItems='end' justifyContent={{ base: 'center', lg: 'start' }}>
						<chakra.svg me={2} width='50px' height='50px' viewBox='0 0 512 436' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<g clipPath='url(#clip0_85_390)'>
								<path d='M512 102.8H409.6V64.4H320H281.6V268.258L205.391 230.353C236.141 206.974 256 170.009 256 128.4C256 57.707 198.693 0.399994 128 0.399994C57.307 0.399994 0 57.707 0 128.4C0 170.273 20.108 207.448 51.192 230.8C20.108 254.152 0 291.326 0 333.2V397.2H38.4V435.6H102.4V397.2H153.6V435.6H217.6V358.8H38.4V320.4H217.6V293.607L281.6 325.439V435.6H320V243.6H371.2V282H512L486.4 192.4L512 102.8ZM54.533 179.6C44.38 165.075 38.4 147.427 38.4 128.4C38.4 109.373 44.38 91.725 54.533 77.2H201.465C211.619 91.725 217.599 109.373 217.599 128.4C217.599 147.427 211.619 165.075 201.466 179.6H54.533V179.6ZM449.477 202.95L461.093 243.6H409.6V141.2H461.093L449.478 181.85L446.464 192.4L449.477 202.95Z' fill='#BDD4E7' />
								<rect x='32' y='289' width='186' height='86' fill='#BDD4E7' />
								<rect x='87' y='244.547' width='28' height='122' fill='#1D1135' />
								<path d='M87.1796 244H147.024C162.488 244 175.024 256.536 175.024 272V272H87.1796V244Z' fill='#1D1135' />
								<path d='M87 295.547H175V295.547C175 311.011 162.464 323.547 147 323.547H87V295.547Z' fill='#1D1135' />
								<rect width='28' height='24' transform='translate(147 271.547)' fill='#1D1135' />
							</g>
							<defs>
								<clipPath id='clip0_85_390'>
									<rect width='512' height='436' fill='white' />
								</clipPath>
							</defs>
						</chakra.svg>
						<chakra.h1 color='blue.beau' fontFamily='Russo One' fontWeight='normal' fontSize='3xl'>
							Pedrovisk
						</chakra.h1>
					</chakra.div>
					<chakra.div borderTop='1px solid' borderTopColor='border' w={{ base: 'auto', lg: '32rem' }} p={2} textAlign={{ base: 'center', lg: 'start' }} color='whiteAlpha.600'>
						<Trans i18nKey='index.description' components={{ span: <chakra.span color='whiteAlpha.700' /> }} />
					</chakra.div>
				</chakra.div>
			</chakra.div>
			<chakra.div my={{ base: 2, lg: 3 }} display='flex' alignItems='center' justifyContent='space-around'>
				<chakra.svg animation={arrow} w='60px' h='60px' viewBox='0 0 170 170' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<g clipPath='url(#clip0_95_415)'>
						<path d='M88.618 84.8286V42.4161H81.118V84.8286H88.618Z' fill='#BDD4E7' />
						<path d='M45.078 50.3813C45.4131 50.0447 45.809 49.7747 46.2448 49.5858C46.8524 49.3246 47.5183 49.2287 48.1749 49.3079C48.8315 49.387 49.4555 49.6385 49.9836 50.0366L71.1968 65.9465L66.636 71.9923L50.673 60.0068L49.0025 75.519L68.9429 95.4594C69.2939 95.8063 69.5729 96.2192 69.7641 96.6742C69.9552 97.1292 70.0546 97.6175 70.0566 98.111L70.0566 119.695C70.0415 124.128 70.9055 128.519 72.5987 132.616C74.2919 136.712 76.7805 140.432 79.9207 143.56L84.8528 148.492L89.7849 143.56C92.9251 140.432 95.4137 136.712 97.1069 132.616C98.8001 128.519 99.6641 124.128 99.649 119.695L99.649 98.111C99.651 97.6175 99.7504 97.1292 99.9415 96.6742C100.133 96.2192 100.412 95.8063 100.763 95.4594L120.703 75.519L118.98 59.9538L103.017 71.9392L98.4558 65.8935L119.669 49.9836C120.197 49.5854 120.821 49.334 121.478 49.2548C122.134 49.1757 122.8 49.2716 123.408 49.5328C124.021 49.7949 124.552 50.2156 124.949 50.7516C125.345 51.2876 125.591 51.9195 125.662 52.5822L128.313 76.447C128.386 77.0087 128.331 77.5796 128.152 78.1169C127.973 78.6543 127.675 79.144 127.279 79.5495L107.153 99.6755L107.18 119.695C107.195 125.116 106.134 130.485 104.058 135.492C101.983 140.499 98.9337 145.044 95.0882 148.864L90.1561 153.796C88.7496 155.202 86.8419 155.992 84.8528 155.992C82.8637 155.992 80.956 155.202 79.5495 153.796L74.6174 148.864C70.7719 145.044 67.7229 140.499 65.6473 135.492C63.5717 130.485 62.5107 125.116 62.5259 119.695L62.5524 99.6755L42.4264 79.5495C42.0299 79.1494 41.7287 78.6651 41.5451 78.1326C41.3615 77.6 41.3002 77.033 41.3657 76.4736L44.0174 52.6087C44.1096 51.7679 44.4834 50.9829 45.078 50.3813Z' fill='#BDD4E7' />
					</g>
					<defs>
						<clipPath id='clip0_95_415'>
							<rect width='120' height='120' fill='white' transform='translate(169.706 84.8528) rotate(135)' />
						</clipPath>
					</defs>
				</chakra.svg>
			</chakra.div>
			<chakra.div>
				asdkasdkaskdkaskdaskdksak dkas dasdkasdkaskdkaskdaskdksak dkas dasdkasdkaskdkaskdaskdksak dkas dasdkasdkaskdkaskdaskdksak dkas dasdkasdkaskdkaskdaskdksak dkas dasdkasdkaskdkaskdaskdksak dkas dasdkasdkaskdkaskdaskdksak dkas dasdkasdkaskdkaskdaskdksak dkas dasdkasdkaskdkaskdaskdksak dkas dasdkasdkaskdkaskdaskdksak dkas dasdkasdkaskdkaskdaskdksak dkas dasdkasdkaskdkaskdaskdksak dkas dasdkasdkaskdkaskdaskdksak dkas dasdkasdkaskdkaskdaskdksak dkas dasdkasdkaskdkaskdaskdksak dkas dasdkasdkaskdkaskdaskdksak dkas dasdkasdkaskdkaskdaskdksak dkas dasdkasdkaskdkaskdaskdksak dkas dasdkasdkaskdkaskdaskdksak dkas dasdkasdkaskdkaskdaskdksak dkas dasdkasdkaskdkaskdaskdksak dkas dasdkasdkaskdkaskdaskdksak dkas dasdkasdkaskdkaskdaskdksak dkas dasdkasdkaskdkaskdaskdksak dkas d
			</chakra.div>
		</GridTemplate>
	)
}

// Pages: getStaticProps
export const getStaticProps = async ({ locale }) => ({
	props: {
		...await serverSideTranslations(locale),
	}
});

export default Home;
