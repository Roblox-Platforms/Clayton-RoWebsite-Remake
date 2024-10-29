import { Helmet } from 'react-helmet';

interface PageConfig {
	Location: string;
	Description?: string;
}

export default (RouteConfig: PageConfig) => {
	let RouteDesc = `Clayton Secondary School is a leading Ro-School, outperforming its fellow groups in almost all measurements, including teaching quality, pastoral provisions, session statistics, and campus modernity & facilities. We pride ourselves in the welcoming environment we provide to students, alongside the support we offer to those who may have a more difficult time in a traditional classroom setting.`;
	if (RouteConfig.Description) RouteDesc = RouteConfig.Description;

	return (
		<Helmet>
			<title>{`${RouteConfig.Location} | Clayton Secondary School`}</title>
			<meta charSet='utf-8' />
			<meta itemProp='description' content={RouteDesc} />
			<meta itemProp='og:description' content={RouteDesc} />
			<meta property='og:title' content={`${RouteConfig.Location} | Clayton Secondary School`} />
			<meta
				name='apple-mobile-web-app-title'
				content={`${RouteConfig.Location} | Clayton Secondary School`}
			/>
			<meta name='twitter:title' content={`${RouteConfig.Location} | Clayton Secondary School`} />
		</Helmet>
	);
};
