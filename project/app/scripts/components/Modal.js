import React from "react";
import {hashHistory} from "react-router";
import store from '../store';

export default React.createClass({

getInitialState: function(){
  return {
    read: null,
  }
},

exitClickHandler:function(e){
  store.page.set({read:false})
  hashHistory.push('/');
},
readClickHandler:function(e){
  store.page.set({read:true})
  hashHistory.push('/');
},

  openModal () { this.setState({open: true}); },
  closeModal () { this.setState({open: false}); },

  render: function(){
    return(
      <div className ="modal-container">
        <div className = 'modal'>
          <h1> Confirmation </h1>
          <p> Did you ACTUALLY read this?</p>
          <p> Yes! Leave me alone
          <input
            type="button"
            id="read"
            value=" MARK AS READ"
            onClick={this.readClickHandler}/> </p>

            <p> Oh oops. You have made a liar out of me.
            <input
              type="button"
              id="read"
              value="TAKE ME BACK"
              onClick={this.exitClickHandler}/></p>
          </div>
      </div>
    );
  }
});
