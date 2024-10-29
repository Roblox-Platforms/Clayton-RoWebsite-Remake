import Footer from '@components/Footer';
import RouteTags from '@components/Meta/RouteTags';
import Quote from '@components/Quote';
import Slideshow from '@components/Slideshow';

export default (PageConfig: { Location: string; Description?: string }) => {
	return (
		<div>
			<div style={{ paddingLeft: '16px', paddingRight: '16px', marginBottom: '30px' }}>
				<RouteTags Location={PageConfig.Location} Description={PageConfig.Description} />
				<Slideshow />
				<h1 style={{ marginBottom: '15px' }}>Welcome to Clayton</h1>
				<hr />
				<p style={{ fontSize: '16px' }}>
					<span style={{ fontSize: '15px' }}>
						Clayton Secondary School is a leading Ro-School, outperforming its
						fellow groups in almost all measurements, including teaching quality,
						pastoral provisions, session statistics, and campus modernity &
						facilities. We pride ourselves in the welcoming environment we provide
						to students, alongside the support we offer to those who may have a more
						difficult time in a traditional classroom setting.
					</span>
					<br />
					<br />
					Our school incorporates a multitude of specialist schemes to delivery high
					quality lessons and effective student behavioural & pastoral support. We strive
					to make sure each student is included and accounted for, leaving no-one behind
					regardless of ability or background.
				</p>
				<Quote speaker='Mr A Wentworth' role='Executive Headteacher'>
					Clayton Secondary School is a school of community, ambition and growth. Clayton
					is a platform to socialise with new people, collaborate interests, and being a
					part of something great.
				</Quote>
				<h1 style={{ marginBottom: '15px' }}>School Information</h1>
				<hr />
				<p style={{ fontSize: '16px' }}>
					<span style={{ fontSize: '15px' }}>
						We are a community school based in the Greater Manchester area with our
						present campus - Version 3 - being constructed by Estates manager Mr L
						Evans with heavy inspiration from the real-life Harrop Fold School (now
						Lowry Academy). As of October 2024, our Version 4 campus is under
						construction and is yet to be revealed to the public.
					</span>
					<br />
					<br />
					Our Senior Leadership Team (more commonly referred to as "SLT") comprises
					industry experts who specialise in their respective fields. Below you can find
					all SLT members, their ranks, and sub-roles.
				</p>
				<ul style={{ listStyleType: 'none', fontSize: '15px' }}>
					<li>
						Executive Headteacher <b>Mr A Wentworth</b> (Whole School Oversight)
					</li>
					<li>
						Headteacher <b>Mr R Walker</b> (Whole School Management)
					</li>
					<li>
						Deputy Headteacher <b>Miss M Adair</b> (Designated Safeguarding Lead &
						Pastoral Lead)
					</li>
					<li>
						Deputy Headteacher <b>Mr C Chavez</b> (Staffing Lead & Teaching and
						Learning)
					</li>
					<li>
						Assistant Headteacher <b>Mr A White</b> (Behaviour Lead)
					</li>
					<li>
						Associate Headteacher <b>Mr A Brooksbank</b> (Sixth Form Coordinator &
						Engagement Lead)
					</li>
					<li>
						Associate Headteacher <b>Miss R Rhodes</b> (Deputy Designated
						Safeguarding Lead)
					</li>
					<li>
						Estates Manager <b>Mr L Evans</b> (School Development & Maintenance)
					</li>
				</ul>

				<p style={{ fontSize: '16px' }}>
					Our academic sessions occur daily (with few exceptions) at 18:40 BST/GMT. Each
					session lasts 1 hour and 20 minutes and consists of 4 periods, form time, lunch,
					and a smaller break. Below is a timetable for each academic session.
				</p>
				<ul style={{ listStyleType: 'none', fontSize: '16px' }}>
					<li>
						<b>18:40</b> ... Student Arrival
					</li>
					<li>
						<b>18:50</b> ... Form
					</li>
					<li>
						<b>19:00</b> ... Period 1
					</li>
					<li>
						<b>19:10</b> ... Period 2
					</li>
					<li>
						<b>19:20</b> ... Break
					</li>
					<li>
						<b>19:30</b> ... Period 3
					</li>
					<li>
						<b>19:40</b> ... Lunch
					</li>
					<li>
						<b>19:50</b> ... Period 4
					</li>
					<li>
						<b>20:00</b> ... End of Day (clubs may run)
					</li>
				</ul>
				<b style={{ fontSize: '15px' }}>
					Further information regarding topics such as alliances, partnerships and
					extra-curricular activities, and vacancies may be found in other areas of this
					site or our communications server.
				</b>
			</div>
			<Footer />
		</div>
	);
};
