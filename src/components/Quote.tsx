import React from 'react';

interface QuoteProps {
	speaker: string;
	role?: string;
	children: React.ReactNode;
}

const Quote = ({ speaker, role, children }: QuoteProps) => {
	return (
		<blockquote
			style={{
				fontStyle: 'italic',
				margin: '1em 0',
				backgroundColor: '#ebebeb',
				padding: '7px',
				fontSize: '17px',
			}}>
			"{children}"
			<div style={{ textAlign: 'right', marginTop: '20px' }}>
				- {speaker}, {role}
			</div>
		</blockquote>
	);
};

export default Quote;
