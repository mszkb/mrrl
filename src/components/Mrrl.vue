<template>
  <div class="hello">
    <h1 class="title">
      <a data-wh-rename-link="false" target="_blank" href="https://www.wowhead.com/guides/mrrls-trading-game-obtaining-crimson-tidestallion">Mrrl's Trading Games</a>
    </h1>
    <h2 class="subtitle">Calculator</h2>
    <b-switch v-model="itemSwitch">
      {{ itemSwitch ? "Epic" : "Rare" }}
    </b-switch>
    <div v-if="itemSwitch">
      You need the special back to see them
    </div>
    <section v-if="itemSwitch">
      <EpicCalculator />
    </section>
    <section v-else>
      <RareCalculator />
    </section>
  </div>
</template>

<script>
  import {special, m, vendor, final} from "../assets/data";
import BField from "buefy/src/components/field/Field";
import axios from "axios";
  import EpicCalculator from "./EpicCalculator";
  import RareCalculator from "./RareCalculator";

export default {
  name: 'Mrrgl',
  components: {RareCalculator, EpicCalculator },
  props: {
    msg: String
  },
  data() {
    return {
      mod: [0, 0, 0, 0, 0, 0],
      publicPath: process.env.BASE_URL,
      wowheadIDnormal: 0,
      wowheadIDspecial: 0,
      itemSwitch: true
    }
  },
  mounted () {
    axios.get('/api/rss.xml')
      .then((e) => {
        // Get the first link which includes 'heute-in-mechagon'
        let test = e.data.split("\n").filter((e) => {
          return e.includes("heute-in-mechagon")
        })[0]
        test = test.replace("<link>", "")
        test = test.replace("</link>", "")
        test = test.replace("http://www.vanion.eu/", "").trim()

        axios.get('/api/' + test)
          .then((f) => {
            const wowheadlink = f.data.split("Die heutigen Waren")[1].split("https://de.wowhead.com/item=")
            this.$data.wowheadIDnormal = wowheadlink[1].substr(0,6)
            this.$data.wowheadIDspecial = wowheadlink[2].substr(0,6)

            console.log(this.$data.wowheadIDnormal)
            console.log(this.$data.wowheadIDspecial)
          })
      })
  },
  computed: {
    specialItems() {
      return special
    },
    rareItems() {
      return final
    }
  },
  methods: {
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
