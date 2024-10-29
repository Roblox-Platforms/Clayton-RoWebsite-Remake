import Footer from '@components/Footer';
import RouteTags from '@components/Meta/RouteTags';

export default (PageConfig: { Location: string; Description?: string }) => {
	return (
		<div>
			<RouteTags Location={PageConfig.Location} Description={PageConfig.Description} />
			<div style={{ paddingLeft: '16px', paddingRight: '16px' }}>
				<h1 style={{ marginTop: '15px', marginBottom: '15px' }}>Contacting Us</h1>
				<hr />
				<p style={{ fontSize: '16px' }}>
					We understand that you may have further questions, inquiries or perhaps
					complains that cannot be addressed on the remainder of the hub, or on-campus.
					Listed below is our main points of contact.
				</p>
				<ul style={{ listStyleType: 'none', fontSize: '15px' }}>
					<li>
						<b>gg/claytonsch</b> Communications Server
					</li>
					<li>
						<b>roblox.com/groups/17077801</b> Roblox Group
					</li>
				</ul>
				<p style={{ fontSize: '16px' }}>
					If you cannot contact us via either method, please refer to the below contact
					form.
				</p>
				<h1 style={{ marginTop: '15px', marginBottom: '15px' }}>Contact Form</h1>
				<hr style={{ marginBottom: '15px' }} />
				<form action='' style={{ paddingLeft: '10px', paddingRight: '35px' }}>
					<input
						name='username'
						id='username'
						type='text'
						placeholder='Your Roblox Username'
						style={{ width: '100%', marginBottom: '12px' }}
					/>
					<input
						name='subject'
						id='subject'
						type='text'
						placeholder='Subject (e.g. Job Question, Complaint)'
						style={{ width: '100%', marginBottom: '12px' }}
					/>
					<textarea
						name='description'
						id='description'
						placeholder='Description'
						style={{
							width: '100%',
							height: '200px',
							marginBottom: '5px',
						}}
					/>
					<input
						name='extra'
						id='extra'
						type='text'
						placeholder='Other Information'
						style={{ width: '100%' }}
					/>
					<p
						style={{
							fontStyle: 'italic',
							lineHeight: '17px',
							fontSize: '16px',
							marginBottom: '0',
						}}>
						If you wish to be contacted back via Roblox, please ensure your messages
						are open to everyone in your privacy settings. If you wish to be
						contacted back via another app, please provide the respective username
						and app name.
					</p>
					<i style={{ fontSize: '15px', marginTop: '10px' }}>
						Do NOT submit sensitive information through this form.
					</i>
					<div
						style={{
							justifyContent: 'right',
							alignItems: 'right',
							alignContent: 'right',
							justifyItems: 'right',
							display: 'flex',
						}}>
						<button>Submit</button>
					</div>
				</form>
			</div>
			<br />
			<br />
			<br />
			<Footer />
		</div>
	);
};
