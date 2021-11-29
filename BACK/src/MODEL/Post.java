package com4.Baza.MODEL;

import java.util.UUID;

public class Post
{
    private final UUID IDposta;
    private final String recept;
    public User korisnik=new User();

    public Post(UUID IDposta, String recept, User korisnik)
    {
        this.IDposta=IDposta;
        this.recept=recept;
        this.korisnik=korisnik;
    }

    public UUID getIDposta()
    {
        return IDposta;
    }

    public String getRecept()
    {
        return recept;
    }
}