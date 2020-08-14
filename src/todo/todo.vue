<template>
<section class="real-app">
  <input type="text" 
        class="add-input"
        autofocus="autofocus"
        placeholder="待做事件"
        @keyup.enter="addTodo"
  >
  <Items :todo = "todo"
          v-for="todo in filterTodolist"
          :key="todo.id"
         @deleteTodo = "deleteTodo"
  >
  </Items>
   <Tabs :todos="todos"
        :filter="filter"
        @toggleFilter ="toggleFilter"
        @clearAllCompleted ="clearAllCompleted"
   > 
   </Tabs>
</section>
</template>


<script>
import Items from './items.vue';
import Tabs from './tabs.vue'

let id =0;
export default {
  data(){
    return{
      todos:[],
      filter:'all'
    }
  },
  computed:{
    filterTodolist(){
      if(this.filter == "all"){
        return this.todos;
      }
      const complete = 'completed' == this.filter;
      return this.todos.filter(todo => complete == todo.completed)
    }
  },
  components:{
    Items,
    Tabs
  },
  methods:{
    addTodo(e){
      if(e.target.value.trim()){
        this.todos.unshift({
          id: id++,
          content:e.target.value.trim(),
          completed:false
        });
        e.target.value = ''
      }else{
        alert('输入不能为空')
      }
    },
    deleteTodo(id){
      this.todos.splice(this.todos.findIndex(todo=>todo.id ==id),1)
    },
    toggleFilter(state){
      this.filter = state
    },
    clearAllCompleted(){
      this.todos =this.todos.filter(todo => todo.completed ===false)
    }
  }
}
</script>

<style lang="stylus" scoped>
    .real-app {
        width 600px
        margin 0 auto
        box-shadow 0 0 5px #666
    }

    .add-input {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        outline: none;
        color: inherit;
        box-sizing: border-box;
        font-smoothing: antialiased;
        padding: 16px 16px 16px 36px;
        border: none;
        box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    }
</style>