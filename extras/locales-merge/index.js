const fs = require("fs")
const path = require("path")
const propertiesToJSON = require("properties-to-json")

const fileMapping = {
  "Midpoint_en.properties":"en_US.json",
  "Midpoint_zh_CN.properties":"zh-Hans.json",
}

for(let x in fileMapping){
  const midPointResPath = path.join(__dirname, 'midPoint-locales', x)
  const midPointRes = fs.readFileSync(midPointResPath, {encoding: "utf-8"})
  const midPointResObj = propertiesToJSON(midPointRes)

  const siteResPath = path.join(__dirname, 'site-locales', fileMapping[x])
  const siteResObj = require(siteResPath)

  const dstResPath = path.join('..','..','src','languageProvider','locales',fileMapping[x])
  fs.writeFileSync(dstResPath, JSON.stringify(
    Object.assign({}, siteResObj, midPointResObj)
  ))

  console.log(`Created: ${dstResPath}`)
} 

