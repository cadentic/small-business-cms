<template>
<div>
      <v-container fluid id="vertmenu-sec"  style="padding-bottom:20px; padding-top:20px; background: rgb(230, 245, 255);">
        <v-row>
      <v-col cols="sm" class="vert-menu">
        <div class="humberger">
             <div class=" barss"  @click="toggleHumberger" v-bind:class="{ 'animate_bars' : animate }">
                <div class="barss1"> <hr /> </div>
                <div class="barss2"> <hr /> </div>
                <div class="barss3"> <hr /> </div>
            </div>
            <!--            verticle menu start           -->
        <div class="tab3">
          <div data-child="false" class="tab__header left-side" v-bind:style="animate ? 'display:block' : '' ">
            <div class="tab__header-1 tab__header--active" @click="currentTabHeader">{{ menudata.init_stage }}</div>
            <div @click="currentTabHeader" :class="'tab__header-' + (id + 2)" v-for="(stage, id) in menudata.stages_sub" :key="id">{{stage}}</div>
          </div>
      <!--            Tab 1           -->
      <div class="tab__content">
      <div class="tab__content-1 tab__content--active top">
        <div class="tab">
        <div data-child="true" class="tab__header middle-side" v-bind:style="animate ? 'display:block' : '' ">
          <div class="tab__header-1 inner tab__header--active" @click="currentInnerTabHeader">{{ menudata.init_tab1 }}</div>
          <div @click="currentInnerTabHeader" :class="'tab__header-' + (id + 2) + ' inner'" v-for="(item, id) in menudata.tab1" :key="id">{{item}}</div>
        </div>
        <div class="tab__content right-side" v-bind:style="animate ? 'display:block' : '' ">
          <div class="tab__content-1 tcrs tab__content--active">{{ menudata.init_tab1_content }}</div>
          <div :class="'tab__content-' + (id + 2) + ' tcrs'" v-for="(item, id) in menudata.tab1_content" :key="id">{{item}}</div>
        </div>
        </div>
      </div>
      <!--            Tab 2           -->
      <div class="tab__content-2 top">
        <div class="tab">
        <div data-child="true" class="tab__header middle-side" v-bind:style="animate ? 'display:block' : '' ">
          <div class="tab__header-1 inner tab__header--active" @click="currentInnerTabHeader">{{ menudata.init_tab2 }}</div>
          <div @click="currentInnerTabHeader" :class="'tab__header-' + (id + 2) + ' inner'" v-for="(item, id) in menudata.tab2" :key="id">{{item}}</div>
        </div>
        <div class="tab__content right-side" v-bind:style="animate ? 'display:block' : '' ">
          <div class="tab__content-1 tcrs tab__content--active">{{ menudata.init_tab2_content }}</div>
          <div :class="'tab__content-' + (id + 2) + ' tcrs'" v-for="(item, id) in menudata.tab2_content" :key="id">{{item}}</div>
        </div>
        </div>
      </div>
      <!--            Tab 3           -->
      <div class="tab__content-3 top">
        <div class="tab">
        <div data-child="true" class="tab__header middle-side" v-bind:style="animate ? 'display:block' : '' ">
          <div class="tab__header-1 inner tab__header--active" @click="currentInnerTabHeader">{{ menudata.init_tab3 }}</div>
          <div @click="currentInnerTabHeader" :class="'tab__header-' + (id + 2) + ' inner'" v-for="(item, id) in menudata.tab3" :key="id">{{item}}</div>
        </div>
        <div class="tab__content right-side" v-bind:style="animate ? 'display:block' : '' ">
          <div class="tab__content-1 tcrs tab__content--active">{{ menudata.init_tab3_content }}</div>
          <div :class="'tab__content-' + (id + 2) + ' tcrs'" v-for="(item, id) in menudata.tab3_content" :key="id">{{item}}</div>
        </div>
        </div>
      </div>
      <!--            Tab 4           -->
      <div class="tab__content-4 top">
        <div class="tab">
        <div data-child="true" class="tab__header middle-side" v-bind:style="animate ? 'display:block' : '' ">
          <div class="tab__header-1 inner tab__header--active" @click="currentInnerTabHeader">{{ menudata.init_tab4 }}</div>
          <div @click="currentInnerTabHeader" :class="'tab__header-' + (id + 2) + ' inner'" v-for="(item, id) in menudata.tab4" :key="id">{{item}}</div>
        </div>
        <div class="tab__content right-side" v-bind:style="animate ? 'display:block' : '' ">
          <div class="tab__content-1 tcrs tab__content--active">{{ menudata.init_tab4_content }}</div>
          <div :class="'tab__content-' + (id + 2) + ' tcrs'" v-for="(item, id) in menudata.tab4_content" :key="id">{{item}}</div>
        </div>
        </div>
      </div>
      </div>
