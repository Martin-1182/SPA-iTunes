<template>
	<article class="tunes-song">
		<div class="card mb-3" style="width: 520px;">
			<div class="row no-gutters">
				<div class="col-md-4" v-if="song.cover">
					<img
						:src="song.cover"
						class="card-img"
						alt="Album cover image"
					/>
				</div>
				<div class="col-md-8">
					<div class="card-body">
						<h3 class="card-title">
							{{ song.artist }}
						</h3>
						<figure v-if="song.audioFile">
							<figcaption class=" mb-2">
								{{ song.name }}
							</figcaption>
							<audio
								class="shadow"
								controls
								:src="song.audioFile"
							></audio>
						</figure>
					</div>
				</div>
			</div>
		</div>
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
.card-img {
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.card {
	background-color: #252525;
	display: block !important;
	margin: 0 auto 2em !important;
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
