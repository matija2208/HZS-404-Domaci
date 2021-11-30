package com.example.demo.MODEL;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class Post
{
    private final UUID IDposta;
    private final String imeRecepta;
    private final String OpisJela;
    private final String VremeSpremanjaJela;
    private final int TezinaRecepta;
    private final String recept;
    private final UUID IDkorisnika;

    public Post(@JsonProperty("id") UUID IDposta,
                @JsonProperty("imeRecepta") String imeRecepta,
                @JsonProperty("OpisJela") String OpisJela,
                @JsonProperty("VremeSpremanjaJela") String VremeSpremanjaJela,
                @JsonProperty("TezinaRecepta") int TezinaRecepta,
                @JsonProperty("recept") String recept,
                @JsonProperty("IDkorisnika") UUID IDkorisnika)
    {
        this.IDposta=IDposta;
        this.imeRecepta=imeRecepta;
        this.OpisJela=OpisJela;
        this.VremeSpremanjaJela=VremeSpremanjaJela;
        this.TezinaRecepta=TezinaRecepta;
        this.recept=recept;
        this.IDkorisnika=IDkorisnika;
    }

    public UUID getIDposta()
    {
        return IDposta;
    }

    public int getTezinaRecepta() {
        return TezinaRecepta;
    }

    public String getImeRecepta() {
        return imeRecepta;
    }

    public String getOpisJela() {
        return OpisJela;
    }

    public String getVremeSpremanjaJela() {
        return VremeSpremanjaJela;
    }

    public String getRecept()
    {
        return recept;
    }

    public UUID getIDkorisnika()
    {
        return IDkorisnika;
    }
}