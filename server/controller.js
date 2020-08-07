module.exports = {

    getProduct: (req,res) => {
        const db = req.app.get('db');

        db.get_products()
        .then(products => res.status(200).send(products))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong."});
          console.log(err)
    })
    },

    addProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, price, image} = req.body
        db.add_product([name, price, image]).then(product => {
            res.status(200).send(product)
        })
    },

    /* deleteProduct: (req, res) => {
        const {id} = req.params
        const index = products.findIndex( products => products.id === +id)
            if (index === -1) {
                res.status(404).send('Product not found on list')
            } else {
                movies.splice(index, 1)
                res.status(200).send(product)
            }
    } */
}