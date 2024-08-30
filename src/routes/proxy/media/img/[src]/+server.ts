import { error } from '@sveltejs/kit';

export async function GET({ params }) {
	console.log('HIT PROXY');
	const { src } = params; // Get the image filename from the URL
	const token = import.meta.env.VITE_GITHUB_PAT; // Your GitHub personal access token
	const imageUrl = `https://raw.githubusercontent.com/ja8mpi/test-node-server/master/public/${src}`; // Construct the image URL

	try {
		const response = await fetch(imageUrl, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}` // Use the token in the Authorization header
			}
		});
		console.log(response);

		// if (!response.ok) {
		// 	throw new Error(`Failed to fetch image: ${response.status}`);
		// }

		const imageBlob = await response.blob(); // Get the image as a blob
		const contentType = response.headers.get('Content-Type'); // Get the content type from headers

		// Return the image blob as a response with the appropriate content type
		return new Response(imageBlob, {
			headers: {
				'Content-Type': contentType, // Return the correct content type
				'Cache-Control': 'max-age=300' // Optional: Set caching headers
			}
		});
	} catch (err) {
		console.error(err);
		throw error(500, 'Unable to fetch image');
	}
}
