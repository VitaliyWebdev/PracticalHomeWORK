import React, {Component} from 'react';
import PostService from "../../Services/PostService";
import './post-styles.css'
import Post from "./Post";

class AllPosts extends Component {
    state={posts:null};
    postService = new PostService();


componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.idFromUser}`).then(value => value.json()).then(value => this.setState({posts:value}))
}

    render() {
let {posts} = this.state;
        console.log(posts);
        return (
            <div className={"PostsBox"}>
                {
                    posts && posts.map(value=><Post item={value} key={value.id}/>)

                }


            </div>
        );
    }
}

export default AllPosts;