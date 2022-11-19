import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Head from 'next/head';

// Next: Styles
import { chakra, Icon } from '@chakra-ui/react';
import { ImArrowLeft2 } from 'react-icons/im';

// Next: Assets
import { HappyAlien } from '../assets/Alien';

// Next: Error 500 (Server)
const ErrorServer = () => {
	const { t } = useTranslation();
	const router = useRouter();

	return (
		<>
			<Head>
				<title>
					Pedrovisk - 500
				</title>
			</Head>
			<chakra.div userSelect='none' display='flex' flexDirection='column' alignItems='center' textAlign='center' justifyContent='center' w='100%' h='100vh' maxW='1280px' marginInlineEnd='auto' marginInlineStart='auto' paddingInlineStart={4} paddingInlineEnd={4}>
				<chakra.h1 display='flex' alignItems='center' color='red.500' fontSize='8xl' fontWeight='black'>
					5 <HappyAlien h='80px' w='80px' /> 0
				</chakra.h1>
				<chakra.p borderBottom='1px solid' borderBottomColor='border' pb={2} px={2} mb={3} fontSize='lg' color='whiteAlpha.700'>
					{t('error.server')}
				</chakra.p>
				<chakra.button onClick={() => router.back()} display='flex' alignItems='center' textAlign='center' py={2} px={4} rounded='0.3rem' color='whiteAlpha.800' transition='all .3s ease' _hover={{ bg: 'whiteAlpha.200', color: 'whiteAlpha.700', '&>svg': { me: 3 } }}>
					<Icon as={ImArrowLeft2} transition='all .2s ease-in-out' me={2} />{t('error.back')}
				</chakra.button>
			</chakra.div>
		</>
	)
}

// Pages: getStaticProps
export async function getStaticProps({ locale }) {
	return {
		props: {
			...await serverSideTranslations(locale)
		}
	}
};

export default ErrorServer;