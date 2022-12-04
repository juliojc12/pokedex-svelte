<script>
	// @ts-nocheck

	/**
	 * @type {{ name: any; }}
	 */
	export let pokemon;
</script>

<div
	class="flex justify-center flex-col border-2 shadow-lg hover:shadow-[#ab7903] hover:bg-zinc-800 box"
>
	<a href={`/pokemon/${pokemon.id}`} class="w-[250px] h-[350px]">
		<img
			src={pokemon.image}
			alt={pokemon.name}
			class="w-[250px] h-[300px] scale-100 hover:scale-125 "
		/>
		<h2 class="text-center text-xl font-bold uppercase">
			{pokemon.id}. {pokemon.name}
		</h2>
	</a>
</div>
