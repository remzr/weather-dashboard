import "./style.css";
import { testCall } from "./weather-api";
import { updateTemperature } from "./write-to-DOM";

testCall();
updateTemperature(16);