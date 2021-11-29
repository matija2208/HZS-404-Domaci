package DAO;

import java.util.UUID;
import MODEL.Post;

public interface ReceptDao {

    int insertPost(UUID IDpost, Post post);

    default int insertPost(Post post)
    {
        UUID IDpost=UUID.randomUUID();
        return insertPost(IDpost,post);
    }
}