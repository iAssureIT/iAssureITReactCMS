import React, { Component }      from 'react';

import "./BlogsForm.css";
import {Route, withRouter} from 'react-router-dom';
import axios        from 'axios';
import S3FileUpload from 'react-s3';

import swal from 'sweetalert';
import PropTypes from 'prop-types';
import CKEditor from 'ckeditor4-react';

class BlogsForm extends Component{
constructor(props) {
super(props);
this.state={
      "fields"            : {},
      "errors"            : {}, 
      "blogTitle"        : "",
      "pageUrl"           : "",
      "updateID"          : "",
      "summary"         : "",
      "bannerImg"         : "",
      "typeOfBlog"     : "",
      "imgArrayWSaws"     : [],
      "config"            : "",
      "uploadedImage"     : [],
      "imgPath"           : "",
      "imgbPath"          : {},
      "imgInTextPath"     : {},
      "blog1Img"          : [],
      "blogContent"       : '',
      "editUrl"           : '',
      "formerrors"        :{
          "clientName"    : " ",
          "clientEmail"   : " ",
        },
        "editId"          : this.props.match.params ? this.props.match.params.blogURL : ''
      };
      this.handleChange = this.handleChange.bind( this );
      this.onEditorChange = this.onEditorChange.bind( this );
}

  componentWillReceiveProps(nextProps) {
      var editId = nextProps.match.params.id;
      if(nextProps.match.params.id){
        this.setState({
          editId : editId
        })
        this.edit(editId);
      }
  }

  onEditorChange( evt ) {
      this.setState( {
          blogContent: evt.editor.getData()
      } );
  }
  edit(e){
    
    var pageUrl = window.location.pathname;
      console.log("pageUrl in blog = ",pageUrl);
      let a = pageUrl ? pageUrl.split('/') : "";
          console.log("a==>",a[3]); 
          this.setState( {
              editUrl: a[3]
          });
        
    axios
      .get("/api/blogs/get/"+a[3])
      .then((response)=>{
        console.log("===>",response.data);
        this.setState({
          "blogTitle"     :response.data.blogTitle,
          "pageUrl"       :response.data.blogURL,
          "summary"       :response.data.summary,
          "typeOfBlog"    :response.data.typeOfBlog,
          "blogContent"   :response.data.blogContent,
          "updateID"      : response.data._id,
          "imgbPath"      :{
                              path:response.data.bannerImage.path
                            },
        });
      })
      .catch((error)=>{
         console.log("error = ", error);             
      });

  }
  componentWillReceiveProps(){
    // this.edit();
  }
  componentDidMount(){
    this.edit();
      axios
        .get('http://iogapi.iassureit.com/api/projectsettings/get/S3')
        .then((response)=>{
         
          const config = {
                            bucketName      : response.data.bucket,
                            dirName         : "iOG",
                            region          : response.data.region,
                            accessKeyId     : response.data.key,
                            secretAccessKey : response.data.secret,

                         }
          this.setState({
            config : config
          })
          // console.log("config",this.state.config);

        })
        .catch(function(error){
          console.log(error);
            if(error.message === "Request failed with status code 401")
                {
                     swal("Your session is expired! Please login again.","", "error");
                     this.props.history.push("/");
                }
        })
           // this.edit();

    }

