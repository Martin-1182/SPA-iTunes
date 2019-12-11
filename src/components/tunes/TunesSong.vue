<template>
	<transition name="fade">
		<article v-cloak class="tunes-song">
			<div class="card mb-3" style="width: 600px;">
				<div class="row no-gutters">
					<div class="col-md-4" v-if="song.cover">
						<img
							:src="song.cover"
							class="card-img"
							alt="Album cover image"
						/>
					</div>
					<div class="col-md-8">
						<div class="card-body pb-0">
							<h3 class="card-title">
								{{ song.artist | shorten(30) }}
							</h3>
							<figure v-if="song.audioFile">
								<figcaption>
									{{ song.name | shorten(25) }}
								</figcaption>
								<audio
									class="shadow mt-4 mb-0"
									controls
									:src="song.audioFile"
								></audio>
							</figure>
						</div>
					</div>
				</div>
			</div>
		</article>
	</transition>
</template>

<script>
import { truncate } from 'lodash-es'
export default {
	props: {
		song: {
			type: Object
		}
	},
	filters: {
		songify: function(song) {
			return song.artist + ' - ' + song.name
		},

		shorten(str, len = 55) {
			return truncate(str, { length: len })
		}
	}
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.tunes-song {
	position: relative;
	transition: 0.1s;
}
.card-img {
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
}
.card {
	background-color: #252525;
	display: block !important;
	margin: 0 auto 2em !important;
	overflow: hidden;
	background: {
		image: url('../../assets/iTunes-logo.png');
		repeat: no-repeat;
		position-y: 2.6%;
		position-x: 98.9%;
		size: 1.4em;
	}
}
audio {
	border: none;
	border-radius: 2em;
}
audio:focus {
	outline: none;
}
</style>
