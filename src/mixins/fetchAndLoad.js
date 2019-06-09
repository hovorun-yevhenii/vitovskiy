export default {
  data() {
    return {
      isLoading: false,
      fetchError: false,
      baseUrl: "https://spreadsheets.google.com/feeds/cells/",
      tables: {
        adviseToVisit: '1XmLRvWSZAZmJGrzOSlQGW8_VXhX_M57ASdT8YDCNt1o',
        publicInfo: '110nSzv4nJgmCe6QfL1LzW-1kVn5Ok54H5q-_eW4Ls58',
        news: '10afZFT-ydBJJU4GNh3bUxbHwZFEh2jc-VrjyVJ3ftO4',
        structureVMK: '1LclbO2NmahlMvAD0pgKShG9vxhz877XdyFVRo6VCa8E'
      }
    }
  },
  methods: {
    $fetch(entity, page = 1) {
      this.isLoading = true;

      return fetch(`${this.baseUrl}${this.tables[entity]}/${page}/public/full?alt=json`)
        .then(this.checkError)
        .then(table => table.json())
        .then(table => {
          const entries = table['feed'].entry;
          const keys = [];
          const output = [];

          while (entries[0]['gs$cell']['row'] === "1") {
            keys.push(entries[0].content['$t']);
            entries.splice(0, 1);
          }

          entries.forEach(({content}, index) => {
            const key = index % keys.length;
            const order = Math.floor(index / keys.length);

            output[order] = output[order] || {};
            output[order][keys[key]] = content['$t'];
          });

          this.isLoading = false;
          return output;
        })
        .catch(this.reportError);
    },
    checkError(response) {
      if (response.ok) return response;
      throw Error(response.statusText);
    },
    reportError(error) {
      this.isLoading = false;
      this.fetchError = true;
      console.log ( '%c%s', 'color: crimson; font: 1rem/2 Tahoma;', error );
    }
  }
}
