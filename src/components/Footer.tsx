import DofELogo from '@content/DofE-Logo-2008.png';
import { ReactComponent as Logo } from '@content/OfstedGoog.svg';
import STEMLogo from '@content/STEM_Clubs_Silver+1.png';
import IQMLogo from '@content/iqm-inclusive-school-award.png';

export default () => (
	<div>
		<div style={{ backgroundColor: '#ebebeb', width: '100%', height: '400px' }}></div>
		<div
			style={{
				backgroundColor: '#33578c',
				paddingTop: '40px',
				paddingLeft: '40px',
				paddingRight: '40px',
				paddingBottom: '30px',
				color: '#ffffff',
				fontSize: '15px',
				fontWeight: '300',
			}}>
			<b style={{ fontWeight: '600' }}>CLAYTON SECONDARY SCHOOL</b>
			<br />
			<br />
			Executive Headteacher: Mr A Wentworth
			<br />
			Headteacher: Mr R Walker
			<br />
			<br />
			gg/claytonsch
			<br />
			<br />© Clayton Secondary School | Site By Eden Kneale - Designed by Lewis Evans
		</div>
		<div style={{ padding: '16px', display: 'flex' }}>
			<Logo style={{ height: '100px' }} />
			<div
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					height: '100px',
					alignContent: 'center',
					flexGrow: 1,
					display: 'flex',
					gap: '30px',
				}}>
				<img src={DofELogo} style={{ height: '70px' }} />
				<img src={STEMLogo} style={{ height: '70px' }} />
				<img src={IQMLogo} style={{ height: '70px' }} />
			</div>
		</div>
	</div>
);
