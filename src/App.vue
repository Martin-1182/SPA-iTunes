<template>
	<div id="app">
		<header>
			<div class="top-nav">
				<div class="nav-logo">
					<img src="./assets/Logo.png" alt="logo" />
				</div>
				<the-navigation />
			</div>
		</header>

		<main class="content">
			<router-view />
		</main>
	</div>
</template>
<script>
import TheNavigation from '@/components/TheNavigation.vue'

export default {
	components: {
		TheNavigation
	}
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
.top-nav {
	display: flex;
	justify-content: space-between;
	img {
		height: 60px;
		padding: 0 1.2em;
		margin: 2em 2.5em;
		display: inline-block;
		vertical-align: middle;
		background: transparent;
		white-space: nowrap;
	}
}
@media only screen and (max-width: 992px) {
	.top-nav {
		display: block;
		img {
			height: 50px;
			margin-bottom: 0;
		}
	}
}
</style>
