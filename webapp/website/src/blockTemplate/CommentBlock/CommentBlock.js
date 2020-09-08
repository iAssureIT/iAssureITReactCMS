import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
// import $                  from 'jquery';
import $                      from 'jquery';
import './CommentBlock.css';

/*import Commonoverviewblock  from '../../allBlocks/Commonoverviewblock/Commonoverviewblock.js';
*/
class CommentBlock extends Component {
  constructor(props){
    super(props);
    this.state = {
      blogsText:[],
    }
  }
  componentDidMount(){
   }
  
  handleChange(event){
    event.preventDefault();
    this.setState({
      "userName"         : this.refs.userName.value,
      "companyName"      : this.refs.companyName.value,
      "email"            : this.refs.email.value,
      "message"          : this.refs.message.value,
     
    });

    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({
      fields
    });
    if (this.validateForm()) {
      let errors = {};
      errors[event.target.name] = "";
      this.setState({
        errors: errors
      });
    }
  }
  isNumberKey(){

  }
  isTextKey(){

  }

  render() {
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="col-lg-8 col-lg-offset-2">
          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 NOpadding">
            <img className="img-responsive userImgB" src="/images/person.png" alt="Bannerpng" />
          </div>
          <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 NOpadding">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
              <div className="row"><div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 ">
                <h5><b>Joan Doe</b></h5>
                <h6 className="graycolor"></h6>
              </div>
              </div>
              <p className="graycolor">Based in New York, Uncode is a blog by John Doe. His posts explore modern web design and development through photos and quotes by influential architects, engineers, and creatives.</p>
            </div>
          </div>
        </div>
        <hr className="col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12"/ >
        <form id="contactForm" className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
          <div className="col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12">
            <div className=" commentBox col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <label htmlFor="comment">Add Comment<span className="redFont"></span></label>
              <textarea className="form-control commentBoxText col-lg-12 col-md-12 col-sm-12 col-xs-12" cols="4" rows="8" id="comment"></textarea>
            </div> 
            <div className="formcontent col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <label htmlFor="userName">Name<span className="redFont">*</span></label>
              <div className="">
                <input className="form-control nameSpaceUpper col-lg-12 col-md-12 col-sm-12 col-xs-12" id="userName" type="text" name="userName"  ref="userName" value={this.state.userName} onChange={this.handleChange.bind(this)} onKeyDown={this.isTextKey.bind(this)}  placeholder=""/>
              </div>
            </div>
            <div className="formcontent col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <label htmlFor="email">Email<span className="redFont">*</span></label>
              <div className="">
                <input className="form-control" id="email" type="text" name="email" ref="email"  value={this.state.email} onChange={this.handleChange.bind(this)}  placeholder=""/>
              </div>
            </div>
            <div className="formcontent col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <label htmlFor="contactNumber">Website<span className="redFont"></span></label>
              <div className="">
                <input className="form-control" id="contactNumber" type="text" name="contactNumber" value={this.state.contactNumber} maxLength={10}  onKeyDown={this.isNumberKey.bind(this)} onChange={this.handleChange.bind(this)}  ref="contactNumber" placeholder=""/>
              </div>
            </div>
            
            <div className="formcontent col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <button className="btn lightbluebg commentBoxbtn buttonhover">Post Comment</button>
            </div>
          </div>
        </form>
      </div>
    );  
  }
}

export default withRouter(CommentBlock);