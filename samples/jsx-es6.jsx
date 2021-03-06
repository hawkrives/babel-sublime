
// components/EmailInput.jsx

import React from 'react';
import { InputsMixin } from './Forms';

export default React.createClass({

  mixins: [InputsMixin],

  submit() {
    var {email, question} = this.state;
    request
      .post(`${API_BASE}/askform`)
      .send({email, question})
      .end((err, res) =>
        this.setState({isValid: !err}));
  },

  'key//1': function() {},
  'key/***/1': function() {},

  render() {
    var {email} = this.state;
    var list = this.props.secondary.map(pic => <img src={pic} />)}
    return (
      <div {...this.props} overlay={<div>test</div>}>
        {list}
        <input /*cmt*/
          /*cmt*/value/*cmt*/=/*cmt*/{email}/*cmt*/
          onChange={/*cmt*/this.onChange/*cmt*/}
          onClick={this.onClick}
          required/*cmt*/ />
      </div>
    );
  }
});
