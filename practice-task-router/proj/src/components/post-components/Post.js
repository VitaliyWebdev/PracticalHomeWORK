import React, {Component} from 'react';
import './post-style.css'
class Post extends Component {
    render() {
        let {item} = this.props;
        return (
            <div>
                <div className={'post-box'}><b>{item.userId}</b> <b> title - </b> {item.title}<div>{item.body}</div></div>
            </div>
        );
    }
}

export default Post;