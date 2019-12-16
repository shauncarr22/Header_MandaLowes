import React, {Component} from 'react';
import axios from 'axios';
// import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: [],
            query: ''
        };
  
    }

    componentDidMount() {
        this.getItems();
    }

    handleChange (event) {
        this.setState({ query: event.target.value });
      }

    getItems() {
        axios.get(`http://localhost:8080/spears`)
          .then(res => {
            this.setState({ search: res.data });
          })
      }

      getItem() {
          axios.get(`http//localhost:8080/spears/:id`)
          .then(res => {
            this.setState({search: res.data})
          })
      }


      handleSubmit () {
    event.preventDefault();
    console.log('1')
    // axios.get(`http//localhost:8080/spears/:id`)
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
  }

    render() {
        return (

            <div className="App">
                <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="lower-top-bar">
               <div className="top-bar"> 
               <p className="top-bar-loc">In a Galaxy Far, Far Away</p>
               <p className="top-bar-hours">Open Until 9PM!</p>
               <img className="down-arrow" src="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png"/>
               <p className="order-status">Order Status</p>
               <img className="arrow" src="https://www.ilogic-repairs.com/wp-content/uploads/2015/04/iconmonstr-location-16-icon-neg.png"/>
               <p className="credit-card-text">Manda Lowe's Credit Card</p>
               <img className="credit-card-pic" src="https://icon-library.net/images/credit-card-icon-white/credit-card-icon-white-1.jpg"/>
               </div>
        
                <div className="bar">
                  <a className="active" href="ok">Shop</a>
                  <a className="active" href="ok">Ideas</a>
                  <a className="active" href="saving">Savings</a>

                  <input type="text" className="search_bar" search-bar="search-bar" placeholder="What are you looking for today?" onChange={this.handleChange.bind(this)} />

                  <img className="lowes" src="https://www.lowescdn.com/images/ui/LowesLogo.svg"/>
                  <img className="person-icon" src="http://cdn.onlinewebfonts.com/svg/img_415067.png"/>
                  <img className="cart" src="https://images.squarespace-cdn.com/content/v1/59e3968ef9a61e9f80411ea0/1554944273458-0N8GDL6ZU04RB3L25SJX/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwkCFOLgzJj4yIx-vIIEbyWWRd0QUGL6lY_wBICnBy59Ye9GKQq6_hlXZJyaybXpCc/Shopping+Cart.png" />
                </div>
              </div>
              <div className="graybar">
                    <a className="graybar-link" href="shop-gifts-for-any-list">SHOP FOR GIFTS NOW ></a>
                </div>
              <div>
                <ul>
                        { this.state.search.map(search => <li>{search.item}</li>)}
                </ul>
              </div>
            </form>
        </div>
          );
    }
}

export default App;