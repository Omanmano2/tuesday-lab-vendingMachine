import { ProxyState } from "../AppState.js"
import { moneyService } from "../Services/MoneyService.js"




export class MoneyController {
  constructor(){
    console.log('moneyController linked')
  }
  addQuarter(){ 
    moneyService.addQuarter()
    document.getElementById('moneyCount').innerHTML = ProxyState.money
  }
  doTransaction(){
    moneyService.doTransaction()
  }
}



