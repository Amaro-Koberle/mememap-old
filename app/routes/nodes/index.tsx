import Map from '~/components/map';

export default function NodesIndexRoute() {
	const graphData = {
		nodes: [
			{ id: 1, name: 'Node 1', content: 'Node 1 content', color: '#FF0000' },
			{ id: 2, name: 'Node 2', content: 'Node 2 content', color: '#00FF00' },
			{ id: 3, name: 'Node 3', content: 'Node 3 content', color: '#0000FF' },
		],
		links: [
			{ source: 1, target: 2, value: 1 },
			{ source: 2, target: 3, value: 1 },
			{ source: 3, target: 1, value: 1 },
		],
	};

	return (
		<div>
			<p>Map:</p>
			<Map graphData={graphData} />
		</div>
	);
}
