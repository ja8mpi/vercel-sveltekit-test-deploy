import { Octokit } from 'octokit';
import * as cheerio from 'cheerio';

export const load = async () => {
	try {
		// Create Octokit instance with your GitHub Personal Access Token (PAT)
		const octokit = new Octokit();

		// Fetch the HTML content from the repository
		const response = await octokit.rest.repos.getContent({
			owner: 'GalacticSyndicateGames', // Your GitHub username
			repo: 'azure-swa-sveltekit-content', // Your repository name
			path: 'public/news/news.html' // Path to your HTML file
		});

		// Decode the base64 content to get the HTML
		const htmlContent = Buffer.from(response.data.content, 'base64').toString('utf8');

		// Return the modified HTML content
		return {
			htmlContent: htmlContent
		};
	} catch (error) {
		console.error('Error loading content:', error);
		return {
			htmlContent: ''
		};
	}
};
