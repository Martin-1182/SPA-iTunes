<template>
	<div class="home">
		<img alt="iTunes logo" src="../assets/iTunes-logo.png" height="150" />
		<hello-world msg="Welcome to Your Vue.js App" />
		<tunes-song class="mt-5" :song="song" />
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/home/HelloWorld.vue'
import TunesSong from '@/components/tunes/TunesSong.vue'

export default {
	name: 'home',
	components: {
		HelloWorld,
		TunesSong
	},
	data() {
		return {
			song: {
				id: 339399242,
				artist: 'Them Crooked Vultures',
				audioFile:
					'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/d2/42/38/mzm.aykywjep.aac.p.m4a',
				cover:
					'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/8b/5b/ea/8b5bea91-f6b0-5255-9d38-3af2cec832ec/source/100x100bb.jpg',
				name: 'No One Loves Me & Neither Do I',
				album: 'Them Crooked Vultures (Bonus Track Version)'
			}
		}
	}
}
</script>
