package com.example.demo.MODEL;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class User
{
    public UUID IDkorisnika;
    private String username;
    private String email;

    public User()
    {
        IDkorisnika=UUID.randomUUID();
        username="";
        email="";
    }

    public User(@JsonProperty("IDkorisnika") UUID IDkorisnika, @JsonProperty("username") String username, @JsonProperty("email") String email)
    {
        this.IDkorisnika=IDkorisnika;
        this.username=username;
        this.email=email;
    }

    public String getUsername()
    {
        return username;
    }

    public String getEmail()
    {
        return email;
    }

    public void setUsername(String username)
    {
        this.username=username;
    }

    public void setEmail(String email)
    {
        this.email = email;
    }
}