<template>
    <div class="columns">
        <div class="column" v-for="(item, index) in getRare" :key="index">
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
</template>

<script>
    import {final, vendor, m} from "../assets/data";

    // You only need greens and white items
  export default {
    name: "RareCalculator",
    data () {
      return {
        mod: [0,0,0,0,0]
      }
    },
    computed: {
      getRare () {
        return final
      }
    },
    methods: {
      greens () {
        // You probably need two greens for one blue
      },
      whites() {
        // You only need one white item per green
      },
      nextItem(needid) {
        return m[needid]
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
    .epic {
        border: 3px solid #a335ee;
        padding: 10px;
        margin-bottom: 10px;
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