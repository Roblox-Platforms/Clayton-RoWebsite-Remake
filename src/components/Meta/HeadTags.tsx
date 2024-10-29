import { Helmet } from 'react-helmet';

export default () => (
	<Helmet>
		{/* Standard Head Meta */}
		<meta charSet='utf-8' />
		<meta name='viewport' content='width=device-width, initial-scale=1' />
		<meta httpEquiv='Content-Type' content='text/html; text/css; charset=UTF-8' />
		<link rel='canonical' href='https://claytonsecondary.co.uk' />
		<meta httpEquiv='Expires' content='1y' />
		<meta httpEquiv='Pragma' content='1y' />
		<meta httpEquiv='Cache-Control' content='1y' />
		<title>Clayton Secondary School - Aspiration, Respect, Excellence</title>
		<meta name='description' content='Clayton Secondary School' />

		{/* Social Media Head Meta */}
		<meta property='og:title' content='Clayton Secondary School - Aspiration, Respect, Excellence' />
		<meta name='og:description' content='Clayton Secondary School' />
		<meta property='og:type' content='website' />
		<meta property='og:site_name' content='Clayton Secondary School - Aspiration, Respect, Excellence' />
		<meta property='og:url' content={window.location.href} />
		<meta property='og:locale' content='en_US' />
		<meta property='og:image' content={'BANNER'} />

		{/* Twitter Head Meta */}
		<meta name='twitter:image' content={'BANNER'} />
		<meta name='twitter:card' content='summary_large_image' />
		<meta name='twitter:site' content='@css-roblox' />
		<meta name='twitter:title' content='Clayton Secondary School - Aspiration, Respect, Excellence' />
		<meta name='twitter:alt' content='Clayton Secondary School' />

		{/* Apple Devices Head Meta */}
		<meta name='apple-mobile-web-app-capable' content='yes' />
		<meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
		<meta
			name='apple-mobile-web-app-title'
			content='Clayton Secondary School - Aspiration, Respect, Excellence'
		/>
		<link rel='mask-icon' href={'Logo'} color='#2e4d7e' />
		<link rel='apple-touch-icon' href={'Logo'} />

		{/* Android Devices Head Meta */}
		<meta name='theme-color' content='#2e4d7e' />
		<meta name='mobile-web-app-capable' content='yes' />

		{/* Windows Devices Head Meta */}
		<meta name='msapplication-TileColor' content='#2e4d7e' />
		<meta name='msapplication-TileImage' content={'Logo'} />
		<meta name='msapplication-tap-highlight' content='no' />
	</Helmet>
);
