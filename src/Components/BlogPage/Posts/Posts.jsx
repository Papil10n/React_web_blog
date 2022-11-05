import Post from "./Post/Post";

const Posts = (props) => {

    let postsItem = props.posts.map(post => <Post data={post} key={post.id}/>)


    return (<>
            {postsItem}
        </>
    )
}

export default Posts