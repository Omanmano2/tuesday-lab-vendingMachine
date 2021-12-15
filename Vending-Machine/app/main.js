import { MoneyController } from "./Controllers/moneyController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();
  moneyController = new MoneyController();  
}

window["app"] = new App();
