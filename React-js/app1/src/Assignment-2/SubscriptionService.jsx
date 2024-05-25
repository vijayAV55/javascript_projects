import { Component } from "react";


export class SubscriptionService extends Component{
     state = {
        subscriptionname:"game",
        subscriptionprice:"39999",
        renewaldate:"23/4/2005",
        subscribe : function(){},
        unsubscribe : function(){},
        subscribedetails : function(){},
     }
 render(){
    return <div>
        <p>{this.state.subscriptionname}</p>
        <p>{this.state.subscriptionprice}</p>
        <p>{this.state.renewaldate}</p>
    </div>
 }

}