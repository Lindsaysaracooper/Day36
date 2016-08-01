import React from "react";
import { hashHistory } from 'react-router';
import store from '../store';


export default React.createClass({
  getInitialState: function(){
    return store.page.toJSON()
  },
  clickHandler: function (e){
    console.log(store.page);
    if (store.page.get('read') === false){
        store.page.set({read:true})
    }else{
        store.page.set({read:false})
    }
      hashHistory.push('/confirm')
  },
  componentDidMount: function(){
    store.page.on('change', ()=>{
      console.log('change detected');
      this.setState(store.page.toJSON());
    })
  },
render: function(){
    console.log(this.state);
    return(
      <div className="documentCopy">
          <h1> Awesome Cupcake Ipsum </h1>
            <p>
            Wafer powder jelly cotton candy pie jujubes cotton candy. Cookie cheesecake pie danish jelly-o brownie cookie cake fruitcake. Carrot cake gummi bears bear claw icing pie muffin sesame snaps danish. Soufflé jelly-o pie jelly beans icing bear claw cookie. Gingerbread cheesecake marzipan toffee wafer. Dragée halvah wafer cheesecake soufflé caramels bonbon sesame snaps bear claw.
            <br></br>  <br></br>
            Gummi bears muffin gummies bonbon topping sweet roll. Topping sesame snaps bear claw brownie muffin marshmallow cotton candy carrot cake cookie. Sesame snaps toffee gingerbread gummies muffin bear claw oat cake topping. Toffee jujubes icing icing chupa chups jelly chocolate ice cream. Tootsie roll pastry jelly sweet jujubes toffee sugar plum cake caramels. Liquorice macaroon pudding gummies gingerbread cookie biscuit candy. Gummies icing pie lollipop chocolate bar pastry. Carrot cake pudding soufflé sesame snaps liquorice lemon drops fruitcake halvah tiramisu.
            <br></br>  <br></br>
            Biscuit croissant liquorice danish cotton candy apple pie croissant. Tart sesame snaps wafer chocolate bar toffee. Cookie caramels croissant. Gingerbread marshmallow chocolate bar sesame snaps cheesecake pastry jelly beans apple pie. Gummi bears carrot cake icing soufflé. Marshmallow apple pie jelly-o dessert. Jelly-o chupa chups macaroon oat cake danish. Liquorice oat cake carrot cake sesame snaps gingerbread chocolate cake. Topping caramels jelly-o muffin.
            </p>
            <div className="readbox">
            <span>Mark Read </span>
                <input
                  disabled={this.state.read}
                  checked={this.state.read}
                  type="checkbox"
                  id="checkbox"
                  onClick={this.clickHandler}/>
          {this.props.children}
          </div>
      </div>
    )
  }
});
