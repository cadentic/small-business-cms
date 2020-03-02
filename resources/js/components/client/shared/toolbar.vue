<template>
  <div>
      <v-navigation-drawer
        v-model="drawer"
        :absolute="navigation.props.absolute"
        :bottom="navigation.props.bottom"
        :temporary="navigation.props.temporary"
        :width="navigation.props.width">
        <div class="text-right">
            <v-btn icon @click="drawer = !drawer"><v-icon>{{ navigation.closeIcon }}</v-icon></v-btn>
        </div>
        <div>
          <v-list>
            <v-list-item-group v-for="(a,index) in this.offcanvas" :key="index">
              <h3 class="ml-5">{{a.title}}</h3>
              <v-list-item @click="go(b.href)" v-for="(b,index) in a.sub_menu" :key="index">
                <v-list-item-action><v-icon>{{b.icon}}</v-icon></v-list-item-action>
                <v-list-item-conten>
                  <v-list-item-title>
                    {{b.name}}
                  </v-list-item-title>
                </v-list-item-conten>
              </v-list-item>
              <v-divider></v-divider>
            </v-list-item-group>
          </v-list>
        </div>
      </v-navigation-drawer>
    <div class="main-toolbar">
      <ul class="submenu-group">
        <li  v-for="(menu_item) in menu_items"
        :id="'menu-item-'+ menu_item.key"
        :key="menu_item.key"
        :class="(menu_item.key == current_menu_item.key) ? 'active' : ''"><a>{{ menu_item.main_title }}</a></li>
      </ul>
    </div>
    <div class="sub-toolbar">
      <ul v-for="(menu_item) in menu_items" class="submenu-group"
          :data-main-toolbar="'menu-item-'+ menu_item.key"
          :key="menu_item.key">
        <li v-for="(menu_sub_item) in menu_item.sub_menu"
            :key="menu_sub_item.key"
            :class="(menu_sub_item.key == current_menu_sub_item.key) ? 'active' : ''"><a :href="menu_sub_item.pathname">{{ menu_sub_item.sub_menu_item_title }}</a></li>
      </ul>
      <v-btn icon large @click="drawer = !drawer"><v-icon>{{ navigation.menuIcon }}</v-icon> </v-btn>
    </div>
  </div>
</template>

<style scoped>
  .submenu-group {
    display:flex;
    padding-left: 10%;
    margin: 0;
    font-size: 15px;
    font-weight: bold;
  }
  .submenu-group li {
    padding: 15px;
  }
  .submenu-group a{
    color: white;
  }
  .submenu-group li a:hover{
    text-decoration: none;
    cursor: pointer;
  }
  .main-toolbar {
    background-color: black;
    color: white;
  }

  .sub-toolbar {
    background: rgb(204,204,204);
    background: linear-gradient(90deg, #FEFEFE 0%, #EFEFEF 100%);
  }
  .sub-toolbar ul{
    box-shadow: 0px 2px 0px #ccc;
  }
  .sub-toolbar ul a {
    font-weight: lighter;
    color: #AE643D;
  }
  .main-toolbar .submenu-group li.active {
    background: #FEFEFE !important;
  }
  .main-toolbar .submenu-group li.active a{
    background: transparent;
    color:black;
  }
  .sub-toolbar .submenu-group li.active {
    text-decoration: underline;
  }
  .sub-toolbar .submenu-group li.active a {
    font-weight: bold;
  }
  .d-none {
    display: none;
  }
  .d-block {
    display: block;
  }
</style>

<script>
export default {
  data() {
    return {
      drawer : false,
    offcanvas : [],
      errors: {},
      menu_items: [],
      app_url: "",
      current_pathname: "",
      current_menu_item: "",
      current_menu_sub_item: "",
      navigation: {props: {}}
    }
  },
  created() {
    axios.get('/json/toolbar_menu.json')
    .then(response => {
      this.menu_items = response.data;
      this.app_url = location.hostname;

      // Get current link data and utils parameters
      this.current_pathname = location.pathname;

      this.current_menu_item = this.menu_items.filter(menu_item => {
          let current_path_tree = this.current_pathname.split('/');
          current_path_tree.shift();

          let found_entries = menu_item.sub_menu.filter(sub_menu => current_path_tree.indexOf(sub_menu.pathname.substring(1)) != -1);
          return found_entries.length != null && found_entries != null && found_entries.length != 0;
      })[0];

      this.current_menu_sub_item = this.current_menu_item.sub_menu.filter(sub_menu => {
        let current_path_tree = this.current_pathname.split('/');
        current_path_tree.shift();

        return current_path_tree.indexOf(sub_menu.pathname.substring(1)) != -1;
      })[0];

    })
    .catch(err => {
      this.errors.push(err);
    })
    axios.get('json/offcanvas_menu.json')
    .then(res=>{
      this.offcanvas = res.data
    })
    .catch(err=>{
      // console.log(err)
    })
    axios.get('/json/toolbar-navigation.json')
         .then(({data}) => this.navigation = data);
  },
  methods:{
    go(to){
      window.location.href = to
    }
  }
}
</script>
