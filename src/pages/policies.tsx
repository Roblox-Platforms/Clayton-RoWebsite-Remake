import RouteTags from '@components/Meta/RouteTags';

export default (PageConfig: { Location: string; Description?: string }) => {
	return (
		<div>
			<div style={{ paddingLeft: '16px', paddingRight: '16px' }}>
				<RouteTags Location={PageConfig.Location} Description={PageConfig.Description} />
				<h1 style={{ marginTop: '15px', marginBottom: '15px' }}>Policies</h1>
				<hr />
				This page is incomplete and will be finished at a later date. You'll be able to find the
				school's policies here.
			</div>
		</div>
	);
};
