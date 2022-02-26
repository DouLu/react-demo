import { useContext, useEffect, useState } from 'react';
import { MyContext, ThemeContext } from './context';

const HooksDemo = () => {
	// 1. 单值状态
	const [count, setCount] = useState(0);
	// 2. 复杂对象值状态
	const [productInfo, setProductInfo] = useState({
		baseInfo: {
			id: 1,
			name: 'product name',
			date: '1999-01-01'
		},
		relations: {
			p1: [
				{ id: 1, name: 'p1' },
				{ id: 2, name: 'p2' }
			],
			p2: [
				{ id: 3, name: 'p3' },
				{ id: 4, name: 'p4' }
			]
		}
	});

	// componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
	// 传递给 useEffect 的函数在每次渲染中都会有所不同
	useEffect(() => {
		console.log(
			'2. render dom after or update dom',
			new Date().toLocaleString()
		);
		// 1. 不需要清除的effect操作，如初始化数据请求等
		document.title = `You clicked ${count} times`;

		let timer = setInterval(() => {
			console.log('timer', new Date().toLocaleString());
		}, 1000);
		// 2. 需要清除的effect操作，如定时器、订阅消息等
		return () => {
			// 清除函数，用来清理定时器、订阅消息等操作
			clearInterval(timer);
		};
	}, [count]); // 3. 传递数组，表示当前effect操作依赖的状态

	console.log('1. before render dom', new Date().toLocaleString());

	// useContext 的参数必须是 context 对象本身 - 错误： useContext(MyContext.Consumer)
	const themes = useContext(ThemeContext);
	const language = useContext(MyContext);
	return (
		<div>
			<div>
				useState
				<div>
					单值数据的状态
					<div>
						count: {count}
						<button
							onClick={() => {
								setCount((preSate) => preSate + 1);
							}}
						>
							add count
						</button>
					</div>
				</div>
				<div>
					对象或数组的状态
					<div>
						<p>{JSON.stringify(productInfo)}</p>
						<button
							onClick={() => {
								setProductInfo((pre) => ({
									...pre,
									baseInfo: { ...pre.baseInfo, name: 'new name' }
								}));
							}}
						>
							update name
						</button>
					</div>
				</div>
				<p>
					<a href="https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state">
						1. 如何获取更新前的props和state?
					</a>
				</p>
			</div>
			<div>
				useContext
				<div>
					ThemeContext
					{JSON.stringify(themes)}
				</div>
				<div>
					MyContext
					{language.language}
					<button
						onClick={() => {
							language.changeLanguage('zh');
						}}
					>
						switch language
					</button>
				</div>
			</div>
		</div>
	);
};

export default HooksDemo;
