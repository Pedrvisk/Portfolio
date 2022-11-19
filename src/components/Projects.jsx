import { format, formatDistanceToNow } from 'date-fns';
import { chakra, SimpleGrid } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

// Components: Locales
import pt from 'date-fns/locale/pt-BR';
import en from 'date-fns/locale/en-US';

// Components: Loading
import { Loading } from './Loading';

// Components: Projects
export const Projects = ({ data }) => {
	const { t, i18n } = useTranslation();

	return (
		<>
			{data ?
				<SimpleGrid alignItems='center' columns={{ base: 1, lg: 3 }} spacing={{ base: 3, lg: 5 }}>
					{data.map(({ id, name, description, created_at, updated_at, html_url }) => (
						<chakra.a key={id} href={html_url} target='_blank' transition='transform 0.3s ease-in-out' _hover={{ transform: 'scale(0.9)' }}>
							<chakra.div p={3} border='1px solid' borderColor='border' rounded='0.3rem'>
								<chakra.div display='flex' justifyContent='space-between' p={2} fontWeight='bold'>
									<chakra.h2 fontSize='lg' color='whiteAlpha.800'>
										{name}
									</chakra.h2>
									<chakra.span fontSize='sm' color='whiteAlpha.600' >
										{format(new Date(created_at), i18n.language === 'pt-BR' ? 'dd/MM/yyyy' : 'MM/dd/yyyy')}
									</chakra.span>
								</chakra.div>
								<chakra.div p={3} fontWeight='normal'>
									<chakra.p fontSize='sm' color='whiteAlpha.700'>
										{description}
									</chakra.p>
								</chakra.div>
								<chakra.div p={2}>
									<chakra.p fontSize='sm' color='whiteAlpha.600'>
										{t('index.github.lastUpdate')}
										{formatDistanceToNow(new Date(updated_at), { locale: i18n.language === 'pt-BR' ? pt : en })}
									</chakra.p>
								</chakra.div>
							</chakra.div>
						</chakra.a>
					))}
				</SimpleGrid>
				:
				<chakra.div p={{ base: 5, lg: 12 }} border='1px solid' borderColor='border' rounded='0.3rem' textAlign='center'>
					<Loading color='blue.beau' />
				</chakra.div>
			}
		</>
	)
}