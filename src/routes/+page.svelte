<script>
	import '../app.css';
	import { pokemon } from '../stores/pokestore';
	import Nav from '../components/nav.svelte';
	import PokemonCard from '../components/pokemonCard.svelte';
</script>

<Nav />

<svelte:head>
	<title>Pokedex - Svelte</title>
</svelte:head>
<div class="flex justify-center">
	<h1
		class=" text-2xl py-10 text-[32px] font-extrabold bg-instagram-gradient text-transparent bg-clip-text"
	>
		SvelteKit - Pokedex
	</h1>
</div>
<div class="max-w-[1900px] mx-auto">
	<div class="flex justify-center flex-wrap mx-8 p-10 gap-4">
		{#each $pokemon as poke}
			<PokemonCard pokemon={poke} />
		{/each}
	</div>
</div>
