import { format, formatDuration, intervalToDuration } from 'date-fns';
import { chakra, SimpleGrid } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

// Components: Locales
import pt from 'date-fns/locale/pt-BR';
import en from 'date-fns/locale/en-US';

// Components: Loading
import { Loading } from './Loading';

// Components: Metrics
export const Metrics = ({ data }) => {
	const { from, to, languages, operating_systems, editors } = data;
	const { t, i18n } = useTranslation();

	return (
		<>
			{data ?
				<chakra.div border='1px solid' borderColor='border' p={{ base: 3, lg: 5 }} rounded='0.3rem'>
					<chakra.div display='flex' pb={2} justifyContent='space-between' textAlign='center' alignItems='center' borderBottom='1px solid' borderBottomColor='border'>
						<chakra.h1 fontSize='lg' color='whiteAlpha.900'>
							<chakra.a href='https://wakapi.dev/' color='blue.beau' target='_blank' me={1}>
								Wakapi
							</chakra.a>
							{t('index.wakapi.metrics')}
						</chakra.h1>
						<chakra.div fontSize='sm' color='whiteAlpha.600'>
							<chakra.span>
								{format(new Date(from), i18n.language === 'pt-BR' ? 'dd/MM/yyyy' : 'MM/dd/yyyy')}
							</chakra.span>
							<chakra.span mx={{ base: 1, lg: 2 }}>
								-
							</chakra.span>
							<chakra.span>
								{format(new Date(to), i18n.language === 'pt-BR' ? 'dd/MM/yyyy' : 'MM/dd/yyyy')}
							</chakra.span>
						</chakra.div>
					</chakra.div>
					<chakra.div p={2}>
						<chakra.h2 mb={2} fontSize='md' color='blue.beau'>
							{t('index.wakapi.languages')}
						</chakra.h2>
						<SimpleGrid alignItems='center' columns={{ base: 1, lg: 4 }} spacing={3}>
							{languages.filter((language) => language.key !== 'unknown').map(({ key, total }) => (
								<chakra.div key={key} textAlign='center' border='1px solid' borderColor='border' rounded='0.1rem'>
									<chakra.div borderBottom='1px solid' borderBottomColor='border'>
										<chakra.h3 p={2} fontSize='md' color='whiteAlpha.800'>
											{key}
										</chakra.h3>
									</chakra.div>
									<chakra.p px={3} py={2} fontSize='sm' color='whiteAlpha.700'>
										{formatDuration(intervalToDuration({ start: 0, end: total * 1000 }), { format: ['days', 'hours', 'minutes', 'seconds'], delimiter: ', ', locale: i18n.language === 'pt-BR' ? pt : en })}
									</chakra.p>
								</chakra.div>
							))}
						</SimpleGrid>
					</chakra.div>
					<chakra.div mt={3} display='flex' flexDirection={{ base: 'column', lg: 'row' }} justifyContent='space-between' textAlign='center' alignItems='center'>
						<chakra.div p={2}>
							<chakra.h2 fontSize='md' mb={2} color='blue.beau'>
								{t('index.wakapi.systems')}
							</chakra.h2>
							<SimpleGrid alignItems='center' columns={{ base: 1, lg: 2 }} spacing={3}>
								{operating_systems.map(({ key, total }) => (
									<chakra.div key={key} textAlign='center' border='1px solid' borderColor='border' rounded='0.1rem'>
										<chakra.div borderBottom='1px solid' borderBottomColor='border'>
											<chakra.h3 textTransform='capitalize' p={2} fontSize='md' color='whiteAlpha.800'>
												{key}
											</chakra.h3>
										</chakra.div>
										<chakra.p px={3} py={2} fontSize='sm' color='whiteAlpha.700'>
											{formatDuration(intervalToDuration({ start: 0, end: total * 1000 }), { format: ['days', 'hours', 'minutes', 'seconds'], delimiter: ', ', locale: i18n.language === 'pt-BR' ? pt : en })}
										</chakra.p>
									</chakra.div>
								))}
							</SimpleGrid>
						</chakra.div>
						<chakra.div h='8rem' display={{ base: 'none', lg: 'block' }} bgColor='border' w='1px' rounded='0.3rem' mx={2} />
						<chakra.div mt={{ base: 3, lg: 0 }} p={2}>
							<chakra.h2 fontSize='md' mb={2} color='blue.beau'>
								{t('index.wakapi.editors')}
							</chakra.h2>
							<SimpleGrid alignItems='center' columns={{ base: 1, lg: 2 }} spacing={3}>
								{editors.map(({ key, total }) => (
									<chakra.div key={key} textAlign='center' border='1px solid' borderColor='border' rounded='0.1rem'>
										<chakra.div borderBottom='1px solid' borderBottomColor='border'>
											<chakra.h3 textTransform='capitalize' p={2} fontSize='md' color='whiteAlpha.800'>
												{key}
											</chakra.h3>
										</chakra.div>
										<chakra.p px={3} py={2} fontSize='sm' color='whiteAlpha.700'>
											{formatDuration(intervalToDuration({ start: 0, end: total * 1000 }), { format: ['days', 'hours', 'minutes', 'seconds'], delimiter: ', ', locale: i18n.language === 'pt-BR' ? pt : en })}
										</chakra.p>
									</chakra.div>
								))}
							</SimpleGrid>
						</chakra.div>
					</chakra.div>
				</chakra.div>
				:
				<chakra.div p={{ base: 5, lg: 12 }} border='1px solid' borderColor='border' rounded='0.3rem' textAlign='center'>
					<Loading color='blue.beau' />
				</chakra.div>
			}
		</>
	)
}