import axios from 'axios'

const getForm = (req, res) => {

    const data = [];
    let fecha="Octubre 2014";

    res.render('layout', { data, fecha })
}

const getdata = (req, res) => {

    const { txtsearch } = req.body;

    let url = `https://api.github.com/users/${txtsearch}`

    axios.get(url)
        .then(response => {
            const data = response.data;

            let date = new Date(data.created_at)
            let fecha = date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })

            res.render('layout', { data,fecha })

        })
        .catch(err => {
            const errortext = err.response.statusText || "ocurrio un error",
                code = err.response.status;

            res.render('error', { errortext, code })
        })

}

export default {
    getForm,
    getdata
}