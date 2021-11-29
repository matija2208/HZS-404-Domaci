package SERVICE;

import DAO.ReceptDao;
import MODEL.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

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
}