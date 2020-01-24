<template>
  <div>
      <div id="myCarousel" class="carousel slide">
    <!-- Horizontal menu start -->
    <div class="carousel-inner">
      <div id="sohan" class="item active">
   <div class="tab3 horizontal-sub" style="display:block;">
   <div data-child="false" class="tab__header left-side-horizon">
      <div class="tab__header-1 tab__header--active" @click="currentTabHeader">Dtabase</div>
      <div class="tab__header-2" @click="currentTabHeader">Cloude</div>
      <div class="tab__header-3" @click="currentTabHeader">Migration</div>
      <div class="tab__header-4" @click="currentTabHeader">Directors info</div>
      <div class="tab__header-5" @click="currentTabHeader">Nature & Mode Of Work</div>
      <div class="tab__header-6" @click="currentTabHeader">Hardwar and Networking Component</div>
      <div class="tab__header-7" @click="currentTabHeader">Staffing</div>
      <div class="tab__header-8" @click="currentTabHeader">Corporate Training on Oracle</div>
      <div class="tab__header-9" @click="currentTabHeader">Corporate Training on Redhat</div>
   </div>
   <div class="tab__content">
      <div class="tab__content-1 tab__content--active">
         <div class="tab">
            <div data-child="true" class="tab__header middle-side-horizon">
               <div class="tab__header-1 tab__header--active" @click="currentInnerTabHeader">E-Business suit</div>
               <div class="tab__header-2" @click="currentInnerTabHeader">Single Sign in</div>
               <div class="tab__header-3" @click="currentInnerTabHeader">Golden Gate</div>
               <div class="tab__header-4" @click="currentInnerTabHeader">Open Source</div>
            </div>
            <div class="tab__content right-side-horizon">
               <div class="tab__content-1 tab__content--active">
                  <img src="assets/images/hz1.jpg" alt="" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                  <a href="">Read More</a>
               </div>
               <div class="tab__content-2">
                  <img src="assets/images/bg3.jpg" alt="" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                  <a href="">Read More</a>
               </div>
               <div class="tab__content-3">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliquip dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliquip dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliquip dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                  <a href="">Read More</a>
               </div>
               <div class="tab__content-4">
                  <p> quis nostrud exercitation ullamco laboris nisi ut aliquip dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliquip dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliquip dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                  <a href="">Read More</a>
               </div>
            </div>
         </div>
      </div>
      <div class="tab__content-2">
         <div class="tab">
            <div data-child="true" class="tab__header middle-side-horizon">
               <div class="tab__header-1 tab__header--active" @click="currentInnerTabHeader">Sub Tab 2 1</div>
               <div class="tab__header-2" @click="currentInnerTabHeader">Sub Tab 2 2</div>
               <div class="tab__header-3" @click="currentInnerTabHeader">Sub Tab 2 3</div>
               <div class="tab__header-4" @click="currentInnerTabHeader">Sub Tab 2 4</div>
            </div>
            <div class="tab__content right-side-horizon">
               <div class="tab__content-1 tab__content--active">
                  <img src="assets/images/bg2.jpg" alt="" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                  <a href="">Read More</a>
               </div>
               <div class="tab__content-2">Sub Tab Content 2 2</div>
               <div class="tab__content-3">Sub Tab Content 2 3</div>
               <div class="tab__content-4">Sub Tab Content 2 4</div>
            </div>
         </div>
      </div>
      <div class="tab__content-3">
         <div class="tab">
            <div data-child="true" class="tab__header middle-side-horizon">
               <div class="tab__header-1 tab__header--active" @click="currentInnerTabHeader">Sub Tab 3 1</div>
               <div class="tab__header-2" @click="currentInnerTabHeader">Sub Tab 3 2</div>
               <div class="tab__header-3" @click="currentInnerTabHeader">Sub Tab 3 3</div>
            </div>
            <div class="tab__content right-side-horizon">
               <div class="tab__content-1 tab__content--active">Sub Tab Content 3 1</div>
               <div class="tab__content-2">Sub Tab Content 3 2</div>
               <div class="tab__content-3">Sub Tab Content 3 3</div>
            </div>
         </div>
      </div>
      <div class="tab__content-4">
         <div class="tab">
            <div data-child="true" class="tab__header middle-side-horizon">
               <div class="tab__header-1 tab__header--active" @click="currentInnerTabHeader">Sub Tab 4 1</div>
               <div class="tab__header-2" @click="currentInnerTabHeader">Sub Tab 4 2</div>
               <div class="tab__header-3" @click="currentInnerTabHeader">Sub Tab 4 3</div>
            </div>
            <div class="tab__content right-side-horizon">
               <div class="tab__content-1 tab__content--active">Sub Tab Content 4 1</div>
               <div class="tab__content-2">Sub Tab Content 4 2</div>
               <div class="tab__content-3">Sub Tab Content 4 3</div>
            </div>
         </div>
      </div>
    <div class="tab__content-5">
         <div class="tab">
            <div data-child="true" class="tab__header middle-side-horizon">
               <div class="tab__header-1 tab__header--active" @click="currentInnerTabHeader">Sub Tab 5 1</div>
               <div class="tab__header-2" @click="currentInnerTabHeader">Sub Tab 5 2</div>
               <div class="tab__header-3" @click="currentInnerTabHeader">Sub Tab 5 3</div>
            </div>
            <div class="tab__content right-side-horizon">
               <div class="tab__content-1 tab__content--active">Sub Tab Content 5 1</div>
               <div class="tab__content-2">Sub Tab Content 5 2</div>
               <div class="tab__content-3">Sub Tab Content 5 3</div>
            </div>
         </div>
      </div>
    <div class="tab__content-6">
         <div class="tab">
            <div data-child="true" class="tab__header middle-side-horizon">
               <div class="tab__header-1 tab__header--active" @click="currentInnerTabHeader">Sub Tab 6 1</div>
               <div class="tab__header-2" @click="currentInnerTabHeader">Sub Tab 6 2</div>
               <div class="tab__header-3" @click="currentInnerTabHeader">Sub Tab 6 3</div>
            </div>
            <div class="tab__content right-side-horizon">
               <div class="tab__content-1 tab__content--active">Sub Tab Content 6 1</div>
               <div class="tab__content-2">Sub Tab Content 6 2</div>
               <div class="tab__content-3">Sub Tab Content 6 3</div>
            </div>
         </div>
      </div>
    <div class="tab__content-7">
         <div class="tab">
            <div data-child="true" class="tab__header middle-side-horizon">
               <div class="tab__header-1 tab__header--active" @click="currentInnerTabHeader">Sub Tab 7 1</div>
               <div class="tab__header-2" @click="currentInnerTabHeader">Sub Tab 7 2</div>
               <div class="tab__header-3" @click="currentInnerTabHeader">Sub Tab 7 3</div>
            </div>
            <div class="tab__content right-side-horizon">
               <div class="tab__content-1 tab__content--active">Sub Tab Content 7 1</div>
               <div class="tab__content-2">Sub Tab Content 7 2</div>
               <div class="tab__content-3">Sub Tab Content 7 3</div>
            </div>
         </div>
      </div>
    <div class="tab__content-8">
         <div class="tab">
            <div data-child="true" class="tab__header middle-side-horizon">
               <div class="tab__header-1 tab__header--active" @click="currentInnerTabHeader">Sub Tab 8 1</div>
               <div class="tab__header-2" @click="currentInnerTabHeader">Sub Tab 8 2</div>
               <div class="tab__header-3" @click="currentInnerTabHeader">Sub Tab 8 3</div>
            </div>
            <div class="tab__content right-side-horizon">
               <div class="tab__content-1 tab__content--active">Sub Tab Content 8 1</div>
               <div class="tab__content-2">Sub Tab Content 8 2</div>
               <div class="tab__content-3">Sub Tab Content 8 3</div>
            </div>
         </div>
      </div>
    <div class="tab__content-9">
         <div class="tab">
            <div data-child="true" class="tab__header middle-side-horizon">
               <div class="tab__header-1 tab__header--active" @click="currentInnerTabHeader">Sub Tab 9 1</div>
               <div class="tab__header-2" @click="currentInnerTabHeader">Sub Tab 9 2</div>
               <div class="tab__header-3" @click="currentInnerTabHeader">Sub Tab 9 3</div>
            </div>
            <div class="tab__content right-side-horizon">
               <div class="tab__content-1 tab__content--active">Sub Tab Content 9 1</div>
               <div class="tab__content-2">Sub Tab Content 9 2</div>
               <div class="tab__content-3">Sub Tab Content 9 3</div>
            </div>
         </div>
      </div>
   </div>
