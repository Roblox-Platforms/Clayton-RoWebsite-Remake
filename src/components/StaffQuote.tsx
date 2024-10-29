import React from 'react';

interface QuoteProps {
	speaker: string;
	role?: string;
	image: string;
	direction: string;
	children: React.ReactNode;
}

function importAll(r: __WebpackModuleApi.RequireContext): string[] {
	return Array.from(new Map((r.keys().map(r) as string[]).map((path) => [path.split('/').pop(), path])).values());
}

const images: string[] = importAll(require.context('../content/pictures', false, /\.(png|jpe?g)$/));

const Quote = ({ speaker, role, image, children, direction }: QuoteProps) => {
	const StaffImage = images.find((v) => v.startsWith(`/static/media/${image}`));

	if (direction === 'left')
		return (
			<div
				style={{
					display: 'flex',
					backgroundColor: '#ededed',
					marginRight: '40px',
				}}>
				<div
					style={{
						flexGrow: 1,
						display: 'flex',
						paddingLeft: '40px',
						paddingTop: '30px',
						flexDirection: 'column',
						fontStyle: 'italic',
					}}>
					<div style={{ height: '125px' }}>"{children}"</div>
					<div style={{ textAlign: 'left', marginTop: '20px' }}>
						- {speaker}
						{role ? `, ${role}` : ''}
					</div>
				</div>
				<img src={StaffImage} style={{ width: 'auto', height: '200px' }} />
			</div>
		);
	else if (direction === 'right')
		return (
			<div
				style={{
					display: 'flex',
					backgroundColor: '#ededed',
					marginLeft: '40px',
				}}>
				<img src={StaffImage} style={{ width: 'auto', height: '200px' }} />
				<div
					style={{
						flexGrow: 1,
						display: 'flex',
						paddingRight: '40px',
						paddingTop: '30px',
						flexDirection: 'column',
						fontStyle: 'italic',
					}}>
					<div style={{ height: '125px', textAlign: 'right' }}>"{children}"</div>
					<div style={{ textAlign: 'right', marginTop: '20px' }}>
						- {speaker}
						{role ? `, ${role}` : ''}
					</div>
				</div>
			</div>
		);
};

export default Quote;
