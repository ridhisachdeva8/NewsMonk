import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';


export class News extends Component {
   static defaultProps = {
     country:'in',
     pageSize:6,
     category:'general'
   }
   static propTypes={
     country: PropTypes.string,
     pageSize: PropTypes.number,
     category: PropTypes.string
   }
  
capitalizeFirstLetter= (string)=>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

  constructor(props) {
    super(props);
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: [],
      loading: false,
      page:1,
      totalResults:0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonk`;
  }

  async updateNews(){
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=568b38fd2839403db1dd0b04e4b8649b&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false})
  }
  async componentDidMount(){
   this.updateNews();
  }

  handlePrevClick= async()=>{
    console.log("Previous");
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 }, this.updateNews);
    }
  }

  handleNextClick=async()=>{
    console.log("Next");
    const totalPages = Math.ceil(this.state.totalResults / this.props.pageSize);
    if (!(this.state.page + 1 > totalPages)) {
      this.setState({ page: this.state.page + 1 }, this.updateNews);
    }
  }

  render() {
    const totalPages = Math.ceil(this.state.totalResults / this.props.pageSize); 
    return (
      <div className=" container my-3">
        <h1 className="text-center">NewsMonk - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
             return <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title?element.title:""}
                description={element.description?element.description:""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author= {element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>;
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page>totalPages }type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button> 
        </div>
      </div>
    );
  }
} 

export default News;
