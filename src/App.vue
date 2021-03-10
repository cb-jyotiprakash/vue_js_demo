<template>
 <!--
<div id="app" class="demo">
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
  <span>{{ changeNameSetter() }} {{fullName}}</span>

<hr>
<div  class="demo">
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
</div>

<div class="user" v-for="user in users" :key="user.username"> 
  <p>Username : {{user.username}}</p>
</div>

<hr>
<app-message></app-message>
</div>  -->

<div id="app">
    <h1>Vue Router Demo!</h1>
    <hr>
      <router-link to="/">Home</router-link>
      <router-link to="/Users/10">Users</router-link>
      <!-- <router-link to="/Users/10">Users(teamId 10)</router-link>
      <router-link to="/Users/20">Users(teamId 20)</router-link> -->
    <hr>
    <!-- Reserved Component of Vue -->
    <router-view></router-view>
  </div>

</template>

<script>
import axios from 'axios';
export default {
  //name: 'App',
  data() {
    return {
      author: {
        name: 'John Doe',
        books: ['Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery']
      },
      firstName: "Jyoti",
      lastName: "Prakash",
      question: '',
      answer: 'Questions usually contain a question mark. ;-)',
      users: [{username: 'Max'},{username: 'Chris'}, {username: 'Anna'}]
      
    }
  },

  methods: {

    getAnswer: function() {
      this.answer = 'Thinking...'
      axios
        .get('https://yesno.wtf/api')
        .then(response => {
        this.answer = response.data.answer
      })
        .catch(error => {
        this.answer = 'Error! Could not reach the API. ' + error
      })
    },

  changeNameSetter: function(){
      this.fullName = "Rajan Rao";
    },

  },
  computed: {
    publishedBooksMessage() {
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },

    now() {
    return Date.now();
  },

  fullName: {
    // getter
    get() {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set(newValue) {
      console.log("Setting new name");
      const names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
  },
  watch: {
    // whenever question changes, this function will run
    question(newQuestion, oldQuestion) {
      console.log(oldQuestion)
      if (newQuestion.indexOf('?') > -1) {
        this.getAnswer()
      }
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.user {
  border: 1px solid #ccc;
  background: rgb(221, 210, 210);
  padding: 10px;
}
</style>
