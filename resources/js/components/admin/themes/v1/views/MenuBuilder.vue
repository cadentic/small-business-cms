<template>
  <v-container
    fill-height
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="12">
        <material-card
          color="green"
          title="Menu Building"
          text="Created using Roboto Font Family"
        >
          <div>
            <v-btn @click.stop="dlg_addbtn = true">Add Items</v-btn>
            <v-btn color="red darken-1" @click.stop="save_json">Save Menu</v-btn>
          </div>

          <kanban-board :stages="menudata.stages" :blocks="menudata.blocks" @update-block="updateBlock">
            <div v-for="stage in menudata.stages" :slot="stage" :key="stage" style="border-bottom: black solid;">
              <h2>{{ stage }}</h2>
            </div>
            <div v-for="block in menudata.blocks" :slot="block.id" :key="block.id">
              <div>
                {{ block.title }}
              </div>
              <div>
                {{ block.url }}
              </div>
              <div>
                <v-btn class="mx-2" fab dark x-small color="primary" @click.stop="dlg_editbtn = true, edit_title = block.title, edit_stage = block.stage, edit_id = block.id, edit_url = block.url">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn class="mx-2" fab dark x-small color="primary" @click.stop="dlg_deletefunc(block)">
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
              </div>
            </div>
          </kanban-board>

          <v-dialog v-model="dlg_addbtn" max-width="290">
            <v-card>
              <v-card-title class="headline">Add Menu Item</v-card-title>

              <div class="container">
                <v-textarea v-model="new_title" rows="1" label="Type new menu title"></v-textarea>
                <v-textarea v-model="new_url" rows="1" value="#" label="Type new menu url"></v-textarea>
                <v-overflow-btn
                  v-model="new_stage"
                  :items="menudata.stages"
                  label="Select stage"
                  target="#dropdown-example"
                ></v-overflow-btn>
              </div>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dlg_addfunc"> Ok </v-btn>
                <v-btn color="red darken-1" text @click="dlg_addbtn = false"> Cancel </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dlg_editbtn" max-width="290">
            <v-card>
              <v-card-title class="headline">Edit Menu Item</v-card-title>

              <div class="container">
                <v-textarea v-model="edit_title" rows="1" label="Type new menu title"></v-textarea>
                <v-textarea v-model="edit_url" rows="1" value="#" label="Type new menu url"></v-textarea>
                <v-overflow-btn
                  v-model="edit_stage"
                  :items="menudata.stages"
                  label="Select stage"
                  target="#dropdown-example"
                ></v-overflow-btn>
              </div>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dlg_editfunc"> Ok </v-btn>
                <v-btn color="red darken-1" text @click="dlg_editbtn = false"> Cancel </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";
import vueKanban from "vue-kanban";
import axios from 'axios';
// import menu from "../../../menu.json";
Vue.use(vueKanban);

export default {
  name: "MenuBuilder",
  created() {
    axios.get(`http://localhost:8000/import_menu`)
    .then(response => {
      this.menudata = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  data() {
    return {
      menudata: [],
      dlg_addbtn: false,
      dlg_editbtn: false,
      new_title: "",
      new_url: "",
      new_stage: "",
      edit_id: -1,
      edit_title: "",
      edit_url: "",
      edit_stage: "",
    };
  },
  methods: {
    updateBlock(id, status) {
      this.menudata.blocks.find(b => b.id === Number(id)).status = status;
      // this.save_json();
    },
    dlg_addfunc() {
      if( this.new_stage == "" | this.new_title == "" | this.new_url == "" ) return;
      
      let new_json = {
        "id" : ++ this.menudata.count,
        "status" : this.new_stage,
        "title" : this.new_title,
        "url" : this.new_url
      }
      this.menudata.blocks.push(new_json);
      
      this.dlg_addbtn = false;
      this.new_title = "";
      this.new_stage = "";
      this.new_url = "";
      // this.save_json();
    },
    dlg_editfunc() {
      if( this.edit_stage == undefined | this.edit_title == "" | this.edit_url == "" ) return;
      for (var i = 0; i < this.menudata.blocks.length; i++) {
          if (this.menudata.blocks[i].id == this.edit_id) {
              this.menudata.blocks[i].title = this.edit_title;
              this.menudata.blocks[i].status = this.edit_stage;
              this.menudata.blocks[i].url = this.edit_url;
              break;
          }
      }

      this.dlg_editbtn = false;
      this.edit_stage = undefined;
      this.edit_title = undefined;
      this.edit_url = "";
      // this.save_json();
    },
    dlg_deletefunc(block) {
      for (var i = 0; i < this.menudata.blocks.length; i++) {
          if (this.menudata.blocks[i].id == block.id) {
              this.menudata.blocks.splice(i, 1);
              break;
          }
      }
      // this.save_json();
    },
    save_json() {
      console.log("saving");
      axios.post(`http://localhost:8000/export_menu`, {
        body: this.menudata
      })
      .then(response => {})
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
};
</script>

<style lang="scss">
  @import "../../../assets/kanban.scss";
  .v-application ul, .v-application ol {
    padding-left: 0px !important;
  }
  .v-btn:not(.v-btn--round).v-size--default {
    min-width: 30px !important;
  }
</style>