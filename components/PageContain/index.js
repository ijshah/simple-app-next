import React, { Component } from "react";
import axios from "axios";
import on from 'await-handler'

export default class PageContain extends Component {
  constructor(props, context) {
    super(props, context);
    // METHOD BINDING
    this.jsonCall = this.jsonCall.bind(this);
    this.state = { data: [],isIE:false };
  }


  API = async () => {
   return await axios.get(
      `https://jsonplaceholder.typicode.com/todos/1`
    ).then(response => {return response}).catch(error => {return error})
  }
  // ASYNC FUNCATION FOR ON EVENT CALLING
  jsonCall = async () => {
    // WITH AXIOS
    // const response = await axios.get(
    //   `https://jsonplaceholder.typicode.com/todos/1`
    // );
    // console.log(response);
    // let json = response.data;
    // this.setState({ user: json });
   let [err, result] = await on(this.API());
    if(err) {
        throw err;
    }
    
    // ... handle the result
    console.log('RESULT',result);
    this.setState({ user: result.data });
  };

  // ASYNC EVENT
  async componentDidMount() {
    const response = await axios.get(
      `https://api.coinmarketcap.com/v1/ticker/?limit=10`
    );
    let json = await response.data;
    this.setState({ data: json });
    const isEdge = window.navigator.userAgent.indexOf('Edge') != -1
    const isIE = window.navigator.userAgent.indexOf('Trident') != -1 && !isEdge
    if(isIE){
      this.setState({ isIE: true });
    }
  }

  render() {
    return (
      <div className="hero">
        <h1 className="title">Welcome to Simple Page!</h1>
        <ul>
          {this.state.data.map(el => (
            <li key={el.id}>
              {el.name}: {el.price_usd}
            </li>
          ))}
        </ul>
        {this.state.user ? (
          <ol>
            <li>{this.state.user.id}</li>
            <li>{this.state.user.title}</li>
          </ol>
        ) : (
          ``
        )}

        <a href="javascript:void(0)" onClick={this.jsonCall}>
          {" "}
          CLICK TO CALL API
        </a>
        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9b9b9b;
          }
          .card:hover {
            border-color: #067df7;
          }
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
        `}</style>
      </div>
    );
  }
}
