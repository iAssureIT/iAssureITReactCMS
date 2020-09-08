import React from 'react';
import SingleBlogBanner      from "../SingleBlogBanner/SingleBlogBanner.js";
import BlogContent           from "../BlogContent/BlogContent.js";
import jsPDF from 'jspdf';
// import RelatedBlogs          from "../../allBlocks/RelatedBlogs/RelatedBlogs.js";
// import Moment                from 'react-moment';
//import MetaTags              from 'react-meta-tags';
// import ShareLink          from 'react-facebook-share-link'
// import ReactToPdf from "react-to-pdf";
// import '../Sitemap/Sitemap.css';
import PageHead from "../PageHead/PageHead.js";

import BlogComment           from "../BlogComment/BlogComment.js";
import { FacebookProvider, Share } from 'react-facebook';

import axios                 from 'axios';
import swal                  from 'sweetalert2';

var id;
export default class SingleBlogPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			    "blogTitle"      	  : "",
          blogdata            :[],
		      "summary"   	      : "",
		      "typeOfBlog"   	    : "",
		      "blogContent"       : "",
          "bannerImage"       : {},
          "viewCount"         : "",
          "pageHead"          : {
                                  ogtitle        : "",
                                  ogimage        : "",
                                  ogurl          : "",
                                  ogdescription  : "",
                                }

		};
	}


componentDidUpdate(prevProps, prevState){
    console.log('prevProps, prevState',prevProps, prevState)
    if(prevState.bannerImage.length!==this.state.bannerImage.length){
      this.setState({
      bannerImage:this.state.bannerImage
      });
    }
  }
  componentDidMount(){
   

    var url = this.props.location.pathname;
    localStorage.setItem("lastUrl",url);
    this.setState({
      CurrentUrl:window.location.href
    })
    id = this.props.match.params.selectedUrl;
    // console.log("id --->",id);

		axios
      .get('/api/blogs/get/'+id)
      .then((response)=>{
        console.log("one blog1===>",response.data);
        if (response.data) {
          console.log("one blog===>",response.data);

          this.setState({
            blogdata:response.data,


           /* "blogTitle"   :response.data.blogTitle,
            "summary"     :response.data.summary,
            "typeOfBlog"  :response.data.typeOfBlog,
            "blogContent" :response.data.blogContent,
            "bannerImage" :response.data.bannerImage.path,
            "createdAt"   :response.data.createdAt,
            "pageHead"    :{
                              ogtitle        : response.data.blogTitle,
                              ogimage        : response.data.bannerImage.path,
                              ogdescription  : response.data.summary,
                           }*/
              
        },()=>{
          console.log("blogContent in aaaxios",this.state.blogContent);
        })

        }
        
      })

      .catch(function(error){
          if(error.message === "Request failed with status code 401")
              {
                swal("Your session is expired! Please login again.","", "error");
              }
      })
      var blogURL = this.props.match.params.selectedUrl;

      axios
      .get('/api/blogs/get/count/url/'+blogURL)
      .then((response)=>{
        this.setState({
            viewCount: response.data.count,
        })
        
      })
      .catch(function(error){
        if(error.message === "Request failed with status code 401")
            {
                 swal("Your session is expired! Please login again.","", "error");
            }
        })
	}




printTicket(event){


// window.print();

  var printContents = document.getElementById('pdfWrap').innerHTML;

  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;

}




  handleClick(){
    return true;
  }

	render() {
    console.log('CurrentUrl',this.state.CurrentUrl);
    console.log('blogContent....fff',this.state.blogdata);
    const ref = React.createRef();
    
     /*var content= (encodeURI(this.state.bannerImage));
     console.log("content image",content);*/
		return (
      <div>
      	<div className="container-fluid" >

            <PageHead pageHeadData={this.state.pageHead}/>
      		  <SingleBlogBanner blogTitle={this.state.blogdata.blogTitle} summary={this.state.blogdata.summary} bannerImage={this.state.bannerImage}/>
            <div className="mt40 col-lg-10 col-md-10 col-sm-12 col-xs-12"><label className="blogDateSBP pull-right">Date :{/*<Moment format=" MMMM D YYYY ">{this.state.createdAt}</Moment>*/}</label></div>
      		  <BlogContent blogContent={this.state.blogdata.blogContent} style={{padding:"0px"}} />
             <div className="col-lg-8 col-lg-offset-2 col-md-10 col-sm-12 col-xs-12 likeDiv mt40">
              <a href={"https://www.facebook.com/sharer/sharer.php?u="+ this.state.CurrentUrl} target="_blank">
                <i className="fa fa-facebook mar10" href=""></i>
              </a>


            {/*  <a href={"https://twitter.com/home?status=" + this.state.CurrentUrl} target="_blank">
                <i className="fa fa-twitter mar10" ></i>
              </a>*/}

              <a href={"https://twitter.com/intent/tweet?url="+this.state.CurrentUrl}  target="_blank"  rel="noopener noreferrer">
                <i className="fa fa-twitter mar10" ></i></a>
              <a href={"https://www.linkedin.com/shareArticle?mini=true&url="+this.state.CurrentUrl} target="_blank">
                <i class="fa fa-linkedin mar10"></i>
              </a>
            </div>
            
           {/* <div className="col-lg-8 col-lg-offset-2 col-md-10 col-sm-12 col-xs-12 bottomDiv">
              <span className="countNumberLike">{this.state.viewCount} views</span>
            </div>*/}
          {/* <button className="iogpdfbtn" onClick={this.printTicket.bind(this)}>Generate pdf</button>*/}
            <div style={{width:0, height: 0}}></div>
            </div>
            {/*<BlogComment/>*/}
			  </div>
	   	);
	}
}


