import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/fetchData";

let trendingFeedUrl = "https://tiktok33.p.rapidapi.com/user/feed/dave.xp";
let trendingFeedUrlOptions =  {
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
        this.props.fetchData(trendingFeedUrl, trendingFeedUrlOptions);
    }

    render() {
        return (
           <div>
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
        fetchData: (url, options) => dispatch(fetchData(url, options))
    };
};

export default connect(mapStateToProps, mapToDispatchToProps)(App);
