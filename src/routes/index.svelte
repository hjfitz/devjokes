<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import {getJoke} from '../jokes/get-joke';

	const joke = getJoke()
	let answerShown = false
	function toggleAnswer() {
		answerShown = true
	}
</script>

<h1>DevJokes</h1>
<p>{joke.question}</p>
{#if answerShown}
	<p>{joke.answer}</p>
{:else}
	<button on:click={toggleAnswer}>Show answer</button>
{/if}

