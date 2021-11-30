package com.example.demo.DAO;

import com.example.demo.MODEL.Post;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Optional;
import java.util.UUID;
import java.util.List;

@Repository("fakeDao")
public class FakePostDataAccessService implements ReceptDao
{

    private static List<Post> DB=new ArrayList<>();

    @Override
    public int insertPost(UUID IDpost, Post post)
    {
        DB.add(new Post(IDpost, post.getImeRecepta(), post.getOpisJela(), post.getVremeSpremanjaJela(), post.getTezinaRecepta(), post.getRecept(), post.getIDkorisnika()));
        return 1;
    }

    @Override
    public List<Post> selectAllPost()
    {
        return DB;
    }

    @Override
    public Optional<Post> selectPostById(UUID IDpost) {
        return DB.stream()
                .filter(post -> post.getIDposta().equals(IDpost))
                .findFirst();
    }

    @Override
    public int deletePostByID(UUID IDpost) {
        Optional<Post> postMaybe=selectPostById(IDpost);
        if(postMaybe.isEmpty())
        {
            return 0;
        }
        else
        {
            DB.remove(postMaybe.get());
            return 1;
        }
    }

    @Override
    public int updatePostByID(UUID IDpost, Post post) {
        return selectPostById(IDpost)
                .map(p->{
                    int indexOfPostToUpdate=DB.indexOf(p);
                    if(indexOfPostToUpdate>=0)
                    {
                        DB.set(indexOfPostToUpdate, new Post(IDpost, post.getImeRecepta(), post.getOpisJela(), post.getVremeSpremanjaJela(), post.getTezinaRecepta(), post.getRecept(), post.getIDkorisnika()));
                        return 1;
                    }
                    return 0;
                })
                .orElse(0);
    }
}