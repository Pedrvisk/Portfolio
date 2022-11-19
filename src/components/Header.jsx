import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

// Components: Styles
import { chakra, Icon, Menu, MenuButton, MenuList, MenuOptionGroup, MenuItemOption } from '@chakra-ui/react';
import { FaLanguage } from 'react-icons/fa';

// Components: Images
import { Logo } from '../assets/Logo';

// Components: Header
export const Header = () => {
	const { t } = useTranslation();

	const router = useRouter();
	const { locale, locales, asPath, pathname, query } = router;

	return (
		<>
			<Logo w='70px' h='70px' filter='drop-shadow(0px 0px 3px white)' />
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
