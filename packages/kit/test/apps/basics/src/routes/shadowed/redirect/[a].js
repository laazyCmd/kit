export function get() {
	return {
		status: 302,
		headers: {
			location: '/shadowed/redirect/c'
		}
	};
}
