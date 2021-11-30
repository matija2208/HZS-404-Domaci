package com.example.demo.API;

import com.example.demo.MODEL.Post;
import com.example.demo.SERVICE.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequestMapping("/API/v1/post")
@RestController
public class PostControler {

    private final PostService postService;

    @Autowired
    public PostControler(PostService postService) {
        this.postService = postService;
    }

    @PostMapping
    public void addPost(@RequestBody Post post)
    {
        postService.addPost(post);
    }

    @GetMapping
    public List<Post> getAllPost()
    {
        return postService.getAllPost();
    }

    @GetMapping(path = "{IDpost}")
    public Post getPostByID(@PathVariable("IDpost") UUID IDpost)
    {
        return postService.getPostByID(IDpost)
                .orElse(null);
    }

    @DeleteMapping(path = "{IDpost}")
    public void deletePostByID(@PathVariable("IDpost") UUID IDpost)
    {
        postService.deletPostByID(IDpost);
    }

    @PutMapping(path = {"IDpost"})
    public void updatePost(@PathVariable("IDpost") UUID IDpost, @RequestBody Post post)
    {
        postService.updatePostByID(IDpost, post);
    }
}