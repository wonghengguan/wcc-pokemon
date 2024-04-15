package com.wcc.model;

import java.util.List;

public class Pokemon {

    private String name;
    private String url;
    private int count;
    private String next;
    private String previous;
    private List<Pokemon> results;

    public Pokemon() {}

    public Pokemon(String name, String url) {
        this.name = name;
        this.url = url;
        // Initialize more properties here if needed
    }

    // Getters and setters

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public List<Pokemon> getResults() {
        return results;
    }

    public void setResults(List<Pokemon> results) {
        this.results = results;
    }

    public int getCount() {
        return this.count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public String getNext() {
        return this.next;
    }

    public void setNext(String next) {
        this.next = next;
    }

    public String getPrevious() {
        return this.previous;
    }

    public void setPrevious(String previous) {
        this.previous = previous;
    }
}
