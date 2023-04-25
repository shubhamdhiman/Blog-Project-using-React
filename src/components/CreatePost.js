// import {useState} from 'react'
import {firestore} from '../firebase';
import {useFormInput} from '../hooks';
function CreatePost(){
    const title = useFormInput("");
    const subtitle = useFormInput("");
    const content = useFormInput("");
    function handleSubmit(e){
        e.preventDefault();

        console.log('title',title)
        console.log('title',subtitle)
        console.log('title',content)
        firestore.collection('posts').add({
            title:title.value,
            content:content.value,
            subtitle:subtitle.value,
            createdAt:new Date(),
        })
    }
    return (
        <div className="create-post">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-field ">
                    <label>Title</label>
                    {/* <input value={title} onChange={(e)=>setTitle(e.target.value)}/> */}
                    <input {...title}/>
                </div>
                <div className="form-field ">
                    <label>Sub Title</label>
                    <input {...subtitle}/>
                </div>
                <div className="form-field ">
                    <label>Content</label>
                    <textarea {...content}/>
                </div>
                <button className="create-post-btn">Create Post</button>
            </form>
        </div>
    )
}
export default CreatePost;