import fs from 'fs'
import config from "./seed.config.mjs";

config.pages.forEach(async e => {
    try {
        const res = await fetch(e.src)
        const data = await res.text()
        fs.writeFileSync(`./pages/docs/${e.title}.mdx`, data)
    } catch (err) {
        console.log(err)
    }
})