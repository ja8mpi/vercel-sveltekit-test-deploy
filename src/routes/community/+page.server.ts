export const load = async ({ fetch }) => {
	const response = await fetch('https://discord.com/api/guilds/1276132679196344341/widget.json');

	const data = await response.json();
	return {
		name: data.name,
		onlineCount: data.members.filter((m) => m.status === 'online').length,
		memberCount: data.members.length,
		inviteLink: data.instant_invite
	};
};
