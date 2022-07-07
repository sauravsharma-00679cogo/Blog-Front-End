import React from 'react'

export default function AddBlog() {
  return (
    <>
    <div class="infoContainer ">
        <h1 className="BlogHeading">Add a Blog</h1>
                        <div class="form">
                            <form action="backend.php">
                                <input type="text" placeholder="Author Name"/>
                                <input type="email" placeholder="Title of Blog"/>
                                <input type="text" placeholder="Description"/>
                                
                                <textarea name="message" id="" cols="30" rows="5" placeholder="Blog Content"></textarea>
                                <input type="submit"/>
                            </form>
                        </div>
                        </div>
    </>
    
  );
}