  handleChange(event){
      event.preventDefault();


      // var noSpecial = alert(this.state.blogTitle.replace(/[^a-zA-Z ]/g, " "));



      
          this.setState({
             [event.target.name]  : event.target.value, 
                "pageUrl"         : this.refs.blogTitle.value.replace(/[^a-zA-Z ]/g, " ").toLowerCase().split(" ").join("-"),
      
      });
    
     
  }
  uploadDesignImg(event){
    console.log("upload =",event.target.files[0]);
    var file = event.target.files[0];
    if(file){
      var ext = file.name.split('.').pop();
      if(ext=="jpg" || ext=="png" || ext=="jpeg" || ext=="JPG" || ext=="PNG" || ext=="JPEG"){
        this.setState({
          uploadedImage: event.target.files[0]
          },()=>{
          console.log("uploadToS3 =",this.state.uploadedImage);
           S3FileUpload
            .uploadFile(file,this.state.config)
            .then((Data)=>{
                console.log('Data.location', Data.location);
              this.setState({
                imgbPath : {
                  "path"    : Data.location,
                }
              })
          })
          .catch((error)=>{
            console.log(error);
          })
        })
      }else{
        swal("Format is incorrect","Only Upload images format (jpg,png,jpeg)","warning");
         this.setState({
              imgbPath : {
                "path"    : "",
              }
          })
        }
      }else{        
            swal("","Something went wrong","error");
          }
       let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({
      fields
    });
    if (this.validateForm() && this.validateFormReq()) {
      let errors = {};
      errors[event.target.name] = "";
      this.setState({
        errors: errors
      });
    }
   

  }

uploadBlogImage(event){
   event.preventDefault();
   let self = this;
   if (event.currentTarget.files && event.currentTarget.files[0]) {
      var file = event.currentTarget.files[0];
      var newFileName = JSON.parse(JSON.stringify(new Date()))+"_"+file.name;
      var newFile = new File([file],newFileName);
      // console.log("file",newFile);
      if (newFile) {
      // console.log("config--------------->",this.state.config);
        var ext = newFile.name.split('.').pop();
        if(ext=="jpg" || ext=="png" || ext=="jpeg" || ext=="JPG" || ext=="PNG" || ext=="JPEG"){
          if (newFile) {
            S3FileUpload
              .uploadFile(newFile,this.state.config)
              .then((Data)=>{
               
                  var obj1={
                    imgPath : Data.location,
                  }
                  var imgArrayWSaws = this.state.imgArrayWSaws;
                  imgArrayWSaws.push(obj1);
                  this.setState({
                    // workspaceImages : imgArrayWSaws
                    blog1Img : imgArrayWSaws
                  })
              })
              .catch((error)=>{
                console.log("formErrors");
                console.log(error);
              })

            // var objTitle={ 
            //   fileInfo :newFile
            // }
            // // var imgTitleArrayWS = [];
            // imgTitleArrayWS.push(objTitle);
            // this.setState({
            //   imageTitleArrayWS : imgTitleArrayWS
            // })
            //  console.log('imgArrayWS = ',imgTitleArrayWS);


          }else{        
            swal("File not uploaded","Something went wrong","error");
          }
        }else{
          swal("Please upload file","Only Upload  images format (jpg,png,jpeg)","warning"); 
        }
      }
    }
  }

  deleteBlogimage(event){
    event.preventDefault();
    swal({
          title: "Are you sure you want to delete this image?",
          text: "Once deleted, you will not be able to recover this image!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((success) => {
            if (success) {
              swal("Your image is deleted!");
              this.setState({
                imgbPath : ""
              })
            } else {
            swal("Your image is safe!");
          }
        });
  }

