package DAO;

import MODEL.Post;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.UUID;
import java.util.List;

@Repository("fakeDao")
public class FakePostDataAccessService implements ReceptDao
{

    private static List<Post> DB=new ArrayList<>();

    @Override
    public int insertPost(UUID IDpost, Post post)
    {
        DB.add(new Post(IDpost, post.getRecept(), post.korisnik));
        return 1;
    }
}