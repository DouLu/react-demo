import { MyContext } from './context';
import HooksDemo from './HooksDemo';

const ParentComponent = () => {
	return (
		<MyContext.Consumer>
			{(context) => {
				return (
					<div>
						<p>language:{context.language}</p>
						<HooksDemo />
					</div>
				);
			}}
		</MyContext.Consumer>
	);
};
export default ParentComponent;