  deleteimageWS(e){
    e.preventDefault();
    var index = e.target.getAttribute('id');
    var filePath = e.target.getAttribute('data-id');
    var data = filePath.split("/");
    var imageName = data[4];
    console.log("imageName==",imageName);

    if(index){
      swal({
            title: "Are you sure you want to delete this image?",
            text: "Once deleted, you will not be able to recover this image!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              var array = this.state.imgArrayWSaws; // make a separate copy of the array
              array.splice(index, 1);
              swal("Image deleted successfully");
              this.setState({
                imgArrayWSaws: array
              });
            }else {
              swal("Your image is safe!");
            }
          });
    }
  }


  update(event){
    var id = this.state.updateID;
    event.preventDefault();
    const formValues = {
      "blogContent"         :this.state.blogContent,
      "typeOfBlog"          :this.state.typeOfBlog,
      "summary"             :this.state.summary,
      "blogTitle"           :this.state.blogTitle,
      "bannerImage"         :this.state.imgbPath,
      "blogURL"             :this.state.pageUrl,


   };
   console.log("formValues",formValues);
    axios
          .patch('/api/blogs/patch/'+id,formValues)
          .then((res)=>{
                      swal(" Your Blog Update successfully ");
                       this.props.history.push("/allblogs");

                  })
                  .catch((error)=>{
                    console.log("error = ", error);
                  });
  }
  Submit(event){
      event.preventDefault();
/*    if (this.validateForm() && this.validateFormReq()) {
        let errors = {};
        errors[event.target.name] = "";
        this.setState({
                  errors: errors
              });
        }*/
      const formValues = {
        "blogContent"         :this.state.blogContent,
        "typeOfBlog"          :this.state.typeOfBlog,
        "summary"             :this.state.summary,
        "blogTitle"           :this.state.blogTitle,
        "bannerImage"         :this.state.imgbPath,
        "blogURL"             :this.state.pageUrl,
         };
     if (this.validateForm()) {
      console.log("formValues",formValues);
      axios
        .post('/api/blogs/post',formValues)
        .then((res)=>{
          console.log('res', res.data);
                    swal("Thank you .Your Blog Created.");
                     this.props.history.push("/cms-pages/singleblog/"+this.state.pageUrl);
                     console.log("response = ", res.data);
                })
                .catch((error)=>{
                  console.log("error = ", error);
                });

          let fields = {};
            fields["blogTitle"]        = "";        
            fields["summary"]          = "";        
            fields["bannerImg"]        = "";        
            this.setState({
                "summary"          : "",
                "blogTitle"        : "",
                "bannerImg"        : "",
                "fields"           : fields
              });
      }

  }
  deleteBlogTextimage(event){
    event.preventDefault();
    swal({
          title: "Are you sure you want to delete this image?",
          text: "Once deleted, you will not be able to recover this image!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((success) => {
            if (success) {
              swal("Your image is deleted!");
              this.setState({
                imgInTextPath : {
                  path:"",
                }
              })
            } else {
            swal("Your image is safe!");
          }
        });
  }
  uploadInTextImg(e){
    console.log("upload =",e.target.files[0]);
    var file = e.target.files[0];
    this.setState({
      uploadedImage: e.target.files[0]
    },()=>{
          console.log("uploadToS3 =",this.state.uploadedImage);
          console.log("config",this.state.config);
     S3FileUpload
      .uploadFile(file,this.state.config)
      .then((Data)=>{
          console.log('Data.location', Data.location);
        this.setState({
          imgInTextPath : {
            "path"    : Data.location,
          }
      })
    })
    .catch((error)=>{
      console.log(error);
    })
  })
}
  validateFormReq() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    if (!fields["blogTitle"]) {
      formIsValid = false;
      errors["blogTitle"] = "This field is required.";
    } 
     if (!fields["summary"]) {
      formIsValid = false;
      errors["summary"] = "This field is required.";
    }   
    if (!fields["bannerImg"]) {
      formIsValid = false;
      errors["bannerImg"] = "This field is required.";
    }  
   /* if (!fields["panNumber"]) {
      formIsValid = false;
      errors["panNumber"] = "This field is required.";
    }
    if (!fields["addressProof"]) {
      formIsValid = false;
      errors["addressProof"] = "This field is required.";
    }
*/
    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    if (typeof fields["blogTitle"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^[a-zA-Z0-9~,&_?:!. -]+$/);
      if (!pattern.test(fields["blogTitle"])) {
        formIsValid = false;
        errors["blogTitle"] = "Please enter valid blog title.";
      }
    }
  /*  if (typeof fields["blogTitle"] !== "undefined") {
      if (!fields["blogTitle"].match(/^[a-zA-Z0-9]$/)) {
        formIsValid = false;
        errors["blogTitle"] = "Please .";
      }
    }*/
  
    this.setState({
      errors: errors
    });
    return formIsValid;
  }

