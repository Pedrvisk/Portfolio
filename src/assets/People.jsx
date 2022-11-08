import { chakra } from '@chakra-ui/react';
import * as React from 'react';

// Assets: People
export const People = ({ color = '#BDD4E7', ...props }) => {
	return (
		<chakra.svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 512 436'
			{...props}
		>
			<g clipPath='url(#clip0_85_390)'>
				<path
					d='M512 102.8H409.6V64.4H320H281.6V268.258L205.391 230.353C236.141 206.974 256 170.009 256 128.4C256 57.707 198.693 0.399994 128 0.399994C57.307 0.399994 0 57.707 0 128.4C0 170.273 20.108 207.448 51.192 230.8C20.108 254.152 0 291.326 0 333.2V397.2H38.4V435.6H102.4V397.2H153.6V435.6H217.6V358.8H38.4V320.4H217.6V293.607L281.6 325.439V435.6H320V243.6H371.2V282H512L486.4 192.4L512 102.8ZM54.533 179.6C44.38 165.075 38.4 147.427 38.4 128.4C38.4 109.373 44.38 91.725 54.533 77.2H201.465C211.619 91.725 217.599 109.373 217.599 128.4C217.599 147.427 211.619 165.075 201.466 179.6H54.533V179.6ZM449.477 202.95L461.093 243.6H409.6V141.2H461.093L449.478 181.85L446.464 192.4L449.477 202.95Z'
					fill={color}
				/>
				<rect
					x='32'
					y='289'
					width='186'
					height='86'
					fill={color}
				/>
				<rect
					x='87'
					y='244.547'
					width='28'
					height='122'
					fill='#1D1135'
				/>
				<path
					d='M87.1796 244H147.024C162.488 244 175.024 256.536 175.024 272V272H87.1796V244Z'
					fill='#1D1135'
				/>
				<path
					d='M87 295.547H175V295.547C175 311.011 162.464 323.547 147 323.547H87V295.547Z'
					fill='#1D1135'
				/>
				<rect
					width='28'
					height='24'
					transform='translate(147 271.547)'
					fill='#1D1135'
				/>
			</g>
			<defs>
				<clipPath id='clip0_85_390'>
					<rect
						width='512'
						height='436'
						fill='white'
					/>
				</clipPath>
			</defs>
		</chakra.svg>
	)
}
