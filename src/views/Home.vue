<template>
	<div class="home">
		<img alt="iTunes logo" src="../assets/iTunes-logo.png" height="150" />
		<hello-world msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/home/HelloWorld.vue'

export default {
	name: 'home',
	components: {
		HelloWorld
	}
}
</script>
