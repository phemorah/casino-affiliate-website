<template>
      <!-- Promo Offer -->
    <v-container fluid class="promo">
        <v-main>
            <div class="text-right mr-15" style="margin-top:2%">
              <h1 class="display-2 text-white">Special Offer</h1>
              <h1 class="display-1 text-white">25% Promo</h1>
          </div>
      </v-main>
    </v-container>
</template>

<script>
export default {
    name: "Promo",
}
</script>

<style>
    .promo {
        background: url('/assets/hero-banner.jpg');
        background-size: cover;
        width: 100%;
        /* height: 100vh; */
    }
</style>
