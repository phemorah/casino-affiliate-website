<template>
     <!-- Promo Offer -->
    <Promo />
    <!-- Intro -->
    <About />
    <!-- Brands -->
    <Brands />
</template>

<script>
import About from './About'
import Brands from './Brands'
import Promo from './Promo'

export default {
    name: "Home",
    components: {
        About,
        Brands,
        Promo,
    }
}
</script>

<style>

</style>
