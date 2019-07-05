<template>
  <div class="hello">
    <h1 class="title">
      <a data-wh-rename-link="false" target="_blank" href="https://www.wowhead.com/guides/mrrls-trading-game-obtaining-crimson-tidestallion">Mrrl's Trading Games</a>
    </h1>
    <h2 class="subtitle">Calculator</h2>
    <section>
      <div class="columns">
        <div class="column" v-for="(item, index) in finalItems" :key="index">
          <div class="blue">
            <a :data-wowhead="`item=${item.itemid}`" target="_blank">
              <img :src="getImgUrl(item.icon)" :alt="item.itemname"/>
            </a>
            <div class="itemname item-rare">{{ item.itemname }}</div>
            <div class="vendor">
              <a :data-wowhead="`npc=${getvendor(item.vendorid).id}`">
                {{ getvendor(item.vendorid).name }}
              </a>
            </div>
            <b-field>
              <b-numberinput type="is-light" min="0" v-model="mod[index]"/>
            </b-field>
          </div>
          
          <div  v-show="mod[index] > 0">
            <div class="green" v-if="item.needitemid.length === 2">
              <div>
                <a :data-wowhead="`item=${item.needitemid[0]}`" target="_blank">
                  <img :src="getImgUrl(nextItem(item.needitemid[0]).icon)" :alt="item.itemname"/>
                </a>
                <div class="itemname item-uncommon">{{ nextItem(item.needitemid[0]).itemname }}</div>
                <div class="needed-amount">{{ item.amount[0] * mod[index] }}x</div>
                <div class="vendor">
                  <a :data-wowhead="`npc=${getvendor(nextItem(item.needitemid[0]).vendorid).id}`">
                    {{ getvendor(nextItem(item.needitemid[0]).vendorid).name }}
                  </a>
                </div>
              </div>
              
              <div>
                <a :data-wowhead="`item=${item.needitemid[1]}`" target="_blank">
                  <img :src="getImgUrl(nextItem(item.needitemid[1]).icon)" :alt="item.itemname"/>
                </a>
                <div class="itemname item-uncommon">{{ nextItem(item.needitemid[1]).itemname }}</div>
                <div class="needed-amount">{{ item.amount[1] * mod[index] }}x</div>
                <div class="vendor">
                  <a :data-wowhead="`npc=${getvendor(nextItem(item.needitemid[1]).vendorid).id}`">
                    {{ getvendor(nextItem(item.needitemid[1]).vendorid).name }}
                  </a>
                </div>
              </div>
            </div>
            <div v-else class="green">
              <div>
                <a :data-wowhead="`item=${item.needitemid[0]}`" target="_blank">
                  <img :src="getImgUrl(nextItem(item.needitemid[0]).icon)" :alt="item.itemname"/>
                </a>
                <div class="itemname item-uncommon">{{ nextItem(item.needitemid[0]).itemname }}</div>
                <div class="needed-amount">{{ item.amount[0] * mod[index] }}x</div>
                <div class="vendor">
                  <a :data-wowhead="`npc=${getvendor(nextItem(item.needitemid[0]).vendorid).id}`">
                    {{ getvendor(nextItem(item.needitemid[0]).vendorid).name }}
                  </a>
                </div>
              </div>
            </div>
            
            <div class="white" v-if="item.needitemid.length === 2">
              <div>
                <a :data-wowhead="`item=${nextItem(item.needitemid[0]).needitemid[0]}}`" target="_blank">
                  <img :src="getImgUrl(nextItem(nextItem(item.needitemid[0]).needitemid[0]).icon)" :alt="item.itemname"/>
                </a>
                <div class="itemname item-common">{{ nextItem(nextItem(item.needitemid[0]).needitemid[0]).itemname }}</div>
                <div class="needed-amount">{{item.amount[0] * nextItem(item.needitemid[0]).amount[0] * mod[index] }}x
                </div>
                <div class="vendor">
                  <a :data-wowhead="`npc=${getvendor(nextItem(nextItem(item.needitemid[0]).needitemid[0]).vendorid).id}`">
                  {{ getvendor(nextItem(nextItem(item.needitemid[0]).needitemid[0]).vendorid).name }}
                  </a>
                </div>
              </div>
              <div>
                <a :data-wowhead="`item=${nextItem(item.needitemid[1]).needitemid[0]}}`" target="_blank">
                  <img :src="getImgUrl(nextItem(nextItem(item.needitemid[1]).needitemid[0]).icon)" :alt="item.itemname"/>
                </a>
                <div class="itemname item-common">{{ nextItem(nextItem(item.needitemid[0]).needitemid[0]).itemname }}</div>
                <div class="needed-amount">{{item.amount[0] * nextItem(item.needitemid[1]).amount[0] * mod[index] }}x
                </div>
                <div class="vendor">
                  <a :data-wowhead="`npc=${getvendor(nextItem(nextItem(item.needitemid[1]).needitemid[0]).vendorid).id}`">
                    {{ getvendor(nextItem(nextItem(item.needitemid[1]).needitemid[0]).vendorid).name }}
                  </a>
                </div>
              </div>
            </div>
            <div class="white" v-else>
              <div>
                <a :data-wowhead="`item=${nextItem(item.needitemid[0]).needitemid[0]}}`" target="_blank">
                  <img :src="getImgUrl(nextItem(nextItem(item.needitemid[0]).needitemid[0]).icon)" :alt="item.itemname"/>
                </a>
                <div class="itemname">{{ nextItem(nextItem(item.needitemid[0]).needitemid[0]).itemname }}</div>
                <div class="needed-amount">{{item.amount[0] * nextItem(item.needitemid[0]).amount[0] * mod[index] }}x
                </div>
                <div class="vendor">
                  <a :data-wowhead="`npc=${getvendor(nextItem(nextItem(item.needitemid[0]).needitemid[0]).vendorid).id}`">
                    {{ getvendor(nextItem(nextItem(item.needitemid[0]).needitemid[0]).vendorid).name }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {final, mapping, vendor} from "../assets/data";
import BField from "buefy/src/components/field/Field";

export default {
  name: 'Mrrgl',
  components: {BField},
  props: {
    msg: String
  },
  data() {
    return {
      mod: [0, 0, 0, 0, 0, 0],
      publicPath: process.env.BASE_URL
    }
  },
  computed: {
    finalItems() {
      return final
    }
  },
  methods: {
    nextItem(needid) {
      return mapping[needid]
    },
    getvendor(id) {
      return vendor[id]
    },
    getImgUrl(pic) {
      return require('../assets/icons/'+pic+'.jpg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a,
a:visited,
a:focus,
a:hover {
  color: black;
}

.column > div {
  min-height: 200px;
}

.column .green {
  /*min-height: 414px;*/
}

.itemname {
  height: 60px;
}

.needed-amount {
  font-weight: bold;
  font-size: 24px;
}

.vendor {
  text-decoration: underline;
  margin-bottom: 10px;
}

section {
  margin-top: 40px;
  max-width: 1024px;
  margin: 0 auto;
}

.blue {
  border: 3px solid #0070dd;
  padding: 10px;
  margin-bottom: 10px;
}

.green > div {
  border: 3px solid #1eff00;
  padding: 10px;
}

.green > div + div {
  border-top: none;
}

.white > div {
  border: 3px solid transparent;
  padding: 10px;
}

.white > div, .green > div, .blue {
  transition: 0.3s all ease-in-out;
}

.white > div:hover {
  box-shadow: 0px 0px 15px 0px rgba(10, 10, 10, .3);
}

.green > div:hover {
  box-shadow: 0px 0px 15px 0px rgba(30, 255, 0, .7);
}

.blue:hover {
  box-shadow: 0px 0px 15px 0px rgba(0, 112, 221, .7);
}

</style>
