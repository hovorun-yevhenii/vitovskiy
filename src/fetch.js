const baseUrl = "https://spreadsheets.google.com/feeds/cells/";
const tables = {
    adviseToVisit: '1XmLRvWSZAZmJGrzOSlQGW8_VXhX_M57ASdT8YDCNt1o',
    publicInfo: '110nSzv4nJgmCe6QfL1LzW-1kVn5Ok54H5q-_eW4Ls58',
    news: '10afZFT-ydBJJU4GNh3bUxbHwZFEh2jc-VrjyVJ3ftO4'
};

export default function (entity, page = 1) {
    return fetch(`${baseUrl}${tables[entity]}/${page}/public/full?alt=json`)
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

            return output;
        });
};
