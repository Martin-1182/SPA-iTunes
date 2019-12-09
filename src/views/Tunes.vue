<template>
	<div>
		<h1>Tunes</h1>
		<form action="#" @submit.prevent="getMusic()">
			<input v-model="query" type="text" />
		</form>
		<ul>
			<li v-for="song in songs" :key="song.id">
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
			</li>
		</ul>
	</div>
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
	filters: {
		songify: function(song) {
			return song.artist + ' - ' + song.name
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
					this.songs = []

					response.data.results.forEach(song => {
						if (song.kind === 'song')
							this.songs.push(this.extractData(song))
					})
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

<style lang="scss" scoped>
li {
	list-style-type: none;
}
</style>
