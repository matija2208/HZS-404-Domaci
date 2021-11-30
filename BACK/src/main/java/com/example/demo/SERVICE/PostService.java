package com.example.demo.SERVICE;

import com.example.demo.DAO.ReceptDao;
import com.example.demo.MODEL.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PostService {

    private final ReceptDao postDao;

    @Autowired
    public PostService(@Qualifier("fakeDao") ReceptDao postDao)
    {
        this.postDao = postDao;
    }

    public int addPost(Post post)
    {
        return postDao.insertPost(post);
    }

    public List<Post> getAllPost()
    {
        return postDao.selectAllPost();
    }

    public Optional<Post> getPostByID(UUID IDpost)
    {
        return postDao.selectPostById(IDpost);
    }

    public int deletPostByID(UUID IDpost)
    {
        return postDao.deletePostByID(IDpost);
    }

    public int updatePostByID(UUID IDpost, Post post)
    {
        return postDao.updatePostByID(IDpost, post);
    }
}