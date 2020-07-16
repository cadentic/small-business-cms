<template>
  <div>
    <v-container fluid :id=init_data.id>
      <v-row>
        <v-col cols="sm" class="vert-menu" style="z-index: 2">
          <div class="humberger">
            <div
              class="barss"
              @click="onClickHumberger"
              v-bind:class="{ 'animate_bars' : animate }"
            >
              <div class="barss1">
                <hr />
              </div>
              <div class="barss2">
                <hr />
              </div>
              <div class="barss3">
                <hr />
              </div>
            </div>
            <!--            verticle menu START           -->
            <div v-bind:class="animate ? 'tab3 expanded-menu' : 'tab3 collapsed-menu'">
              <div data-child="false" class="tab__header left-side" style="display:block;" id="id_lefttab">
                <div @click="currentTabHeader(id)" v-for="(stage, id) in menudata.stages" :key="id">{{stage}}</div>
              </div>
              <!-- Middle Side -->
              <div data-child="true" class="tab__header middle-side" style="display:block;" id="id_middletab">
                <div @click="currentInnerTabHeader(id)" v-for="(sub, id) in select_menu" :key="id"><a :href="sub.url">{{sub.title}}</a></div>
              </div>
              <!-- Right Side -->
              <div class="tab__content right-side" style="display:block;">
                <div class="tab__content-1 tab__content--active">
                  <div class="rs-left">
                    <h1>{{ menudata.comments.networking.title }}</h1>
                    <ul>
                      <li v-for="(content, id) in menudata.comments.networking.contents" :key="id">
                        <a :href="content.link">{{ content.text }}</a>
                      </li>
                    </ul>
                    <h1>{{ menudata.comments.needto.title }}</h1>
                    <ul>
                      <li v-for="(content, id) in menudata.comments.needto.contents" :key="id">
                        <a :href="content.link">{{ content.text }}</a>
                      </li>
                    </ul>
                  </div>
                  <div class="rs-right">
                    <h1>{{ menudata.comments.topproducts.title }}</h1>
                    <ul>
                      <li v-for="(content, id) in menudata.comments.topproducts.contents" :key="id">
                        <a :href="content.link">{{ content.text }}</a>
                      </li>
                    </ul>
                    <div class="rs-right-box">
                      <h1>{{ menudata.intent.title }}</h1>
                      <p>{{ menudata.intent.text }}</p>
                      <a :href="menudata.intent.link" style="color:cornflowerblue;">{{ menudata.intent.subtext }}</a>
                    </div>
                  </div>
                </div>
                <div class="tab__content-2">
                  <div class="rs-left">
                    <h1>NETWORKING</h1>
                    <ul>
                      <li>
                        <a href>Network Architecture - Cisco DNA</a>
                      </li>
                      <li>
                        <a href>SD-Access</a>
                      </li>
                      <li>
                        <a href>SD-WAN</a>
                      </li>
                      <li>
                        <a href>Switches</a>
                      </li>
                      <li>
                        <a href>Wireless</a>
                      </li>
                      <li>
                        <a href>Routers</a>
                      </li>
                      <li>
                        <a href>Enterprise Network Security</a>
                      </li>
                    </ul>
                    <h1>I NEED TO...</h1>
                    <ul>
                      <li>
                        <a href>Automate wired and wireless network policy</a>
                      </li>
                      <li>
                        <a href>Simplify branch and WAN network operations</a>
                      </li>
                      <li>
                        <a href>Address malware and cyberthreats</a>
                      </li>
                      <li>
                        <a href>Assure network availability and performance</a>
                      </li>
                    </ul>
                  </div>
                  <div class="rs-right">
                    <h1>TOP PRODUCTS</h1>
                    <ul>
                      <li>
                        <a href>Catalyst 9200 Series Switches</a>
                      </li>
                      <li>
                        <a href>Catalyst 9800 Series Wireless Controllers</a>
                      </li>
                      <li>
                        <a href>4000 Series Integrated Services Routers</a>
                      </li>
                      <li>
                        <a href>Cisco DNA Center</a>
                      </li>
                      <li>
                        <a href>Nexus 9000 Series Switches</a>
                      </li>
                    </ul>
                    <div class="rs-right-box">
                      <h1>INTENT-BASED NETWORKING</h1>
                      <p>Simplify the way you manage, secure, and scale your network.</p>
                      <a href style="color:cornflowerblue;">Learn How ></a>
                    </div>
                  </div>
                </div>
                <div class="tab__content-3">
                  <div class="rs-left">
                    <h1>NETWORKING</h1>
                    <ul>
                      <li>
                        <a href>Network Architecture - Cisco DNA</a>
                      </li>
                      <li>
                        <a href>SD-Access</a>
                      </li>
                      <li>
                        <a href>SD-WAN</a>
                      </li>
                      <li>
                        <a href>Switches</a>
                      </li>
                      <li>
                        <a href>Wireless</a>
                      </li>
                      <li>
                        <a href>Routers</a>
                      </li>
                      <li>
                        <a href>Enterprise Network Security</a>
                      </li>
                    </ul>
                    <h1>I NEED TO...</h1>
                    <ul>
                      <li>
                        <a href>Automate wired and wireless network policy</a>
                      </li>
                      <li>
                        <a href>Simplify branch and WAN network operations</a>
                      </li>
                      <li>
                        <a href>Address malware and cyberthreats</a>
                      </li>
                      <li>
                        <a href>Assure network availability and performance</a>
                      </li>
                    </ul>
                  </div>
                  <div class="rs-right">
                    <h1>TOP PRODUCTS</h1>
                    <ul>
                      <li>
                        <a href>Catalyst 9200 Series Switches</a>
                      </li>
                      <li>
                        <a href>Catalyst 9800 Series Wireless Controllers</a>
                      </li>
                      <li>
                        <a href>4000 Series Integrated Services Routers</a>
                      </li>
                      <li>
                        <a href>Cisco DNA Center</a>
                      </li>
                      <li>
                        <a href>Nexus 9000 Series Switches</a>
                      </li>
                    </ul>
                    <div class="rs-right-box">
                      <h1>INTENT-BASED NETWORKING</h1>
                      <p>Simplify the way you manage, secure, and scale your network.</p>
                      <a href style="color:cornflowerblue;">Learn How ></a>
                    </div>
                  </div>
                </div>
                <div class="tab__content-4">
                  <div class="rs-left">
                    <h1>NETWORKING</h1>
                    <ul>
                      <li>
                        <a href>Network Architecture - Cisco DNA</a>
                      </li>
                      <li>
                        <a href>SD-Access</a>
                      </li>
                      <li>
                        <a href>SD-WAN</a>
                      </li>
                      <li>
                        <a href>Switches</a>
                      </li>
                      <li>
                        <a href>Wireless</a>
                      </li>
                      <li>
                        <a href>Routers</a>
                      </li>
                      <li>
                        <a href>Enterprise Network Security</a>
                      </li>
                    </ul>
                    <h1>I NEED TO...</h1>
                    <ul>
                      <li>
                        <a href>Automate wired and wireless network policy</a>
                      </li>
                      <li>
                        <a href>Simplify branch and WAN network operations</a>
                      </li>
                      <li>
                        <a href>Address malware and cyberthreats</a>
                      </li>
                      <li>
                        <a href>Assure network availability and performance</a>
                      </li>
                    </ul>
                  </div>
                  <div class="rs-right">
                    <h1>TOP PRODUCTS</h1>
                    <ul>
                      <li>
                        <a href>Catalyst 9200 Series Switches</a>
                      </li>
                      <li>
                        <a href>Catalyst 9800 Series Wireless Controllers</a>
                      </li>
                      <li>
                        <a href>4000 Series Integrated Services Routers</a>
                      </li>
                      <li>
                        <a href>Cisco DNA Center</a>
                      </li>
                      <li>
                        <a href>Nexus 9000 Series Switches</a>
                      </li>
                    </ul>
                    <div class="rs-right-box">
                      <h1>INTENT-BASED NETWORKING</h1>
                      <p>Simplify the way you manage, secure, and scale your network.</p>
                      <a href style="color:cornflowerblue;">Learn How ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--            verticle menu END           -->
          </div>
        </v-col>
        <v-col cols="6" class="vert-search">
          <v-form @submit.prevent="submit">
            <v-text-field
              :label="init_data.search_box"
              prepend-inner-icon="mdi-magnify"
              v-model="search"
              color="white"
              outlined
              rounded
              clearable
              solo
              solo-inverted
            ></v-text-field>
          </v-form>
        </v-col>
        <v-col cols="sm">
          <div class="logo-div">
            <a :href="init_data.img_link">
              <img :src="init_data.img" alt/>
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  props: {
    init_data: Object
  },
  created() {
    axios.get('../json/menu.json')
    .then(response => {
      this.menudata = response.data;
      this.select_menu = this.get_submenu(0);
    })
    .catch(e => {
      this.errors.push(e)
    });
  },
  data() {
    return {
      menudata: {},
      select_menu: [],
      animate: false,
      targetDigit: "1",
      prevDigit: "1",
      search: ''
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.windowTop = window.top.scrollY;
      if (this.windowTop >= 500) {
        this.animate = false;
      }
    },
    get_submenu(id) {
      let stages = this.menudata.stages;
      let blocks = this.menudata.blocks;
      let res = [];

      for( let i = 0; i < this.menudata.count; i ++ ) {
        if( stages[id] == blocks[i].status ) {
          res.push({title: blocks[i].title, url: blocks[i].url});
        }
      }
      return res;
    },
    currentTabHeader(id) {
      let children = document.getElementById('id_lefttab').children;
      for( let i = 0; i < children.length; i ++ ) {
        children[i].classList.remove("tab__header--active");
      }
      children[id].classList.add("tab__header--active");

      this.select_menu = this.get_submenu(id);
    },
    currentInnerTabHeader(id) {
      let children = document.getElementById('id_middletab').children;
      for( let i = 0; i < children.length; i ++ ) {
        children[i].classList.remove("tab__header--active");
      }
      children[id].classList.add("tab__header--active");
    },
    onClickHumberger() {
      this.animate=!this.animate;
      document.getElementById('id_lefttab').children[0].classList.add("tab__header--active");
    },
    submit() {
        axios.post('/save-json/main-topbar-search', { search: this.search })
             .then(() => alert('Saved!'))
             .catch(error => console.error(error));
    }
  }
};
</script>
