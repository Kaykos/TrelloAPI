package com.example.TrelloService.integration;

import com.example.TrelloService.model.Board;
import com.example.TrelloService.model.Card;
import com.example.TrelloService.model.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

public class ServiceIntegration {

  private static String baseUrl = "https://api.trello.com/1";
  private static String apiKey = "eec48df0b4b37a399f43e7b7a6a585f2";
  // private static String token = "1cebd9d9b4f4ed8d428b0d8dd2623f9244bea57e2046089ff09778f8bbac7061";

  private RestTemplate restTemplate = new RestTemplate();

  /**
   * Request boards to Trello API
   * @param token Authorization token
   * @return Array of boards
   */
  public Board[] getBoards(String token){
    String url = String.format("%s/members/me/boards?key=%s&token=%s", baseUrl, apiKey, token);
    Board[] boards = restTemplate.getForObject(url, Board[].class);
    return boards;
  }

  /**
   * Request lists of board to Trello API
   * @param boardId Board identifier
   * @param token Authorization token
   * @return Array of lists
   */
  public List[] getLists(String boardId, String token){
    String url = String.format("%s/boards/%s/lists?key=%s&token=%s", baseUrl, boardId, apiKey, token);
    List[] lists = restTemplate.getForObject(url, List[].class);
    return lists;
  }

  /**
   * Request cards of a list to Trello API
   * @param listId List identifier
   * @param token Authorization token
   * @return Array of cards
   */
  public Card[] getCards(String listId, String token){
    String url = String.format("%s/lists/%s/cards?key=%s&token=%s", baseUrl, listId, apiKey, token);
    Card[] cards = restTemplate.getForObject(url, Card[].class);
    return cards;
  }

  /**
   * Request card creation to Trello API
   * @param listId List identifier
   * @param token Authorization token
   * @param name Card name
   * @param desc Card description
   * @param due Card due date
   * @return New card
   */
  public Card createCard(String listId, String token, String name, String desc, String due){
    String url = String.format("%s/cards?key=%s&token=%s&idList=%s&name=%s&desc=%s&due=%s&pos=top", baseUrl, apiKey, token, listId, name, desc, due);
    Card card = restTemplate.postForObject(url, null, Card.class);
    return card;
  }

  /**
   * Request a card to Trello API
   * @param cardId Card identifier
   * @param token Authorization token
   * @return Card
   */
  public Card getCard(String cardId, String token){
    String url = String.format("%s/cards/%s?key=%s&token=%s", baseUrl, cardId, apiKey, token);
    Card card = restTemplate.getForObject(url, Card.class);
    return card;
  }

  /**
   * Request a card update to Trello API
   * @param cardId Card identifier
   * @param token Authorization token
   * @param name New card name
   * @param desc New card description
   * @param due New card due date
   */
  public void updateCard(String cardId, String token, String name, String desc, String due){
    String url = String.format("%s/cards/%s?key=%s&token=%s&name=%s&desc=%s&due=%s", baseUrl, cardId, apiKey, token, name, desc, due);
    restTemplate.put(url, null);
  }

  /**
   * Request to delete a card to Trello API
   * @param cardId Card identifier
   * @param token Authorization key
   */
  public ResponseEntity<Object> deleteCard(String cardId, String token){
    String url = String.format("%s/cards/%s?key=%s&token=%s", baseUrl, cardId, apiKey, token);
    ResponseEntity<Object> response;
    try{
      restTemplate.delete(url);
      response = new ResponseEntity<>(HttpStatus.OK);
    } catch (HttpClientErrorException ex){
      response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    return response;
  }
}
