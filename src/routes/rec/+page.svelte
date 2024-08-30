<script lang="ts">
	type recData = {
		key: string;
		value: string;
	};

	const data: recData[] = [
		{
			key: 'Certificate type',
			value: 'REC Unbundled'
		},
		{
			key: 'Renewable fuel type',
			value: 'Solar with Storage'
		},
		{
			key: 'Nameplate capacity of project',
			value: '10MW'
		},
		{
			key: 'Project name',
			value: 'SKIC-10'
		},
		{
			key: 'Project vintage',
			value: '2010'
		},
		{
			key: 'Certificate (generation) vintage',
			value: '2024'
		},
		{
			key: 'Certificate unique identification numbert',
			value: 'US04567'
		},
		{
			key: 'Utility to which project is interconnected',
			value: 'Pacific Gas and Electric'
		},
		{
			key: 'RPS',
			value: 'yes'
		},
		{
			key: 'Emissions rate of the renewable resource',
			value: 'Zero'
		}
	];
</script>

<main>
	<div class="relative">
		<img src="/img/rec-hero.png" alt="windmill" />
		<img src="/img/us-map.png" alt="us mind outline" class="absolute top-24 right-12" />
		<img src="/img/location.png" alt="location icon" class="absolute top-20 right-40" />
		<h1 class="text-white text-custom-40 font-akshar absolute top-4 right-12">Kern County, CA</h1>
		<h1 class="text-white text-custom-70 font-akshar absolute bottom-0 left-0 pl-32">
			Where does your energy come from?
		</h1>
	</div>
	<div class="bg-black px-32 py-12 text-white">
		<h2 class="text-6xl">DOE REC # -24-0456789</h2>
		<h3 class="text-4xl">Tracking system ID - US04567</h3>
		<table class="w-full text-5xl">
			<tbody>
				{#each data as item}
					<tr>
						<td class="font-medium bg-custom-gray-dark p-2">{item.key}</td>
						<td class="bg-custom-gray-light p-2">{item.value}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</main>
