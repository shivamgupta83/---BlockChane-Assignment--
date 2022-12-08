const route = require('express').Router()
const axios = require('axios');
const cripto = require("../models")
 


route.get("/get", async function (req, res) {

    try {
        let header = req.headers["authorization"]
       
        if (!header) { return res.send({ msg: "header is not present....." }) }

        let options = await axios.get(`https://api.coincap.io/v2/assets`, {
            headers: {
                Authorization:header,
            }
        })
        let result = options
        let ans = result.data
        let final = ans.data.sort((a, b) => b.changePercent24Hr.localeCompare(a.changePercent24Hr))

        await cripto.deleteMany()

        let finalData = await cripto.create(final)
     
        res.status(200).send({status:true , msg: finalData})

    } catch (err) {

        return res.status(500).send({ status: false, msg: err.message })
    }
})

module.exports = route