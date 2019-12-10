<template>
	<ul class="tunes-list">
		<li>
			<tunes-song v-for="song in newSongs" :key="song.id" :song="song" />
		</li>
	</ul>
</template>

<script>
import TunesSong from '@/components/tunes/TunesSong'
export default {
	components: {
		TunesSong
	},
	props: ['new-songs']
}
</script>

<style lang="scss" scoped>
ul {
	margin-top: 3em;
	padding-left: 0;
	list-style: none;
}
</style>
