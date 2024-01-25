<template>
    <div class="cont-del">
        <div class="movie-details">
            <h2 v-if="mo.Title">{{ mo.Title }}</h2>
            <p v-if="mo.Year">{{ mo.Year }}</p>
            <div class="conmov d-flex ">
                <img :src="mo.Poster" alt="" v-if="mo.Poster">
                <p v-if="mo.Plot">{{ mo.Plot }}</p>
            </div>
        </div>
    </div>
</template>
<script>
// import { onBeforeMount } from 'vue';
// import { useRoute } from 'vue-router';
export default {
    name: "MovieDetails",
    data() {
        return {
            mo: {}
        };
    },
    beforeRouteEnter(to, from, next) {
        const ApiKey = "b87e2bb0";
        const movieId = to.params.id;

        fetch(`http://www.omdbapi.com/?apikey=${ApiKey}&i=${movieId}&plot=full`)
            .then(result => result.json())
            .then(data => {
                next(vm => {
                    vm.mo = data;
                });
                console.log(data);
            })
            .catch(error => {
                console.error(error);
                // Handle error
            });
    }
};
</script>


<style scoped>
.cont-del {
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 50px;
}

.movie-details {
    color: aliceblue;
}

h2 {
    font-size: 45px;
    font-family: cursive;
}

p {
    color: rgba(240, 248, 255, 0.745);
}

img {
    width: 300px;
    border-radius: 6px;
}

.conmov p {
    padding-left: 33px;
    place-self: end;
    line-height: 2;
    font-size: 19px;
}

@media (max-width:768px) {
    img {
        width: 100%;
    }

    .conmov {
        flex-direction: column;
    }

    .conmov p {
        padding: 0;
    }
}
</style>
