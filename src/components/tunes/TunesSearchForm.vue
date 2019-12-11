<template>
	<form action="#" @submit.prevent="getMusic()">
		<input
			v-model="query"
			ref="searchInput"
			type="text"
			@keyup="search()"
		/>
	</form>
</template>

<script>
import axios from 'axios'
import { debounce } from 'lodash-es'
export default {
	data() {
		return {
			query: '',
			songs: [],
			limit: 5
		}
	},
	methods: {
		search: debounce(function() {
			this.getMusic()
		}, 300),
		getMusic() {
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
				.catch(error => {
					console.log(error)
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
	},
	mounted() {
		this.$refs.searchInput.focus()
	}
}
</script>

<style lang="scss" scoped>
input {
	display: block;
	margin: 0 auto;
	width: 32%;
	padding: 0.5em;
	font-size: 1.5em;
	font-weight: 700;
	border-radius: 0.59em;
	box-sizing: border-box;
	appearance: none;
	background: {
		image: url('../../assets/loupe.svg');
		repeat: no-repeat;
		position-y: 50%;
		position-x: 95%;
		size: 1.69em;
	}
}
textarea:focus,
input:focus {
	outline: none;
}
@media screen and (max-width: 1400px) {
	input {
		display: block;
		width: 57%;
		font-size: 1.15em;
		margin: 0 auto;
	}
}
@media screen and (max-width: 690px) {
	input {
		display: block;
		width: 68%;
		font-size: 1.15em;
		margin: 0 auto;
	}
}
@media screen and (max-width: 450px) {
	input {
		display: block;
		width: 88%;
		font-size: 1.15em;
		margin: 0 auto;
	}
}
</style>
