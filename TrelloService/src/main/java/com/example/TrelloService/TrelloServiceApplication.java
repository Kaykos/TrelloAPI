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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@RestController
public class TrelloServiceApplication {

	private static final Logger log = LoggerFactory.getLogger(TrelloServiceApplication.class);

	private ServiceIntegration service = new ServiceIntegration();

	public static void main(String[] args) {
		SpringApplication.run(TrelloServiceApplication.class, args);
	}

	/**
	 * Get boards
	 * @return Array of boards
	 */
	@RequestMapping(value = "/boards", method = RequestMethod.GET)
	public Board[] getBoards(){
		log.info("[GET] Boards");

		return service.getBoards();
	}

	/**
	 * Get lists of a board
	 * @param boardId Board identifier
	 * @return Array of lists
	 */
	@RequestMapping(value = "/boards/{boardId}/lists", method = RequestMethod.GET)
	public List[] getBoardLists(@PathVariable("boardId") String boardId){
		log.info("[GET] Lists - Board id: " + boardId);

		return service.getLists(boardId);
	}

	/**
	 * Get cards of a list
	 * @param listId List identifier
	 * @return Array of cards
	 */
	@RequestMapping(value = "/lists/{listId}/cards", method = RequestMethod.GET)
	public Card[] getListCards(@PathVariable("listId") String listId){
		log.info("[GET] Cards - List id: " + listId);

		return service.getCards(listId);
	}

	@RequestMapping("/")
	public String hello(){
		return "This is my first Java application on Google App Engine!";
	}
}
