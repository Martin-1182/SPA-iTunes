<template>
	<ul class="tunes-list">
		<tunes-list-song v-for="song in newSongs" :key="song.id" :song="song" />
	</ul>
</template>

<script>
import TunesListSong from '@/components/tunes/TunesListSong'
export default {
	components: {
		TunesListSong
	},
	props: ['new-songs']
}
</script>

<style lang="scss" scoped></style>
