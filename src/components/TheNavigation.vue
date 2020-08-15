<template>
	<div class="navigation">
		<router-link to="/">Home</router-link>
		<router-link to="/tunes">Tunes</router-link>
		<router-link to="/about">About</router-link>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navigation {
	padding: 0 1.2em;
	margin: 2em 2.5em;
	display: inline-block;
	vertical-align: middle;
	background: transparent;
	white-space: nowrap;
	border: 3px solid whitesmoke;
	border-radius: 2.5em;

	a {
		font-weight: 800;
		font-size: 1.1em;
		text-decoration: none;
		color: whitesmoke;
		padding: 0.575em 0.65em;
		display: inline-block;
		&.router-link-exact-active {
			color: #f0aae4;
		}
	}
}
</style>
