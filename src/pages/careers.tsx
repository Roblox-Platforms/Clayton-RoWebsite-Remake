import Footer from '@components/Footer';
import RouteTags from '@components/Meta/RouteTags';
import StaffQuote from '@components/StaffQuote';

export default (PageConfig: { Location: string; Description?: string }) => {
	return (
		<div>
			<RouteTags Location={PageConfig.Location} Description={PageConfig.Description} />
			<div style={{ paddingLeft: '16px', paddingRight: '16px' }}>
				<h1 style={{ marginTop: '15px', marginBottom: '15px' }}>Careers at Clayton</h1>
				<hr />
				<p style={{ fontSize: '16px' }}>
					Clayton Secondary School is one of the best employers in the Ro-Schooling
					industry, providing unmatched facilities to staff that create the perfect
					environment for them to excel in their fields and build skills brick by brick.
					We offer a range of vacancies at any given time, with positions in teaching and
					educating, to supporting students and assisting with their personal issues, or
					even running an entire department.
				</p>
			</div>
			<StaffQuote speaker='Mr S Loxton' image='Loxton' role='Qualified Teacher' direction='left'>
				I think Clayton is one of the best places to work at, mainly because of the Senior
				Leadership Team - it's one of the best and they are extremely understanding &
				supportive. The school's realism outpaces almost every other school on the platform.
			</StaffQuote>
			<br />
			<br />
			<StaffQuote speaker='Mr J Kelly' image='Kelly' role='Head of Year' direction='right'>
				In my opinion, Clayton is by far the best Ro-School on the platform, as not only the
				SLT, but the staff, are so dedicated to providing the best quality education to
				everyone. The realism is absolutely amazing, and each individual is so polite to each
				other - that's what makes Clayton a true community.
			</StaffQuote>

			<div style={{ paddingLeft: '16px', paddingRight: '16px' }}>
				<h1 style={{ marginTop: '15px', marginBottom: '15px' }}>Information about Applying</h1>
				<hr />
				<p style={{ fontSize: '16px' }}>
					Applications at Clayton are only open at certain periods, and there are some
					basic requirements to apply. After applying, you are likely subject to taking a
					training course or other examination. Below are some application requirements.
				</p>
				<ul style={{ fontSize: '14px' }}>
					<li>
						You must be in the communications (discord) server. It is used for all
						non-session affairs & communications
					</li>
					<li>You must be in our Roblox group so you may be eligible to be ranked</li>
					<li>Your account must be over 30 days old</li>
					<li>You must not have a staff blacklist</li>
					<li>You must not be banned from both the game & communications server</li>
					<li>You must be capable of using full grammar and proper English</li>
					<li>You must generally show competency and common sense</li>
					<li>
						For higher up positions, such as Head of Department, some previous
						experience may be required when applying
					</li>
				</ul>
				<br />
			</div>
			<div
				style={{
					backgroundColor: '#33578c',
					paddingTop: '10px',
					paddingLeft: '20px',
					paddingRight: '20px',
					paddingBottom: '60px',
					color: '#ffffff',
					fontSize: '20px',
					fontStyle: 'italic',
				}}>
				<span style={{ fontSize: '30px', fontWeight: '300' }}>Ready to apply?</span>
				<br />
				Join our communications server: <b>gg/claytonsch</b>
			</div>
			<Footer />
		</div>
	);
};
