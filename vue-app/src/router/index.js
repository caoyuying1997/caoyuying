import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '../views/Movie.vue'
import movieDetails from '../views/movieDetails.vue'
import Music from '../views/Music.vue'
import musicDetails from '../views/musicDetails.vue'
import Book from '../views/Book.vue'
import Photo from '../views/Photo.vue'
import photoDetails from '../views/photoDetails.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Movie',
    component: Movie
  },
  {
    path:"/movieDetails/:id",
    name:'moviedetails',
    component: movieDetails
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
  },
  {
    path:'/musicdetails',
    name:'musicDetails',
    component:musicDetails
  },
  {
    path: '/book',
    name: 'Book',
    component: Book
  },
  {
    path: '/photo',
    name: 'Photo',
    component: Photo
  },
  {
    path:'/photodetails/:index',
    name:'photoDetails',
    component:photoDetails

  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