</div>
      </div>
  </div>
  </div>
  </div>
</template>
<script>
export default{
  data:()=>({
    targetDigit: '1',
    prevDigit: '1'
  }),
  methods: {
    currentTabHeader(tab){
      let clicked = tab.target.classList[0].split('-')[1]
      if(this.targetDigit !== clicked){
        this.targetDigit = clicked
      }
      let children = tab.target.parentElement.children
       for(let i = 0; i < children.length; i++){
        // let tabHeader =
        if(children[i].classList.contains('tab__header--active')){
          this.$el.querySelector('.'+children[i].classList[0]).classList.remove('tab__header--active')
          this.prevDigit = children[i].classList[0].split('-')[1]
        }
      }
      tab.target.classList.add('tab__header--active')
      let tabContentPrev =  tab.target.parentElement.nextElementSibling.children[parseInt(this.prevDigit) - 1].classList
      tabContentPrev.remove('tab__content--active')
      let tabContent = tab.target.parentElement.nextElementSibling.children[parseInt(this.targetDigit) - 1].classList
      tabContent.add('tab__content--active')
    },
    currentInnerTabHeader(tab){
      let clicked = tab.target.classList[0].split('-')[1]
      let children = tab.target.parentElement.children
      for(let i = 0; i < children.length; i++){
        if(children[i].classList.contains('tab__header--active')){
          this.$el.querySelector('div.tab__content-'+this.targetDigit+'.tab__content--active > div > div.tab__header.middle-side-horizon > div.'+children[i].classList[0]).classList.remove('tab__header--active')
        }
      }
      tab.target.classList.add('tab__header--active')
      let rightSideChildren = tab.target.parentElement.nextSibling.children
      for(let i = 0; i < rightSideChildren.length; i++){
        if(rightSideChildren[i].classList.contains('tab__content--active')){
          this.$el.querySelector('div.tab__content-'+ this.targetDigit +'.tab__content--active > div > div.tab__content.right-side-horizon > div.'+rightSideChildren[i].classList[0]).classList.remove('tab__content--active')
        }
      }
      this.$el.querySelector('div.tab__content-'+ this.targetDigit +'.tab__content--active > div > div.tab__content.right-side-horizon > div.tab__content-'+clicked).classList.add('tab__content--active')
    }
  }
}
</script>