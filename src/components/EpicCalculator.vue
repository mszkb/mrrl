<template>
    <div class="columns">
        <div class="column" v-for="(item, index) in getSpecial" :key="index">
            <div class="epic">
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

            <div v-show="mod[index] > 0">
                <div>
                    <div v-for="(rare, rareId) in blues(item.needitemid, item)" :key="'rare'+rareId"  class="shopping-list">
                        <div class="blue item-box">
                            <a :data-wowhead="`item=${rare.itemid}`" target="_blank">
                                <img :src="getImgUrl(rare.icon)" :alt="rare.itemname"/>
                            </a>
                            <div class="item-info">
                                <span class="needed-amount">{{ item.amount[rareId] * mod[index] }}x</span><br />
                                <span class="vendor">
                                    <a :data-wowhead="`npc=${getvendor(rare.vendorid).id}`">
                                        {{ getvendor(rare.vendorid).name }}
                                    </a>
                                </span>
                            </div>

                        </div>

                        <div>
                            <div v-for="(green, greenId) in greens(rare.needitemid)" :key="'green'+greenId">
                                <div class="green item-box">
                                    <a :data-wowhead="`item=${green.itemid}`" target="_blank">
                                        <img :src="getImgUrl(green.icon)" :alt="green.itemname"/>
                                    </a>
                                    <div class="item-info">
                                        <span class="needed-amount">{{ rare.amount[greenId] * item.amount[rareId] *
                                        mod[index]
                                        }}x
                                        </span><br />
                                        <span class="vendor">
                                            <a :data-wowhead="`npc=${getvendor(green.vendorid).id}`">
                                                {{ getvendor( green.vendorid).name }}
                                            </a>
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <div v-for="(white, whiteId) in whites(green.needitemid)" :key="'white'+whiteId">
                                        <div class="white item-box">

                                            <a :data-wowhead="`item=${white.itemid}`" target="_blank">
                                                <img :src="getImgUrl(white.icon)" :alt="white.itemname"/>
                                            </a>
                                            <div class="item-info">
                                                <span class="needed-amount">{{ green.amount[whiteId] * rare.amount[greenId] *
                                                    item.amount[rareId] * mod[index] }}x
                                                </span><br />
                                                <span class="vendor">
                                                    <a :data-wowhead="`npc=${getvendor(white.vendorid).id}`">
                                                        {{ getvendor( white.vendorid).name }}
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
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
  import {special, vendor, m, pricing} from '../assets/data'
  // You need blue, green and white items
  export default {
    name: "EpicCalculator",
    data() {
      return {
        mod: [0, 0, 0, 0],
        publicPath: process.env.BASE_URL,
      }
    },
    computed: {
      getSpecial() {
        return special
      },
      getPricing() {
        return pricing
      }
    },
    methods: {
      getItemById(id) {
        return m[id]
      },
      blues(blueIds) {
        return blueIds.map(b => this.getItemById(b))
      },
      greens(greenIds) {
        return greenIds.map(g => this.getItemById(g))
      },
      whites(whiteIds) {
        return whiteIds.map(w => this.getItemById(w))
      },
      nextItem(needid) {
        return m[needid]
      },
      getvendor(id) {
        return vendor[id]
      },
      getImgUrl(pic) {
        return require('../assets/icons/' + pic + '.jpg')
      }
    }
  }
</script>

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


    .item-info {
        position: absolute;
        top: 10px;
        left: 70px;
    }

    .item-box {
        padding: 2px;
        text-align: left;
        line-height: 20px;
        height: 66px;
        position: relative;
        margin-bottom: 10px;
        transition: 0.3s all ease-in-out;
    }

    .epic {
        border: 3px solid #a335ee;
        padding: 10px;
        margin-bottom: 10px;
    }

    .blue {
        border: 3px solid #0070dd;
    }

    .green {
        border: 3px solid #1eff00;
    }

    .white {
        border: 3px solid transparent;
    }

    .green > div + div {
        border-top: none;
    }

    .white:hover {
        box-shadow: 0px 0px 15px 0px rgba(10, 10, 10, .3);
    }

    .green:hover {
        box-shadow: 0px 0px 15px 0px rgba(30, 255, 0, .7);
    }

    .blue:hover {
        box-shadow: 0px 0px 15px 0px rgba(0, 112, 221, .7);
    }

    .shopping-list {
        margin-bottom: 30px;
    }

</style>