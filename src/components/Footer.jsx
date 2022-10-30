import NextLink from 'next/link';

// Components: Styles
import { chakra, Icon } from '@chakra-ui/react';
import { SiGithub, SiDiscord } from 'react-icons/si';
import { FaRegCopyright } from 'react-icons/fa';

// Components: Footer
export const Footer = () => {
	return (
		<chakra.div display='flex' alignItems='start' justifyContent='space-between' w='100%' maxW='1280px' marginInlineEnd='auto' marginInlineStart='auto'>
			<chakra.h1 color='whiteAlpha.900' display='flex' alignItems='center'>
				<Icon as={FaRegCopyright} me={1} /> Pedrovisk - 2022 | 2023
			</chakra.h1>
			<chakra.div display='flex' flexDirection='row'>
				{[
					{
						href: '/discord',
						icon: SiDiscord
					},
					{
						href: '/github',
						icon: SiGithub
					}
				].map(({ href, icon }, index, arr) => (
					<chakra.div key={index} marginInlineEnd={(arr.length - 2) === index ? 2.5 : 0}>
						<NextLink href={href} target='_blank'>
							<Icon transform='scale(1)' transition='transform 0.3s ease' _hover={{ transform: 'scale(1.1)' }} as={icon} w={6} h={6} />
						</NextLink>
					</chakra.div>
				))}
			</chakra.div>
		</chakra.div>
	)
}