render() {
   
return (
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="boxform1 boxLayoutBlogform">
            <div className="col-lg-12 textAlignCenter createBlogLabel"><label className="">Create Blog</label></div>
              <form id="blogForm" className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadding blogFormBox">
                  <div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">
                    <div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <label>Blog Tittle<span className="redFont">*</span></label>
                      <div className="">
                        <input className="form-control nameSpaceUpper col-lg-12 col-md-12 col-sm-12 col-xs-12" name="blogTitle" id="blogTitle" type="text" ref="blogTitle" value={this.state.blogTitle} onChange={this.handleChange.bind(this)} placeholder=""/>
                       {/* <div className="errorMsg">{this.state.errors.blogTitle}</div>
*/}
                      </div>
                    </div>

                    <div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <label>Url<span className="redFont">*</span></label>
                      <div className="">
                       
                         <input type="text" ref="pageUrl" id="basicPageName" value={this.state.pageUrl} name="basicPageName"  className="templateName col-lg-12 col-md-12 col-sm-12 col-xs-12 inputValid hinput30" onChange={this.handleChange.bind(this)} disabled/>
                      </div>
                    </div>
                        

                          <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{height:"auto"}}>
                            <label >Blog Summary<span className="redFont">*</span></label>
                            <div className="">
                              <textarea className="form-control nameSpaceUpper form-control col-lg-12 col-md-12 col-sm-12 col-xs-12" name="summary"  ref="summary" value={this.state.summary} onChange={this.handleChange.bind(this)}  placeholder="" rows="5" id="comment"></textarea>
                              <div className="errorMsg">{this.state.errors.summary}</div>
                            </div>
                          </div>
                          

                         
                        
                          <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12 ckbox mt20">
                            <label htmlFor="userName">Blog Content<span className="redFont">*</span></label>
                            <div className="">
                              <CKEditor
                                data={this.state.blogContent}
                                onChange={this.onEditorChange} />
                              </div>
                          </div>


                          <div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label htmlFor="contactNumber">Banner Image<span className="redFont">*</span></label>
                            <div className="">
                              {/*<input id="input-b1" name="input-b1" type="file" className="file" data-show-preview="false" onChange={this.handleChange.bind(this)} required/>*/}
                            </div>
                               <div className="col-lg-6 col-md-6 col-xs-12  col-sm-2 marginTop17 ">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
                                  {/*<label htmlFor="designImg" className="designLabel col-lg-12 col-md-12 col-sm-12 col-xs-12 row">Upload</label>*/}
                               
                                <input type="file" className="noPadding" title="Please choose image" id="designImg" name="bannerImg" ref="bannerImg" onChange={this.uploadDesignImg.bind(this)} />
                                <div className="errorMsg">{this.state.errors.bannerImg}</div>

                              </div>
                              </div>
                              <div className="col-lg-4 col-lg-offset-2 col-md-6 col-xs-12  col-sm-2 marginTop17 ">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
                                { this.state.imgbPath!=="" && this.state.imgbPath.path ?
                                  <div>
                                    <label className="pull-right custFaTimes" title="Delete image"  onClick={this.deleteBlogimage.bind(this)}>X</label>{/*data-id={this.state.imgbPath}*/}
                                    <img src={this.state.imgbPath.path} width="150" height="100"/>
                                  </div>
                                  : <div> </div>
                                }
                                </div>
                              </div>
                          </div>
                          <div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
                              <label htmlFor="contactNumber">Insert Image in Bkog content</label>
                              <div className="">
                                {/*<input id="input-b1" name="input-b1" type="file" className="file" data-show-preview="false" onChange={this.handleChange.bind(this)} required/>*/}
                              </div>
                              <div className="col-lg-12 col-md-12 col-xs-12  col-sm-2 marginTop17 ">
                                <div className="col-lg-5  col-md-12 col-sm-12 col-xs-12 row">
                                    {/*<label htmlFor="designImg" className="designLabel col-lg-12 col-md-12 col-sm-12 col-xs-12 row">Upload</label>*/}
                                 
                                  <input type="file" className="noPadding" title="Please choose image" id="designImg" onChange={this.uploadInTextImg.bind(this)} />
                                </div>
                                 <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 row ">
                                  <input type="text" className=" " value={this.state.imgInTextPath.path?this.state.imgInTextPath.path : "No file chosen"}/>
                                </div>
                              </div>
                              <div className="col-lg-4 col-lg-offset-2 col-md-6 col-xs-12  col-sm-2 marginTop17 ">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
                                  { this.state.imgInTextPath!=="" && this.state.imgInTextPath.path ?
                                    <div>
                                      <label className="pull-right custFaTimes" title="Delete image"  onClick={this.deleteBlogTextimage.bind(this)}>X</label>{/*data-id={this.state.imgbPath}*/}
                                      <img src={this.state.imgInTextPath.path} width="150" height="100"/>
                                    </div>
                                    : <div> </div>
                                  }
                                  </div>
                              </div>
                          </div>
                          <div className="formcontent col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            {
                                this.state.editUrl ?
                                <button onClick={this.update.bind(this)} className="btn btn-primary lightbluebg  buttonhover pull-right">Update</button>
                                :
                                <button onClick={this.Submit.bind(this)}  className="btn btn-primary lightbluebg  buttonhover pull-right">Submit</button>
                              }
                          </div>
                  </div>
              </form>
          </div>
        </div>
      );
  }
}
export default withRouter(BlogsForm);