</div>
        </div>
      </v-col>
      <v-col cols="6" class="vert-search">
          <div class="search-animated">
            <form action="">
            <input type="text" class="input" :placeholder="menudata.search_label">
            <div class="sub-ico">
            <input type="submit" value="" class="close-btn">
            <i class="fa fa-search"></i>
            </div>
            </form>
          </div>
      </v-col>
      <v-col cols="sm">
        <div class="logo-div">
        <a href=""><img :src="menudata.logo" alt="" /></a>
        </div>
      </v-col>
</v-row>
    </v-container>
</div>
</template>
<script>
export default {
  data: () => ({
    animate: false,
    tabHeaderActive: false,
    removeClass: false,
    rightSide: '1',
    prev: '1',
    leftSideTabs: 9,
    innerTabHeaders: 4,
    menudata: {}
  }),
  props: {
    init_data: Object
  },
  created() {
    axios.get('../json/menu_new.json')
    .then(response => {
      this.menudata = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    });
  },
  methods: {
    toggleHumberger(){
      this.animate = !this.animate
  },
  currentTabHeader(tab){
    let clicked = tab.target.classList[0].split('-')[1]
    if(this.rightSide !== clicked && clicked <= this.innerTabHeaders) { //
      this.rightSide = clicked
    }

    for(let i = 1; i <= this.leftSideTabs; i++){ // loop through the tabs
      let tabHeader = this.$el.querySelector('.tab__header-'+i);
      if(tabHeader.classList.contains('tab__header--active')){ // if tab__header has tab__header--active class, remove it
        if(tabHeader.classList[0].split('-')[1] <= this.innerTabHeaders){
          this.prev = tabHeader.classList[0].split('-')[1]
        }
        tabHeader.classList.remove('tab__header--active')
      }
    }
    tab.target.classList.add('tab__header--active') // add tab__header--active class to clicked tab
    let tabContent = this.$el.querySelector('.top.tab__content-'+this.rightSide)
    if(tabContent !== null){
      tabContent.classList.add('tab__content--active') // add active to tab
    }
    // content tabs of clicked
    if(this.prev !== this.rightSide){
      this.$el.querySelector('.top.tab__content-'+this.prev).classList.remove('tab__content--active')// remove active from previous tab tab
    }
  },
  currentInnerTabHeader(tab){
    let tcrsTabs = 4
    let clicked = tab.target.classList[0].split('-')[1]
    for (let i = 1; i<=this.innerTabHeaders; i++) {
      let innerTabHeader = this.$el.querySelector('div.tab__content-'+ this.rightSide +'.top.tab__content--active div.tab div.tab__header.middle-side div.tab__header-'+ i +'.inner')
        if(innerTabHeader !== null){
          if(innerTabHeader.classList.contains('tab__header--active')){
          innerTabHeader.classList.remove('tab__header--active')
        }
      }
    }
    tab.target.classList.add('tab__header--active')
    // tab__content-1 tcrs
    for (let i = 1; i<=tcrsTabs; i++) {
      let tcrsTab = this.$el.querySelector('div.tab__content-'+ this.rightSide +'.top.tab__content--active div.tab div.tab__content.right-side div.tab__content-'+ i +'.tcrs')
      if(tcrsTab !== null){
        if(tcrsTab.classList.contains('tab__content--active')){
        tcrsTab.classList.remove('tab__content--active')
      }
      }
    }
    let rightSideTabcontent = this.$el.querySelector('div.tab__content-'+ this.rightSide +'.top.tab__content--active div.tab div.tab__content.right-side div.tab__content-'+ clicked +'.tcrs')
    if(rightSideTabcontent !== null){
      rightSideTabcontent.classList.add('tab__content--active')
    }
  }
}
}
</script>
