<template>
  <div class="hello">
    <h1 class="title">Mrrl's Trading Games</h1>
    <h2 class="subtitle">Calculator</h2>
    
    <section>
    <div class="columns">
      <div class="column" v-for="(item, index) in finalItems" :key="index">
        <div class="blue">
          <img :src="`${publicPath}icons/${item.icon}.jpg`"/>
          <div class="itemname">{{ item.itemname }}</div>
          <div class="vendor">from {{ getvendor(item.vendorid).name }}</div>
          <b-field>
            <b-input placeholder="eg. 4" v-model="mod[index]"/>
          </b-field>
        </div>
        
        <div class="green" v-if="item.needitemid.length === 2">
          <div><img :src="`${publicPath}icons/${nextItem(item.needitemid[0]).icon}.jpg`"/>
            <div class="itemname">{{ nextItem(item.needitemid[0]).itemname }}</div>
            <div class="vendor">from {{ getvendor(nextItem(item.needitemid[0]).vendorid).name }}</div>
            <div class="needed-amount">{{ item.amount[0] * mod[index] }}x</div>
          </div>
          
          <div><img :src="`${publicPath}icons/${nextItem(item.needitemid[1]).icon}.jpg`"/>
            <div class="itemname">{{ nextItem(item.needitemid[1]).itemname }}</div>
            <div class="vendor">from {{ getvendor(nextItem(item.needitemid[1]).vendorid).name }}</div>
            <div class="needed-amount">{{ item.amount[1] * mod[index] }}x</div>
          </div>
        </div>
        <div v-else class="green">
          <div><img :src="`${publicPath}icons/${nextItem(item.needitemid[0]).icon}.jpg`"/>
            <div class="itemname">{{ nextItem(item.needitemid[0]).itemname }}</div>
            <div class="vendor">from {{ getvendor(nextItem(item.needitemid[0]).vendorid).name }}</div>
            <div class="needed-amount">{{ item.amount[0] * mod[index] }}x</div>
          </div>
        </div>
        
        <div class="white">
          <div><img :src="`${publicPath}icons/${nextItem(nextItem(item.needitemid[0]).needitemid[0]).icon}.jpg`"/>
            <div class="itemname" >{{ nextItem(nextItem(item.needitemid[0]).needitemid[0]).itemname }}</div>
            <div class="vendor">from {{ getvendor(nextItem(nextItem(item.needitemid[0]).needitemid[0]).vendorid).name }}</div>
            <div class="needed-amount">{{item.amount[0] * nextItem(item.needitemid[0]).amount[0] * mod[index] }}x</div>
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
import BInput from "buefy/src/components/input/Input";

export default {
  name: 'Mrrgl',
  components: {BInput, BField},
  props: {
    msg: String
  },
  data() {
    return {
      mod: [],
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

a {
  color: #42b983;
}

.column > div {
  min-height: 200px;
}

.column .green {
  min-height: 350px;
}

.itemname {
  height: 60px;
}

section {
  margin-top: 40px;
  max-width: 1024px;
  margin: 0 auto;
}

</style>
