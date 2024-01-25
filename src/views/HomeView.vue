<template>
  <div class="home">
    <div class="cover">

      <img src="https://th.bing.com/th/id/OIP.eTq8pVm5C83Y4X40F0hhhwHaEj?pid=ImgDet&w=1024&h=630&rs=1" alt="">

      <div class="text-cover">
        <h1>Naruto</h1>
        <p>Naturo, in its boundless beauty, is a source of perpetual inspiration and solace. From the majestic mountains
          that touch the sky to the serene meadows adorned with vibrant wildflowers, nature encompasses a diverse tapestry
          of life.</p>
      </div>

    </div>
    <movies />
  </div>
</template>
<script>
import movies from '@/components/movies.vue';
export default {
  name: 'HomeApp',
  components: {
    movies
  }
};
</script>
<style scoped>
.home {
  position: absolute;
  left: 0;
  transform: translateY(10px);
  width: 100%;
}

.cover {
  position: relative;
}

.cover img {
  width: 100%;
  height: 65vh;
}

.text-cover {
  height: 50%;
  position: absolute;
  top: 50%;
  color: white;
  background-color: #00000078;
  padding: 30px 0px 0 30px
}

.text-cover p {
  max-width: 85%;
}

@media (min-width:992px) {
  .text-cover p {
    max-width: 50%;
    line-height: 2;
  }
}
</style>
