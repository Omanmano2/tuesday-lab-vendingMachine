

  export class Snack{
    constructor (name, price){
      this.name = name
      this,price = price
    }
  }

get Template() {
  return 
  <div class="row text-center mt-5">
  <div class="col-md-4">
    <img src="https://m.media-amazon.com/images/I/61Q7SR0r9XL._SL1500_.jpg" class="img-fluid" alt="coke">
    <button type="button" class="btn btn-success border-2 border-dark" onclick="app.moneyController.doTransaction()">Buy Coke</button>
  </div>
}