import mercadopago from "mercadopago"

const createOrder = async () => mercadopago.configure({
    access_token: process.env.NEXT_ACCESS_TOKEN
})

const resultTransference = await mercadopago.preferences.create({
  items: [{
    title: "cuota mensual",
    unit_price: 10000,
    currency_id: "ARS",
    quantity: 1
  }]
})

console.log(resultTransference)

export default createOrder