import React from 'react';

import './Thread.css'

class Post extends React.Component {
    render() {
        return (
            <div>
                <UserDetails user={this.props.user} />
                <Content content={this.props.content} />
            </div>
        );
    }
}

class UserDetails extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.user}</h4>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <p className='pUser'>{this.props.content}</p>
            </div>
        );
    }
}

export default class Thread extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className='Thread'>
                <Post user='UserName: alpa' content='post content1' />
                <Post user='UserName: brave' content='post content2' />
                <Post user='UserName: chally' content='post content3' />
                <Post user='UserName: delta' content='post content4' />
                <Post user='UserName: echo' content='post content5' />
            </div>
        );
    }
}