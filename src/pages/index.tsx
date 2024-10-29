import RouteTags from '@components/Meta/RouteTags';

export default (PageConfig: { Location: string; Description?: string }) => {
	return (
		<div>
			<RouteTags Location={PageConfig.Location} Description={PageConfig.Description} />
			<button>Submit</button>
		</div>
	);
};
