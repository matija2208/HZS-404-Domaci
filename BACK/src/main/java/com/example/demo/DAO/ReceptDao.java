package com.example.demo.DAO;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import com.example.demo.MODEL.Post;

public interface ReceptDao {

    int insertPost(UUID IDpost, Post post);

    default int insertPost(Post post)
    {
        UUID IDpost=UUID.randomUUID();
        return insertPost(IDpost,post);
    }

    List<Post> selectAllPost();

    Optional<Post> selectPostById(UUID IDpost);

    int deletePostByID(UUID IDpost);

    int updatePostByID(UUID IDpost, Post post);
}