import ForceGraph, { GraphData } from 'react-force-graph-3d';

import {
	CSS2DRenderer,
	CSS2DObject,
} from 'three/examples/jsm/renderers/CSS2DRenderer';
import '~/styles/graphLabel.css';

export default function Map(data: GraphData) {
	const extraRenderers: any = [new CSS2DRenderer()];
	const backgroundColor = '#F5F5F4';

	return (
		<ForceGraph
			extraRenderers={extraRenderers}
			graphData={data}
			backgroundColor={backgroundColor}
			enableNodeDrag={false}
			nodeOpacity={1}
			nodeLabel={() => ''}
			nodeThreeObjectExtend={true}
			nodeThreeObject={(node: any) => {
				const nodeLabel = document.createElement('div');
				nodeLabel.textContent = node.name;
				nodeLabel.style.color = node.color;
				nodeLabel.className = 'graph-label';
				return new CSS2DObject(nodeLabel);
			}}
			linkWidth='width'
			linkOpacity={1}
			linkDirectionalArrowLength={7}
			linkLabel={() => ''}
		/>
	);
}
