<template>
  <div id="q-app">
    <q-layout view="hHr lpr fFr">
      <q-header elevated class="bg-deep-purple-12">
        <q-toolbar>
          <q-toolbar-title>First Quasar App!</q-toolbar-title>
          <q-space />
          <q-btn @click="drawer = !drawer" icon="menu" round flat dense />
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" :width="250" :breakpoint="400" side="right">
        <q-scroll-area
          style="height: calc(100% - 150px); margin-top: 150px;
        border-left: 1px solid #eee"
        >
          <q-list padding>
            <q-item
              v-for="(item, index) in drawerItems"
              :key="index"
              clickable
              v-ripple
              tag="a"
              :href="item.url"
              target="_blank"
              rel="noopener referrer"
            >
              <q-item-section avatar>
                <q-avatar
                  color="deep-purple-12"
                  text-color="white"
                  :icon="item.icon"
                />
              </q-item-section>
              <q-item-section>
                {{ item.name }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img
          class="absolute-top"
          src="./assets/avatar-background.jpg"
          style="height:175px"
        >
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="65px" class="q-mb-sm">
              <img src="./assets/headshot.jpg" alt="headshot" />
            </q-avatar>
            <p class="text-weight-bold q-ma-none text-grey-10">Ben Jehl</p>
            <p class="q-ma-none text-grey-10">@benjaminkent</p>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      drawerItems: [
        {
          name: 'My website',
          url: 'https://benkent.io/',
          icon: 'person_outline',
        },
        {
          name: 'My job',
          url: 'https://www.ozk.com/labs/',
          icon: 'work_outline',
        },
      ],
    }
  },
}
</script>
