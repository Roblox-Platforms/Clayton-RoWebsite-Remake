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
				backgroundColor: '#ffffff',
			}}>
			<div
				style={{
					paddingLeft: '25px',
					paddingRight: '25px',
					paddingTop: '10px',
					paddingBottom: '10px',
					display: 'flex',
					color: '#2e4d7e',
				}}>
				<Logo
					fill='#2e4d7e'
					style={{ height: '75px', marginRight: '25px', cursor: 'pointer' }}
					onClick={() =>
						(window.location.href =
							'https://www.roblox.com/groups/17077801/Clayton-Secondary-School#!/about')
					}
				/>
				<div
					style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
					onClick={() =>
						(window.location.href =
							'https://www.roblox.com/groups/17077801/Clayton-Secondary-School#!/about')
					}>
					<h1 style={{ fontWeight: '500', margin: '0px' }}>Clayton Secondary School</h1>
					<h2 style={{ fontWeight: '500', fontSize: '23px', margin: '0px' }}>
						Aspiration | Respect | Excellence
					</h2>
				</div>
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
