<template>
	<transition name="fade">
		<article v-cloak class="tunes-song">
			<div class="card mb-3" style="max-width: 600px;">
				<div class="row no-gutters">
					<div class="col-md-4" v-if="song.cover">
						<img
							:src="song.cover"
							class="card-img shadow"
							alt="Album cover image"
						/>
					</div>
					<div class="col-md-8">
						<div class="card-body pb-0">
							<h3 class="card-title">
								{{ song.artist | shorten(25) }}
							</h3>
							<figure v-if="song.audioFile">
								<figcaption>
									{{ song.name | shorten(18) }}
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
	transition: 0.2s;
}
.card-img {
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
	@media screen and (max-width: 450px) {
		height: fit-content;
		width: fit-content;
	}
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
	@media screen and (max-width: 450px) {
		padding-top: 1em;
		margin: 2em 0.4em 2em !important;
		background: {
			position-y: 1.2%;
			position-x: 98.9%;
			size: 2em;
		}
		.card-title {
			font-size: 1.3em;
		}
		figcaption {
			font-size: 0.7em;
		}
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
