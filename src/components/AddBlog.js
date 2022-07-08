import React from 'react'
export default function AddBlog() {
  const addBlock = async( ) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [content, setContent] = useState('');
     
    let add = () => {
      axios.post("", {
          blog_tilte: title,
          blog_descp: description,
          blog_cont: content,
          users_id: 1
      })
  }
    
    return console.log(response);
    }
    
    
  return (

    <>
    
    <div class="infoContainer ">
        <h1 className="BlogHeading">Add a Blog</h1>
                        <div class="form">
                            <form action="backend.php">
                                <input type="text" placeholder="Author Name" id = "author_name"/>
                                <input type="text" placeholder="Title of Blog" id="title" onChange={(e) => setTitle(e.target.value)}/>
                                <input type="text" placeholder="Description" id="description" onChange={(e) => setDescription(e.target.value)}/>
                                
                                <textarea name="message" id="content" cols="30" rows="5" placeholder="Blog Content" onChange={(e) => setContent(e.target.value)}></textarea>
                                <button type="button" class="btn">Upload Image</button>
                                <input type="submit" onClick={() => add()}/>
                            </form>
                        </div>
                        </div>
    </>
    
  );
}
