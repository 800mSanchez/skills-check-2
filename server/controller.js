module.exports = {

    getProduct: (req,res) => {
        const db = req.app.get('db');

        db.get_products()
        .then( products => res.status(200).send(products))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong."});
          console.log(err)
    })
    },

    addProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, price, image} = req.params
        db.add_product([name, price, image])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something Went wrong"})
            console.log(err)
        })
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
    
        db.delete_product(id)
          .then(() => res.sendStatus(200))
          .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong" });
            console.log(err)
          });
    }
}