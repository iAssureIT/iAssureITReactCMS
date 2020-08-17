import React,{Component} from 'react';
import './ScrollButton.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default class ScrollButton extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const toTop=document.querySelector(".to-top");

         window.addEventListener("scroll",() =>{
             if(window.pageYOffset > 20){
                 toTop.classList.add("active");
             }
             else{
                 toTop.classList.remove("active");
             }
         })

    }
      

    

    render(){
        return(
            <div>
                <a href= "#" className="to-top">
                 <i className="fas fa-chevron-up"></i>                
                </a>

              
            </div>
        )
    }
}