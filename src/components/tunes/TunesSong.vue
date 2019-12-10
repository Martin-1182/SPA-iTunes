<template>
	<article class="tunes-song">
		<div v-if="song.cover">
			<img :src="song.cover" alt="Album cover image" />
		</div>
		<p>
			<strong>{{ song | songify }}</strong>
		</p>
		<figure v-if="song.audioFile">
			<figcaption>Listen to the T-Rex:</figcaption>
			<audio controls :src="song.audioFile"></audio>
		</figure>
	</article>
</template>

<script>
export default {
	props: {
		song: {
			type: Object
		}
	},
	filters: {
		songify: function(song) {
			return song.artist + ' - ' + song.name
		}
	}
}
</script>

<style lang="scss" scoped>
.tunes-song {
	margin-bottom: 3em;
}
</style>
