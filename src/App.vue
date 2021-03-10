<template>
<div>{{ greet }} {{ name }}</div>
<div v-text="channel"></div>
<div v-html="subscribe"></div>
<hr>
<!-- Attribute binding -->
<h2 v-bind:id=headingId>Heading(Attribute binding)</h2>
<button v-bind:disabled="isDisabled">Bind(Attribute binding)</button>
<hr>
<h2>Dynamic CSS examples</h2>
<h2 class="underline"> Underlined text </h2>
<h2 class="underline" v-bind:class="status"> Status </h2>
<!-- Expression binding -->
<h2 v-bind:class="isPromoted && 'promoted'">Promoted</h2>
 <!-- Conditional class binding -->
<h2 v-bind:class="isSoldOut? 'sold-out' : 'new' "> Conditional binding</h2>

<div v-bind:class="compClasses" style="border:1px solid black"> 
  <p> <span>Ryu</span> </p>
  <p>
  <button v-on:click ="nearby=!nearby"> Toggle nearby </button>
    <button v-on:click ="available=!available"> Toggle available </button>
  </p>
</div>
  <!-- Array approach -->
<h2 v-bind:class="['new','promoted']"> Array binding </h2>
<h2 v-bind:class="[isPromoted && 'promoted', isSoldOut ? 'sold-out' : 'new']"> Array conditional binding approach </h2>
<h2 v-bind:class="{
   promoted: isPromoted,
   new: ! isSoldOut,
   'sold-out': isSoldOut
}"> Object conditional binding approach</h2>
<hr>
<!-- If condition -->
<div v-if="seen">Now you can see me</div>
<hr>
<!-- methods -->
<h2>{{ greeting() }}</h2>

<!-- Looping -->
<hr>

<!-- Events -->
<div>
<p>My age is {{ age }}</p>
<button v-on:click ="add(1)"> Increment age </button>
<button v-on:click ="subtract(1)"> Decrement age </button>
<button v-on:click.once ="add(1)"> Increment age once</button>
</div>
<hr>
<!-- <div v-on:mousemove="updateXY" class="canvas">{{ x }}, {{ y }}</div> -->
<div @mousemove="updateXY" class="canvas">{{ x }}, {{ y }}</div>

<!-- Keyboard events -->
<hr>
<div>
  <p>Keyboard events</p>
  <label>Name: </label>
  <input v-on:keyup="logKeyBoardEvent"/>
</div>
<hr>
<div>
  <p>Two way binding</p>
  <label>Name: </label>
  <input type="text" v-model="enteredName"/>
  <span>{{ enteredName }}</span>
</div>

<hr>

<div>
  <p>Computed properties</p>
  <button v-on:click ="a++"> Add to A </button>
  <button v-on:click ="b++"> Add to B </button>
  <p>A - {{a}}</p>
   <p>B - {{b}}</p>
   <!-- <p>Age + A = {{addToA()}}</p>
   <p>Age + B = {{addToB()}}</p> -->

   <!-- Way to call computed properties -->
     <p>Age + A = {{addToA}}</p>
     <p>Age + B = {{addToB}}</p>
</div>
</template>


<script>
export default {
  name: 'App',

  data(){
    return {
      greet: "Hello",
      name: "Jyoti Prakash Rai",
      channel: "YouTube Channel",
      subscribe: "<b>Subscribe My Channel</b>",
      headingId: "heading",
      isDisabled: false,
      status: "success",
      isPromoted: true,
      isSoldOut: true,
      seen: false,
      age:30,
      x:0,
      y:0,
      enteredName: "",
      a: 0,
      b: 0,
      available: true,
      nearby: true
    };
  },

  methods: {
    greeting: function(){
      return "Good morning";
    },

    add: function(inc){
      this.age+=inc;
    },

    subtract: function(dec){
      this.age-=dec;
    },

    updateXY: function(event){
      this.x= event.offsetX;
      this.y=event.offsetY;
    },

    logKeyBoardEvent: function(){
      console.log("You pressed enter");
    },

// Both addToA and addToB will be call on click on any one of the botton. What if we just want to call only 
//respective method. In this case need to use computed property
    // addToA: function(){
    //   console.log("addToA method called");
      
    //   return this.a + this.age;
    // },
    // addToB: function(){
    //   console.log("addToB method called");
    //   return this.b + this.age;
    // }

  },

  computed: {

     addToA: function(){
      console.log("addToA method called");
      
      return this.a + this.age;
    },
    addToB: function(){
      console.log("addToB method called");
      return this.b + this.age;
    },

    compClasses: function(){
      return{
        available: this.available,
        nearby: this.nearby
      }
    }

  }


};
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

.underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}
.new{
  color: blue;
}

.sold-out {
  color: green;
}

.canvas {
  width: 400px;
  padding: 200px 20px;
  text-align: center;
  border: 1px solid #333;
}

.nearby {
  color: brown;

}

.available {
  font-style: italic;
  color: rgb(27, 29, 25);
}

</style>
