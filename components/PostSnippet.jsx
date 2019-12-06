import React from 'react'
import { Card } from 'antd';
import { Link } from "@reach/router";
import db from '../firebase'

const PostSnippet = (props) => {

    const onDeletePost = () => {
        console.log('post being deleted')
        let postRef = db
            .collection('users')
            .doc(props.user.uid)
            .collection('posts')
            .doc(props.id)

        postRef.delete()
    }

    return (
        <div className="post_snippet_container">
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title={props.title}
                extra={
                    <div class="post_snippet_links">
                        <Link to={`/blogs/${props.uid}/post/${props.id}`} style={{ marginRight: '15px', float: 'left' }}>
                            Read Full Article
                        </Link>

                        {props.user &&
                            <div className="post_edit_links" style={{ float: 'right' }}>
                                <Link to={`/update_post/${props.id}`} style={{ marginRight: '15px' }}>
                                    Edit
                                </Link>

                                <a onClick={onDeletePost}>
                                    Delete
                                </a>
                            </div>
                        }
                    </div>
                }
            >

                <p className="article_content">
                    {
                        props.content.split('\n').map((paragraph, idx) => {
                            return <p key={idx}>{paragraph}</p>;
                        })
                    }
                </p>

            </Card>
        </div>
    )
}

export default PostSnippet;