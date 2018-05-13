package com.example.TrelloService.integration;

import com.example.TrelloService.model.Board;
import com.example.TrelloService.model.Card;
import com.example.TrelloService.model.List;
import org.springframework.web.client.RestTemplate;

public class ServiceIntegration {

  private static String baseUrl = "https://api.trello.com/1";
  private static String apiKey = "eec48df0b4b37a399f43e7b7a6a585f2";
  // private static String token = "1cebd9d9b4f4ed8d428b0d8dd2623f9244bea57e2046089ff09778f8bbac7061";

  private RestTemplate restTemplate = new RestTemplate();

  public Board[] getBoards(String token){
    String url = String.format("%s/members/me/boards?key=%s&token=%s", baseUrl, apiKey, token);
    Board[] boards = restTemplate.getForObject(url, Board[].class);
    return boards;
  }

  public List[] getLists(String boardId, String token){
    String url = String.format("%s/boards/%s/lists?key=%s&token=%s", baseUrl, boardId, apiKey, token);
    List[] lists = restTemplate.getForObject(url, List[].class);
    return lists;
  }

  public Card[] getCards(String listId, String token){
    String url = String.format("%s/lists/%s/cards?key=%s&token=%s", baseUrl, listId, apiKey, token);
    Card[] cards = restTemplate.getForObject(url, Card[].class);
    return cards;
  }
}
