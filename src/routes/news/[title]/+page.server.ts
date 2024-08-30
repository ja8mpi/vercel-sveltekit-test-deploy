import { Octokit } from 'octokit';

export const load = async ({ fetch, params }) => {
	const { title } = params;
	try {
		// Create Octokit instance with your GitHub Personal Access Token (PAT)
		const octokit = new Octokit();

		// Fetch the HTML content from the repository
		const response = await octokit.rest.repos.getContent({
			owner: 'GalacticSyndicateGames', // Your GitHub username
			repo: 'azure-swa-sveltekit-content', // Your repository name
			path: `public/news/list/${title}.html` // Path to your HTML file
		});

		// Decode the base64 content to get the HTML
		const htmlContent = Buffer.from(response.data.content, 'base64').toString('utf8');
		// Return the HTML content so it can be used in +page.svelte
		return {
			htmlContent
		};
	} catch (error) {
		console.error('Error loading content:', error);
		return {
			htmlContent: ''
		};
	}
};
