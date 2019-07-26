<template>
  <div id="example">
    <p>{{message}}</p>
    <button v-on:click="reversedClick">翻转字符串</button>
    <p>计算属性例子：{{calculate}}</p>
    <p>计算翻转：{{reversedMessage}}</p>
    <p v-bind:style="textStyle">文本样式Style</p>
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username"/>
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email"/>
    </template>
    <button v-on:click="ToggleClick">Toggle login type</button>
    <ul>
      <li v-for="peo in peoples">
        {{peo.name}}-{{peo.sex}}
      </li>
    </ul>
    <ul>
      <li v-for="n in even(numbers)">
        {{ n }}
      </li>
    </ul>
    <button v-on:click="say('hello', $event)">Hello</button>

  </div>
</template>

<script>
  export default {
    name: 'Example',
    data () {
      return {
        message: 'Hello World!!',
        calculate: 'this is dog!!',
        loginType: 'username',
        textStyle: {
          color: 'red',
          fontSize: '18px'
        },
        peoples: [
          {name: '小明', sex:'男'},
          {name: '小刚', sex:'男'},
          {name: '小红', sex:'女'}
        ],
        numbers: [0,1,2,3,4,5,6,7,8,9,10]
      }
    },
    methods: {
      reversedClick: function() {

        this.message = this.message.split('').reverse().join('')
      },
      ToggleClick: function () {
        if(this.loginType == 'username'){
          this.loginType = 'email'
        }else{
          this.loginType = 'username'
        }
      },
      even: function () {
        return this.numbers.filter(function (number) {
          return number % 2 === 0
        })
      },
      say: function (message,event) {
        console.log(event)
        alert(message)
      }
    },
    computed: {
      reversedMessage: function () {
        console.log('computed message')
        return this.message.split('').reverse().join('')
      }
    }

  }
</script>
