package com.example.TrelloService;

import com.example.TrelloService.integration.ServiceIntegration;
import com.example.TrelloService.model.Board;
import com.example.TrelloService.model.Card;
import com.example.TrelloService.model.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "https://trellowebservicetest.firebaseapp.com")
public class TrelloServiceApplication {

	private static final Logger log = LoggerFactory.getLogger(TrelloServiceApplication.class);

	private ServiceIntegration service = new ServiceIntegration();

	public static void main(String[] args) {
		SpringApplication.run(TrelloServiceApplication.class, args);
	}

	/**
	 * Get user boards
	 * @return Array of boards
	 */
	@RequestMapping(value = "/boards", method = RequestMethod.POST)
	public Board[] getBoards(@RequestBody String token){
		log.info("[GET] Boards");

		return service.getBoards(token);
	}

	/**
	 * Get lists of a board
	 * @param boardId Board identifier
	 * @return Array of lists
	 */
	@RequestMapping(value = "/boards/{boardId}/lists", method = RequestMethod.POST)
	public List[] getBoardLists(@PathVariable("boardId") String boardId, @RequestBody String token){
		log.info("[GET] Lists - Board id: " + boardId);

		return service.getLists(boardId, token);
	}

	/**
	 * Get cards of a list
	 * @param listId List identifier
	 * @return Array of cards
	 */
	@RequestMapping(value = "/lists/{listId}/cards", method = RequestMethod.POST)
	public Card[] getListCards(@PathVariable("listId") String listId, @RequestBody String token){
		log.info("[GET] Cards - List id: " + listId);

		return service.getCards(listId, token);
	}

	/**
	 * Create a card
	 * @param token Authorization token
	 * @param idList List identifier
	 * @param name Card name
	 * @param desc Card description
	 * @param due Card due date
	 * @return New card
	 */
	@RequestMapping(value="/cards", method = RequestMethod.POST)
	public Card addCard(@RequestBody String token, @RequestParam String idList, @RequestParam String name, @RequestParam String desc, @RequestParam String due){
		log.info("[POST] Cards - New Card");

		return service.createCard(idList, token, name, desc, due);
	}

	/**
	 * Get a card
	 * @param cardId Card identifier
	 * @return Card
	 */
	@RequestMapping(value = "/cards/{cardId}", method = RequestMethod.POST)
	public Card getCard(@PathVariable("cardId") String cardId, @RequestBody String token){
		log.info("[GET] Card - Card id: " + cardId);

		return service.getCard(cardId, token);
	}

	/**
	 * Update a card
	 * @param cardId Card identifier
	 * @param token Authorization token
	 * @param name New name
	 * @param desc New description
	 * @param due New due date
	 */
	@RequestMapping(value = "/cards/{cardId}", method = RequestMethod.PUT)
	public void updateCard(@PathVariable("cardId") String cardId, @RequestBody String token, @RequestParam String name, @RequestParam String desc, @RequestParam String due) {
		log.info("[PUT] Card - Card id: " + cardId);

		service.updateCard(cardId, token, name, desc, due);
	}

	/**
	 * Delete a card
	 * @param cardId Card identifier
	 * @param token Authorization token
	 */
	@RequestMapping(value = "/cards/{cardId}/delete", method = RequestMethod.POST)
	public ResponseEntity<Object> deleteCard(@PathVariable("cardId") String cardId, @RequestBody String token){
		log.info("[DELETE] Card - Card id: " + cardId);

		return service.deleteCard(cardId, token);
	}

	@RequestMapping("/")
	public String hello(){
		return "This is my first Java application on Google App Engine!";
	}
}
