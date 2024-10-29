import { ReactComponent as Logo } from '@content/ClaytonLogo.svg';

export default ({ location }: { location: string }) => {
	const buttons: Array<{ label: string; path: string }> = [
		{ label: 'Home', path: '/' },
		{ label: 'News', path: '/news' },
		{ label: 'Policies', path: '/policies' },
		{ label: 'Careers', path: '/careers' },
		{ label: 'Contact', path: '/contact' },
	];

	return (
		<header
			style={{
				zIndex: '30',
				position: 'sticky',
				top: '0',
			}}>
			<div
				style={{
					paddingLeft: '25px',
					paddingRight: '25px',
					paddingTop: '10px',
					paddingBottom: '10px',
				}}>
				<Logo fill='#2e4d7e' style={{ height: '75px' }} />
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-evenly',
					width: '100%',
					backgroundColor: '#f0f0f0',
				}}>
				{buttons.map((button, index) => (
					<button
						key={index}
						onClick={() => (window.location.pathname = button.path)}
						style={{
							flex: 1,
							padding: '10px',
							border: 'none',
							cursor: 'pointer',
							borderRadius: '0',
							textAlign: 'center',
							...(button.path === location
								? { backgroundColor: '#294670' }
								: {}),
						}}>
						{button.label}
					</button>
				))}
			</div>
		</header>
	);
};
