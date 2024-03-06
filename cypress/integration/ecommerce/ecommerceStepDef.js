import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../../support/pageObjectModel/HomePage';

const hp=new HomePage();

Given('I open Ecommerce page',()=>{
hp.formFill();
})
