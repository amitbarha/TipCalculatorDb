const Tip = require('./../models/tip')

exports.create = async (req, res) => {
    try {
        const tipExists = await Tip.findOne({ country: req.body.country })
        if (tipExists) {
            return res.status(400).json('Post already exist')
        }
        const newTip = await Tip.create(req.body)
        return res.status(200).json(newTip)
    }
    catch (err) {
        res.status(500).json(err.message)
    }
}

exports.update = async (req, res) => {
    try{
        console.log(req.body)
        const updatedTip = await Tip.findByIdAndUpdate(req.body._id, req.body, {new:true})
        console.log(updatedTip);
        res.status(200).json(updatedTip)
    }
    catch (err){
      res.status(500).json(err.message)
    }
}


exports.getAll = (req, res) => {
    Tip.find({}).then((data) => {
        res.send(data)
    })
}