<template>
	<div>
		<h1>Tunes</h1>
		<tunes-search-form @add-new-songs="songs = $event" />
		<tunes-list :new-songs="songs" />
	</div>
</template>

<script>
import TunesSearchForm from '@/components/tunes/TunesSearchForm'
import TunesList from '@/components/tunes/TunesList'

export default {
	data() {
		return {
			songs: []
		}
	},

	components: {
		TunesSearchForm,
		TunesList
	}
}
</script>

<style lang="scss" scoped>
li {
	list-style-type: none;
}
</style>
