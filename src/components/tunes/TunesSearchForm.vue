<template>
	<form action="#" @submit.prevent="getMusic()">
		<input v-model="query" type="text" />
	</form>
</template>

<script>
import axios from 'axios'
export default {
	data() {
		return {
			query: '',
			songs: [],
			limit: 5
		}
	},
	methods: {
		getMusic() {
			console.log(this.query)

			axios
				.get(
					`https://itunes.apple.com/search
						?term=${encodeURI(this.query)}
						&entity=musicTrack
						&limit=${this.limit}`
				)
				.then(response => {
					let iTunesSongs = response.data.results
						.filter(song => song.kind === 'song')
						.map(song => this.extractData(song))

					this.$emit('add-new-songs', iTunesSongs)
				})
		},
		extractData({
			trackId: id,
			artistName: artist,
			previewUrl: audioFile,
			artworkUrl100: cover,
			trackName: name,
			collectionName: album
		}) {
			return { id, artist, audioFile, cover, name, album }
		}
	}
}
</script>

<style lang="scss" scoped></style>
