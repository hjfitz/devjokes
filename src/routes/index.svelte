<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import {getJoke} from '../jokes/get-joke';

	const joke = getJoke()
	let answerShown = !joke.answer
	function toggleAnswer() {
		answerShown = true
	}
</script>

<template>
<main>
	<h1>DevJokes</h1>
	<p>{joke.question}</p>

	{#if answerShown}
		<p><strong>{joke?.answer ?? ''}</strong></p>
	{:else}
		<button on:click={toggleAnswer}>Show answer</button>
	{/if}

</main>
</template>
