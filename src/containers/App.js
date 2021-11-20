import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/fetchData";

const trendingFeedUrl = "https://tiktok33.p.rapidapi.com/trending/feed";
const trendingFeedUrlOptions =  {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tiktok33.p.rapidapi.com",
		"x-rapidapi-key": "c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66"
	}
};

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }    

    componentDidMount () {
        this.props.fetchFeed(trendingFeedUrl, trendingFeedUrlOptions);
    }

    render() {
        return (
           <div>
               {this.props.fetchData.map((feed, index) => {
                   return <div key={index}>
                       <div> name: {feed.authorMeta.name} aka {feed.authorMeta.nickName} </div>
                       <div> text:  {feed.text} </div>
                       <video width="288" height="512" controls="controls">
                            <source src={feed.videoUrl}/>
                       </video>
                       <div> comments count: {feed.commentCount} </div>
                       <br/>
                   </div>
               }) }
          </div>
        );
    }
};  

const mapStateToProps = state => {
    return {
        fetchData: state.fetchData
    };
};

const mapToDispatchToProps = dispatch => {
    return {
        fetchFeed: (url, options) => dispatch(fetchData(url, options))
    };
};

export default connect(mapStateToProps, mapToDispatchToProps)(App);
