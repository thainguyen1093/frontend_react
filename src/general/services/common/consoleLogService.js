/**
 * This service using to logging by config to avoid flood logging in console
 * */
import {isAllowConsoleLog} from './configService';

export function log(){
  if (isAllowConsoleLog()){
    console.log(arguments);
  }
}

export function error(){
  if (isAllowConsoleLog()){
    console.error(arguments);
  }
}