import { ProxyState } from "../AppState.js"

class MoneyService{
 constructor() {
   console.log('money service is up')
 }
 addQuarter(){
   ProxyState.money += .25
   console.log('quarter function is linked')
 }
 doTransaction(){
   console.log('bought a drink')
 }
}

export const moneyService = new MoneyService() 