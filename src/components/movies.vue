<template>
    <div class="app">
        <div class="form ">
            <b-container class="d-flex justify-content-center">
                <form @submit.prevent="searchMovies" class="d-flex justify-content-center w-60">
                    <b-form-input v-model="search" placeholder="Search..."></b-form-input>
                    <button type="submit"><i class='fa fa-search'></i></button>

                </form>
            </b-container>
        </div>
        <b-container>
            <div class="movies">
                <div v-for="(mov) in movies" :key="(mov.imdbID)">
                    <router-link :to="'/movie/' + mov.imdbID">
                        <div class="pro">
                            <img :src="mov.Poster" alt="" />
                            <div class="type">{{ mov.Type }}</div>
                            <div class="det">
                                <p class="tit">{{ mov.Title }}</p>
                                <p class="year">{{ mov.Year }}</p>
                            </div>
                        </div>



                    </router-link>
                </div>
            </div>
        </b-container>
    </div>
</template>
<style scoped>
.type {
    width: 34%;
    position: absolute;
    bottom: 97px;
    background-color: #44645b;
    padding: 15px;
    color: white;
    text-transform: uppercase;
    border-radius: 0 10px 10px 0;
}

.det {
    border-radius: 0 0 10px 10px;
    padding: 5px;
    position: absolute;
    background-color: #44645b;
    color: white;
    top: 80%;
    transform: translateY(-35%);
    min-height: 149px;
}

.tit {
    font-size: 18px;
    max-width: 70%;
}

.year {
    color: #a8a7a7;

}

form {
    margin-top: 10px;
    width: 60%;
}

.form button {
    border-radius: 0 10px 10px 0;
    width: 50px;
    border: 1px solid #00000030;
    background-color: #44645b;
    color: white;
    font-size: 19px;
    height: 40px;
}

.movies {
    position: relative;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 50px;
}

.movies div {
    align-items: center;
    position: relative;
    max-width: 220px;
}

.movies img {
    width: 220px;
    height: 300px;
}
</style>
<script>
import { ref } from 'vue';
export default {
    name: 'app',
    setup() {
        const search = ref("");
        const movies = ref([]);
        const ApiKey = "b87e2bb0";
        const searchMovies = () => {
            if (search.value != "") {
                fetch(`http://www.omdbapi.com/?apikey=${ApiKey}&s=${search.value}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        // this.yesd = false
                        movies.value = data.Search;
                        search.value = ""
                    }).catch(error => {

                        console.error(error)
                    })
            }
        }
        return {
            search,
            movies, searchMovies,

        }
    },
}

</script>
