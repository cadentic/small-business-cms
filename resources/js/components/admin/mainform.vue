<template>
  <v-app>
    <template v-if="itemSelected.text != selectedText">
        <v-toolbar>
            <div class="flex-grow-1"></div>
            <v-btn text small>
                <v-icon left>fa-globe</v-icon>
                US
            </v-btn>
            <v-menu offset-y open-on-hover>
                <template v-slot:activator="{ on }">
                    <v-btn text small v-on="on">
                        Login
                        <v-icon right>fa-chevron-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <v-btn text href="">My Cadentic</v-btn>
                    </v-list-item>
                    <v-list-item>
                        <v-btn text href="">Partner Central</v-btn>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn text small>Training</v-btn>
            <v-btn text small>Community</v-btn>
            <v-btn text small>Store</v-btn>
            <v-btn text small onclick="window.location='tel:+18774869273';">
                <v-icon left>fa-phone</v-icon>
                1-877-486-9273
            </v-btn>
            <v-text-field
                    label="Search"
                    solo
            >
                <v-btn text small>
                    <v-icon right>fa-search</v-icon>
                </v-btn>
            </v-text-field>
        </v-toolbar>
    </template>

    <v-navigation-drawer v-model="drawer" permanent class="sidebar">
        <v-list-item>
            <v-list-item-title class="title"><img src="./assets/cadentic-logo.png"/></v-list-item-title>
        </v-list-item>
        <v-list>
            <v-list-item
                    v-for="item in items"
                    :key="item.text"
                    link
                    :class="{'selected': itemSelected.text === item.text}"
            >
                <v-list-item-content @click="show(item)">
                    <v-icon class="closeIcon" v-if="itemSelected.text === item.text">{{closeIcon}}</v-icon>
                    <v-icon v-if="itemSelected.text !== item.text">{{item.icon}}</v-icon>
                    <v-list-item-title v-if="itemSelected.text !== item.text">{{ item.text }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-overlay
            value="overlay"
            opacity="1"
            v-if="isItemSelected()">
        <div class="row">
            <v-icon left>{{itemSelected.icon}}</v-icon>
            <h5>{{itemSelected.text}}</h5>
        </div>
        <v-row no-gutters>
            <v-col
                    class="cols-container"
                    v-for="(n, index) in itemSelected.numCols"
                    :key="n"
            >
                <div v-for="(cols, y) in itemSelected.contCol[index]" :key="y">
                    <h6 class="links-title">{{getTitle(y, index)}}</h6>
                    <a class="links" v-for="(link, z) in getLinks(y, index)" :key="z">
                        {{link}}<br/>
                    </a>
                </div>
            </v-col>
        </v-row>
    </v-overlay>

    <div class="shift-right">
      <div class="topspace"></div>
      <div></div>
      <div class="ma">
        <center><h1>Main Form</h1></center>
        <form method="post" action="formA" enctype="multipart/form-data">
          <input type="hidden" name="_token" :value="csrf">

          <center><h2>Banner 1</h2></center>
          <label for="b1_t">Title</label>
          <input type="text" id="b1_t" name="b1_t" placeholder="Enter Title.." v-model='b1_t'><br/>

          <label for="image1">Image</label>
          <input type="file" id="image1" name="image1"><br/>

          <label for="link">Link</label>
          <div class="myDiv1" v-for="(input,k) in b1_l" :key="k">
            <div>
              <input type="text" placeholder="Enter Link Name..." name="b1_l[]" v-model="input.link"><br/>
              <input type="text" placeholder="Enter URL..." name="b1_u[]" v-model="input.url"><br/>
            </div>
            <div id="myDivp">
              <span>
                <i class="fa fa-minus-circle" @click="remove(k)" v-show="k || (!k && b1_l.length > 1)">Remove</i>
                <i class="fa fa-plus-circle" @click="add(k)" v-show="k == b1_l.length-1">Add</i><br/>
              </span>
            </div>
          </div>

          <center><h2>Banner 2</h2></center>
          <label for="b2_t">Title</label>
          <input type="text" id="b2_t" name="b2_t" placeholder="Enter Title.." v-model='b2_t'><br/>

          <label for="image2">Image</label>
          <input type="file" id="image2" name="image2"><br/>

          <label for="link">Link</label>
          <div class="myDiv1" v-for="(input,k) in b2_l" :key="k">
            <div>
              <input type="text" placeholder="Enter Link Name..." name="b2_l[]" v-model="input.link"><br/>
              <input type="text" placeholder="Enter URL..." name="b2_u[]" v-model="input.url"><br/>
            </div>
            <div id="myDivp">
              <span>
                <i class="fa fa-minus-circle" @click="remove2(k)" v-show="k || (!k && b2_l.length > 1)">Remove</i>
                <i class="fa fa-plus-circle" @click="add2(k)" v-show="k == b2_l.length-1">Add</i><br/>
              </span>
            </div>
          </div>

          <center><h2>Banner 3</h2></center>
          <label for="b3_t">Title</label>
          <input type="text" id="b3_t" name="b3_t" placeholder="Enter Title.." v-model='b3_t'><br/>

          <label for="b3_c">Content</label>
          <input type="text" id="b3_c" name="b3_c" placeholder="Enter Content..." v-model='b3_c'><br/>

          <label for="link">Link 1</label>
          <input type="text" id="b3_l1" name="b3_l1" placeholder="Add Link..." v-model='b3_l1'><br/>

          <label for="link">Link 2</label>
          <input type="text" id="b3_l2" name="b3_l2" placeholder="Add Link..." v-model='b3_l2'><br/>

          <label for="link">Images</label>
          <div class="myDiv1" v-for="(input,k) in b3_i" :key="k">
            <div>
              <input type="file" name="b3_i[]"><br/>
            </div>
            <div id="myDivp">
              <span>
                <i class="fa fa-minus-circle" @click="remove3(k)" v-show="k || (!k && b3_i.length > 1)">Remove</i>
                <i class="fa fa-plus-circle" @click="add3(k)" v-show="k == b3_i.length-1">Add</i><br/>
              </span>
            </div>
          </div>

          <center><h2>Banner 4</h2></center>
          <label for="file">Video</label>
          <input type="file" id="video" name="video"><br/>

          <label for="title">Title</label>
          <input type="text" id="b4_t" name="b4_t" placeholder="Add Title..." v-model='b4_t'><br/>

          <label for="text">Content</label>
          <input type="text" id="b4_c" name='b4_c' placeholder="Enter content..." v-model='b4_c'><br/>

          <center><h2>Icons</h2></center>
          <div class="myDiv1" v-for="(input,k) in b5_a" :key="k">
            <div>
              <label for="image">Icon Image</label>
              <input type="file" name="b5_i[]"><br/>
              <label for="link">Link</label>
              <input type="text" name="b5_l[]" v-model="input.link" placeholder="Enter Link..."/>
            </div>
            <div id="myDivp">
              <span>
                <i class="fa fa-minus-circle" @click="remove4(k)" v-show="k || (!k && b5_a.length > 1)">Remove</i>
                <i class="fa fa-plus-circle" @click="add4(k)" v-show="k == b5_a.length-1">Add</i><br/>
              </span>
            </div>
          </div>

          <div class="mygrid">
            <div><input type="submit" name="Submit" value="Submit"/></div>
            <div><input type="submit" @click="Edit" value="Edit"/></div>
            <div><input type="submit" name="Submit" value="Save as Draft"></div>
          </div>
        </form>
      </div>
    </div>
  </v-app>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "mainForm",
    data: () => ({
        drawer: null,
        items: [
            {
                icon: 'fa-cloud', text: 'CADENTIC CLOUD', numCols: 3, contCol: [3, 3, 3],
                values: [{
                    title: 'Hibrid Cloud & Data a Center Infrastructure',
                    links: ['Cloud Foundation', 'Cadentic Cloud on AWS*', 'CMware HCX']
                },
                    {
                        title: 'Networking & Security Services',
                        links: ['Secure State*', 'AppDefense', 'Network Insight*']
                    },
                    {
                        title: '*Located On Our Cadentic Cloud Website',
                        links: []
                    },
                    {
                        title: 'Cloud Operation Services',
                        links: ['Cost Insight*', 'Log Intelligence*']
                    },
                    {
                        title: 'Cloud Management',
                        links: ['Cloud Management Platform', 'vRealize Suite', 'Cloud Assembly*', 'Code Stream*', 'Service Broker*', 'Cadentic Cloud Marketplace*']
                    },
                    {
                        title: 'Cloud-Native Apps',
                        links: ['CadenticPKS*', 'Cadentic Cloud PKS*']
                    },
                    {
                        title: 'Digital Workspace & Desktop',
                        links: ['Workspace ONE', 'Workspace ONE UEM Powered by AirWatch', 'Horizon Cloud', 'Learning Platform*']
                    },
                    {
                        title: 'Application Management Services',
                        links: ['Wavefront by Cadentic*']
                    },
                    {
                        title: 'Cadentic Cloud Providers',
                        links: []
                    }
                ]
            },
            {
                icon: 'fa-cubes', text: 'PRODUCTS', link: '', numCols: 3, contCol: [5, 4, 3],
                values: [{
                    title: 'SDDC Platform',
                    links: ['Project Dimension', 'Cloud Fondation']
                },
                    {
                        title: 'Data Center & Cloud Infrastructure',
                        links: ['vSphere', 'Cadentic Enterprise PKS', 'vSphere Integrated Containers', 'More >']
                    },
                    {
                        title: 'Networking and Security',
                        links: ['NSX Data Center', 'NSX Cloud', 'SD-WAN by VeloCloud', 'NSX Hybrid Connect', 'AppDefense', 'vRealize Network Insight']
                    },
                    {
                        title: 'Storage & Availability',
                        links: ['Site Recovery Manager', 'Cadentic Site Recovery', 'Virtual Volumes']
                    },
                    {
                        title: 'Hyperconverged Infrastructure',
                        links: ['vSAN', 'Dell EMC VxRail']
                    },
                    {
                        title: 'Cloud Management Platform',
                        links: ['vRealize Suite', 'vRealize Automation', 'vRealize Business for Cloud', 'vRealize Operation', 'vCloud Suite', 'Cadentic Integrated OpenStack', 'More >']
                    },
                    {
                        title: 'Network Functions Virtualization',
                        links: ['vCloud NFV', 'Cadentic Integrated OpenStack Carrier Edition']
                    },
                    {
                        title: 'Internet Of Things (IoT)',
                        links: ['Pulse IoT Center']
                    },
                    {
                        title: 'Digital Workspace',
                        links: ['Workspace ONE', 'Workspace ONE UEM Powered by AirWatch']
                    },
                    {
                        title: 'Desktop And Application Virtualization',
                        links: ['Horizon 7', 'Horizon Apps', 'Horizon Cloud', 'App Volumes', 'More >']
                    },
                    {
                        title: 'Personal Desktop',
                        links: ['Fusion for Mac', 'Workstation Pro', 'Workstation Player']
                    },
                    {
                        title: 'Free Products',
                        links: ['vSphere Hypervisor', 'vCenter Converter', 'More >']
                    }
                ]
            },
            {
                icon: 'fa-cogs', text: 'SUPPORT', link: '', numCols: 4, contCol: [1, 1, 1, 1],
                values: [{
                    title: 'Product Support Center',
                    links: ['Fusion', 'Horizon', 'vCenter Server', 'vRealize Operations', 'vSAN', 'vSphere', 'vSphere Hyperisor (ESXi)', 'Workstation Pro', 'Workstation Player', 'More >>']
                },
                    {
                        title: 'Top Support Tasks',
                        links: ['Search Knowledge Base', 'Login to My Cadentic', 'File a Support Request', 'View Filed Support REquests', 'Escalate Suppot Request', 'Manage Support Contracts', 'View Orders', 'Register Products', 'Manage Your License Keys', 'Join Communities']
                    },
                    {
                        title: 'Support Resources',
                        links: ['Security Advisories', 'Product Documentation', 'Technical Papers', 'Comptability Guides', 'Customer Advocacy', 'Cadentic {code}', 'Customer Support Forums', 'Products Globalization Guide']
                    },
                    {
                        title: 'Support Offerings And Policies',
                        links: ['Support Offerings', 'Support Policies', 'Lifecycle Policies', 'Lifecycle Product Matrix', 'Support by Product Matrix', 'Support Help Guides', 'Support Terms and']
                    }
                ]
            },

            {
                icon: 'fa-cogs', text: 'SOLUTIONS', numCols: 2, contCol: [2, 3],
                values: [{
                    title: 'Strategic IT Priorities',
                    links: ['Modernize Data Centers', 'Integrate Public Clouds', 'Empower the Digital Workspace', 'Transform Networking and Security']
                },
                    {
                        title: 'Technology Solutions',
                        links: ['Cloud Native App', 'Virtualization', 'Virtualization Management', 'Virtual Cloud Network', 'Virtualizing Business Critical Applications', 'Virtualizing Big Data', 'Virtualizing High Performance Computing', 'Business Continuity & Disaster Recovery', 'Open Source @ Cadentic', 'Edge and Internet of Things (IoT)']
                    },
                    {
                        title: 'Industry Solutions',
                        links: ['Education', 'Financial Services', 'Government', 'Healthcare', 'Manufacturing', 'Retail', 'Telecommunication']
                    },
                    {
                        title: 'Software Defined Data Center',
                        links: ['SDDC Overview', 'Software Defined Storage (SDS)', 'Software Defined Networking (SDN)', 'Cadentic Validated Design']
                    },
                    {
                        title: 'Software-Defined WAN',
                        links: ['SD-WAN Overview', 'SD-WAN vs Traditional WAN', 'SD-WAN vs Branch Routers', 'Hybrid WAN and SD-WAN', 'Cloud-Based SD-WAN', 'SD-WAN for the Branch', 'MPLS and SD-WAN']
                    }
                ]
            },
            {
                icon: 'fa-briefcase', text: 'PROFESSIONAL SERVICES', numCols: 1, contCol: [2],
                values: [{
                    title: 'Professional Services Overview',
                    links: ['Strategy and Planning', 'Integration and Configuration', 'Optimization and Advocacy']
                },
                    {
                        title: 'Education Services',
                        links: ['Training', 'Cadentic Learning Zone', 'Certification']
                    }
                ]
            },
            {
                icon: 'fa-save', text: 'DOWNLOADS', numCols: 4, contCol: [1, 1, 1, 1],
                values: [{
                    title: 'Product Downloads',
                    links: ['vSphere', 'vCloud Suite', 'vSAN', 'NSX Data Center for vSphere', 'NSX-T Data Center', 'Site Recovery Manager', 'Horizon 7', 'Fusion', 'Workstation Pro', 'Workspace ONE and AirWatch']
                },
                    {
                        title: 'Free Product Trials & Demos',
                        links: ['vCloud Suite', 'vSphere', 'vSAN', 'Site Recovery Manager', 'Horizon 7', 'Fusion', 'Wrokstation Pro', 'All Product Trials']
                    },
                    {
                        title: 'Free Product Downloads',
                        links: ['vSphere Hypervisor', 'vCenter Converter', 'Workstation Player', 'Software Manager', 'Cadentic Remote Console']
                    },
                    {
                        title: 'All Downloads, Drivers & Tools, EULA',
                        links: ['Open Source', 'End User Terms and Conditions']
                    }
                ]
            },
            {
                icon: 'fa-users', text: 'PARTNER PROGRAMS', numCols: 3, contCol: [2, 1, 1],
                values: [{
                    title: 'Work With Our Partners',
                    links: ['Master Services Partners', 'Global Alliances – OEM', 'Global Alliances – SI/SO', 'Global Strategic Technology Partners', 'Partner Locator', 'Cadentic Solution Exchange', 'Cadentic Cloud Marketplace']
                },
                    {
                        title: 'Global Research And Education',
                        links: ['Cadentic IT Academy', 'Cadentic Academic Program']
                    },
                    {
                        title: 'Become A Partner',
                        links: ['Cadentic Partner Programs', 'Solution Provider Program', 'Cloud Provider Program', 'Technology Alliance Partner Program (TAP)', 'ISV Center', 'OEM Partner Program', 'Embedded OEM', 'Cadentic Authorized Training Centers (VATC)']
                    },
                    {
                        title: 'Excel As A Partner',
                        links: ['Partner Central Log in', 'Partner Resources', 'Partner Learning', 'Cadentic Ready', 'My Cadentic for Partners', 'Code of Conduct', 'Solution Competencies', 'Master Services Competencies', 'Partner Demand Center', 'Marketing Brand Portal/Logos']
                    }
                ]
            },
            {
                icon: 'fa-building', text: 'COMPANY', numCols: 3, contCol: [1, 2, 3],
                values: [{
                    title: 'Company Information',
                    links: ['About Us', 'Executive Leadership', 'Why Choose Cadentic?', 'Acquisitions', 'Cadentic on Cadentic', 'Cadentic Innovation', 'Research and Academia', 'Briefing Center', 'Office Locations', 'Contact Cadentic', 'Sustainability', 'Diversity & Inclusion', 'Cadentic Foundation', 'Cadentic Merchandise']
                },
                    {
                        title: 'News',
                        links: ['Newsroom', 'RADIUS', 'Media Resources', 'Events & Webcasts']
                    },
                    {
                        title: 'Investor Relations',
                        links: ['Overview', 'Events & Presentations', 'Financial Information', 'SEC Filings', 'Stock Information', 'Governance', 'Resources']
                    },
                    {
                        title: 'Customers',
                        links: ['Customer Stories']
                    },
                    {
                        title: 'CIOs',
                        links: ['CIO Vantage']
                    },
                    {
                        title: 'Careers',
                        links: ['Working at Cadentic']
                    }
                ]
            },
        ],
        itemSelected: '',
        closeIcon: 'fa-times',
        n: 0,
        mode: true,
        selectedText: 'CADENTIC CLOUD',
        edit:true,
        list:[],
        contact:{
          id:'',
          name:'',
          email:'',
          phone:''
        },
        submit:'',
        b1_t:'',
        b1_l:[
            {
              link:'',
              url:''
            },
        ],
        b2_t:'',
        b2_l:[
            {
              link:'',
              url:''
            },
        ],
        b3_t:'',
        b3_c:'',
        b3_l1:'',
        b3_l2:'',
        b3_i:[
          {
            images:'',
          }
        ],
        b4_c:'',
        b4_t:'',
        b5_a:[
          {
            link: '',
          }
        ],
        csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
    props: {
        source: String
    },
    mounted: function(){
      console.log('Contacts Component Loaded...');
    },
    methods: {
        Edit: function(e){
          alert('Previous Draft');
          let data = axios.get('../json/draft_main/draft_main.json').then(res=>{console.log(res);
            this.b1_t=res.data.b1_t;
            this.b2_t = res.data.b2_t;
            this.b3_t = res.data.b3_t;
            this.b3_c = res.data.b3_c;
            this.b3_l1 = res.data.b3_l1;
            this.b3_l2 = res.data.b3_l2;
            this.b4_c = res.data.b4_c;
            this.b4_t = res.data.b4_t;
            var _this = this;
            for(var i=0;i<res.data.b1_l.length;i++){
              _this.b1_l.push({link:res.data.b1_l[i],url:res.data.b1_u[i]});
            }
            this.b1_l.splice(0,1);
            for(var i=0;i<res.data.b2_l.length;i++){
              _this.b2_l.push({link:res.data.b2_l[i],url:res.data.b2_u[i]});
            }
            this.b2_l.splice(0,1);
            for(var i=0;i<res.data.b5_l.length;i++){
              _this.b5_a.push({link:res.data.b5_l[i]});
            }
            this.b5_a.splice(0,1);
          });
          e.preventDefault();
        },
        add(index){
          this.b1_l.push({link:'',desc:''});
        },
        remove(index,e){
          this.b1_l.splice(index,1);
        },
        add2(index){
          this.b2_l.push({link:'',desc:''});
        },
        remove2(index,e){
          this.b2_l.splice(index,1);
        },
        add3(index){
          this.b3_i.push({images:''});
        },
        remove3(index,e){
          this.b3_i.splice(index,1);
        },
        add4(index){
          this.b5_a.push({link:''});
        },
        remove4(index,e){
          this.b5_a.splice(index,1);
        },
        isItemSelected() {
            return this.itemSelected !== '' && this.itemSelected.text !== this.selectedText
        },
        show(item) {
            if (item.text === this.itemSelected.text) {
                this.$router.push('/').catch(err => {
                })
                this.itemSelected = ''
            } else {
                this.itemSelected = item
                if (item.text === this.selectedText) {
                    this.$router.push('/admin/manage/v3').catch(err => {
                    })
                }
            }
        },
        close() {
            this.itemSelected = ''
        },
        getTitle(containerIndex, numColumn) {
            let n = 0
            let z = 0
            while (z < numColumn) {
                n = n + this.itemSelected.contCol[z]
                z++
            }
            return this.itemSelected.values[n + containerIndex].title
        },
        getLinks(containerIndex, numColumn) {
            let n = 0
            let z = 0
            while (z < numColumn) {
                n = n + this.itemSelected.contCol[z]
                z++
            }
            return this.itemSelected.values[n + containerIndex].links
        },
    },
    created() {
        console.log("sdfsdf");
        if (localStorage.getItem('itemSelected')) {
            this.itemSelected = JSON.parse(localStorage.getItem('itemSelected'))
        }
        this.$eventHub.$on('changeMode', () => {
            this.mode = false
        });
    },
  }
</script>



<style scoped>

    .view {
        position: absolute;
        top: 65px;
        left: 165px;
        right: 0;
        bottom: 0;
        background: white;
    }

    .sidebar {
        position: fixed;
    }

    img {
        width: 100%;
    }

    .title {
        font-size: 1em;
    }

    .v-navigation-drawer {
        width: 165px !important;
    }

    .input-group__details:after {
        background-color: rgba(255, 255, 255, 0.32) !important;
    }

    .v-list-item {
        justify-content: center;
    }

    .v-list-item:hover {
        color: #1976d2 !important;
    }

    .v-list-item__title {
        text-align: center;
        color: white;
        font-size: 0.7em;
        margin-top: 0.3em;
        white-space: nowrap;
        overflow: hidden;
        white-space: initial;
    }

    .v-navigation-drawer {
        background: #1976d2 none repeat scroll 0 0 !important;
    }

    .v-navigation-drawer__content {
        overflow: hidden !important;
    }

    .v-toolbar {
        background-color: #1976d2 !important;
        background: transparent;
        position: fixed;
        left: 165px;
        right: 0;
        z-index: 10;
    }

    a {
        text-decoration: none;
        width: 100%;
    }

    .v-icon {
        color: white !important;
    }

    .v-btn {
        width: auto !important;
        color: white !important;
        font-weight: normal;
        font-size: 0.7em !important;
        text-transform: capitalize;
    }

    .v-btn .v-icon {
        font-size: 1.5em;
    }

    .v-menu__content {
        background: #1976d2 !important;
    }
    html and css form
    .v-list {
        background: #1976d2 !important;
    }

    .v-input {
        flex: none;
        padding-top: 1.9em !important;
    }

    .v-input__slot {
        height: 1em !important;
    }

    .v-overlay {
        left: 165px !important;
        z-index: 15 !important;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 4em;
    }

    .v-overlay__content {
        position: absolute !important;
        top: 4em !important;
        left: 4em !important;
    }

    .closeIcon {
        font-size: 2em !important;
    }

    .selected {
        background-color: rgb(33, 33, 33);
    }

    .cols-container {
        padding-right: 2em !important;
    }

    .links-title {
        margin-top: 3em;
        font-size: 0.9em;
    }

    .links {
        font-size: 0.9em;
        color: grey;
    }

    .links:hover {
        color: #1976d2;
    }

    main {
        padding-top: 70px !important;
    }

    div.shift-right{
      display: grid;
      grid-template-columns: 180px auto;
    }

    input[type=text], select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
      }

      input[type=submit] {
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      input[type=submit]:hover {
        background-color: #45a049;
      }

      .topspace{
        height: 50px;
        grid-column: 1/span 2;
      }

      div.ma {
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
      }

      .mygrid{
        display: grid;
        grid-template-columns: auto auto auto;
        padding: 10px;
        grid-gap: 20px;
      }

      .myDiv1{
        display:grid;
        grid-template-columns: auto 40px;
      }

      #myDivp{
        padding-top: 12px;
      }

</style>
