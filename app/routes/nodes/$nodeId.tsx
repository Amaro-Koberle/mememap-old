import type { LoaderFunction } from 'remix';
import { useLoaderData } from 'remix';
import type { Node } from '@prisma/client';

import { db } from '~/utils/db.server';

type LoaderData = { node: Node };

export const loader: LoaderFunction = async ({ params }) => {
	const node = await db.node.findUnique({
		where: { id: params.nodeId },
	});
	if (!node) throw new Error('Node not found');
	const data: LoaderData = { node };
	return data;
};

export default function NodeRoute() {
	const data = useLoaderData<LoaderData>();
	return (
		<>
			<h1>{data.node.name}</h1>
			<p>{data.node.content}</p>
		</>
	);
}
