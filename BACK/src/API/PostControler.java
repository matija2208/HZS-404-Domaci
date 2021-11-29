package com4.Baza.API;

import com4.Baza.MODEL.Post;
import com4.Baza.SERVICE.PostService;
import org.springframework.beans.factory.annotation.Autowired;

public class PostControler {

    private final PostService postService;

    @Autowired
    public PostControler(PostService postService) {
        this.postService = postService;
    }

    public void addPost(Post post)
    {
        postService.addPost(post);
    }
}