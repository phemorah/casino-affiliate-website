<template>
 <div>{{ child }}</div>
</template>

<script>
export default {
 props: ['casino'],
 data() {
     return {
         child: this.casino.name
     }
 },
 mounted: function(){
    //  console.log(this.casino.id);
 }
}
</script>
