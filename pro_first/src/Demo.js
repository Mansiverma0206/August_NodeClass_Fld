import { Component } from "react";

export class First extends Component
{
   render()
   {
      return<div>
         <h2>First Component</h2>
      </div>
   }
}

export class Second extends Component
{
   render()
   {
      return<div>
         <h3>Second Component</h3>
      </div>
   }
}

export default class Third extends Component
{
   render()
   {
      return<div>
         <h4>Third Component</h4>
      </div>
   }
}