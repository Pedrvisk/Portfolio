import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

// Components: Styles
import { chakra, Icon, Menu, MenuButton, MenuList, MenuOptionGroup, MenuItemOption } from '@chakra-ui/react';
import { FaLanguage } from 'react-icons/fa';

// Components: Header
export const Header = () => {
	const { t } = useTranslation();

	const router = useRouter();
	const { locale, locales, asPath, pathname, query } = router;

	return (
		<>
			<chakra.svg filter='drop-shadow(0px 0px 3px white)' version='1.0' xmlns='http://www.w3.org/2000/svg'
				width='70px' h='70px' viewBox='0 0 195.000000 189.000000'
				preserveAspectRatio='xMidYMid meet'>
				<g transform='translate(0.000000,189.000000) scale(0.100000,-0.100000)'
					fill='#F0F8FF' stroke='none'>
					<path d='M835 1716 c-521 -231 -622 -279 -643 -302 l-22 -25 0 -450 c0 -373 2 -455 14 -478 13 -24 72 -54 399 -200 211 -94 387 -171 390 -171 4 0 7 211 7 469 0 452 1 469 20 494 20 26 188 105 293 138 111 36 218 21 280 -39 91 -86 112 -281 46 -419 -13 -27 -50 -75 -83 -109 -59 -59 -129 -100 -278 -163 l-48 -20 0 -125 c0 -69 2 -126 4 -126 15 0 542 242 555 255 14 14 16 70 19 479 l3 464 -23 26 c-27 31 -748 356 -788 356 -14 -1 -79 -25 -145 -54z' />
					<path d='M1360 983 c-8 -3 -45 -19 -82 -36 l-68 -30 0 -114 c0 -114 0 -114 23 -107 82 25 160 83 186 138 28 58 27 101 -4 131 -25 26 -29 27 -55 18z' />
				</g>
			</chakra.svg>
			<Menu autoSelect={false}>
				<MenuButton>
					<Icon as={FaLanguage} w={10} h={10} />
				</MenuButton>
				<MenuList rounded='0.3rem' transform='none !important' transition='all 0.2s ease !important' boxShadow='none' borderColor='border' bg='blue.midnight'>
					<MenuOptionGroup color='whiteAlpha.600' defaultValue={locale} title={t('header.locale')} type='radio'>
						{locales.map((code, index) => (
							<MenuItemOption key={index} value={code} onClick={() => router.push({ pathname, query }, asPath, { locale: code })} _focus={{ bg: 'none' }} _hover={{ bg: 'whiteAlpha.100' }} pointerEvents={code === locale ? 'none' : 'initial'} color={code === locale ? 'whiteAlpha.700' : 'whiteAlpha.900'}>
								{t(`header.locales.${code}`)}
							</MenuItemOption>
						))}
					</MenuOptionGroup>
				</MenuList>
			</Menu>
		</>
	)
}
