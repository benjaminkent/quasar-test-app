<template>
  <q-page-container>
    <q-layout>
      <q-toolbar class="bg-deep-purple-2 q-pa-md">
        <q-toolbar-title shrink>My To Do List</q-toolbar-title>
        <q-space />
        <q-btn
          @click="addTodo = true"
          label="Add"
          icon-right="playlist_add"
          flat
        />
      </q-toolbar>

      <q-list v-if="toDos.length > 0" padding>
        <q-item
          tag="label"
          v-for="(todo, index) in toDos"
          :key="index"
          v-ripple
        >
          <q-item-section>
            <q-item-label :class="todo.completed ? 'completed' : ''">{{
              todo.action
            }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-toggle
              v-model="todo.completed"
              color="deep-purple-12"
              icon="done"
            />
          </q-item-section>
        </q-item>
        <q-separator spaced />
      </q-list>

      <q-dialog v-model="addTodo" persistent>
        <q-card style="min-width:350px;">
          <q-card-section class="row items-center">
            <div class="text-h6">Add</div>
            <q-space />
            <q-btn icon="close" dense round flat color="grey-5" v-close-popup />
          </q-card-section>

          <q-card-section>
            <q-input
              v-model="enteredTodo"
              @keyup.enter="addNewTodo"
              :rules="[val => !!val || 'Something to do is required']"
              color="deep-purple-12"
              label="To do"
              filled
              square
              dense
              autofocus
            />
          </q-card-section>

          <q-card-actions align="right">
            <q-btn @click="cancel" label="Cancel" color="grey-4" outline />
            <q-btn
              @click="addNewTodo"
              label="Add To Do"
              color="deep-purple-12"
              glossy
              unelevated
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-layout>
  </q-page-container>
</template>

<script>
export default {
  name: 'ToDo',
  data() {
    return {
      addTodo: false,
      enteredTodo: '',
      toDos: [],
    }
  },
  methods: {
    addNewTodo() {
      if (!this.enteredTodo) return
      this.toDos.push({
        action: this.enteredTodo,
        completed: false,
      })
      this.enteredTodo = ''
      this.addTodo = false
    },
    cancel() {
      this.enteredTodo = ''
      this.addTodo = false
    },
  },
}
</script>

<style lang="scss" scoped>
.completed {
  text-decoration: line-through;
}
</style>
