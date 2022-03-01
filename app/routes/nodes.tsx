import { Outlet } from 'remix';

export default function NodesRoute() {
	return (
		<div>
			<p>Nodes Route</p>
			<main>
				<Outlet />
			</main>
		</div>
	);
}
