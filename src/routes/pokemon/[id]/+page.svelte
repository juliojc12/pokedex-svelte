<script>
	import { pokemon } from '../../../stores/pokestore.js';
	import Nav from '../../../components/nav.svelte';

	console.log(pokemon);
</script>

<svelte:head>{pokemon}</svelte:head>
<Nav />
<div />
