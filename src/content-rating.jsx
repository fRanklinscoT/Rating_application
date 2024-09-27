import React,{Component} from "react";

export class ContentRating extends Component {
    constructor(){ 
      super();
      this.state = {
        likes: 0,
        dislikes: 0,
        totRatings: 0,
        handleLikes: () => { 
          this.setState((prevState) => ({
              likes: prevState.likes + 1,
              totRatings: prevState.totRatings + 1 
          }));
        },
        handleDislikes: () => { 
          this.setState((prevState) =>({
            dislikes: prevState.dislikes + 1,
            totRatings: prevState.totRatings + 1
          }));
        }
      };    
    }
      render(){
    return (
      <>
        <p>
          Text
        </p>
        <button onClick={this.state.handleLikes} >
          Likes({this.state.likes})
        </button>
        <button onClick={this.state.handleDislikes} >
          Dislikes({this.state.dislikes})
        </button>
        <p>
          Total Ratings: {this.state.totRatings}
        </p>
      </>
    )
  }
  }
  export default ContentRating
  