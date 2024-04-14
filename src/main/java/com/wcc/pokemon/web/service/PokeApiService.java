import com.wcc.dto.*;
import com.wcc.model.Pokemon;
import com.wcc.model.PokemonDetails;
import java.util.List;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PokeApiService {

    private final String baseUrl = "https://pokeapi.co/api/v2/";

    private final RestTemplate restTemplate;

    public PokeApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public List<Pokemon> getAllPokemon() {
        String url = baseUrl + "pokemon";
        ResponseEntity<Pokemon> responseEntity = restTemplate.exchange(url, HttpMethod.GET, null, Pokemon.class);
        if (responseEntity.getStatusCode() == HttpStatus.OK && responseEntity.getBody() != null) {
            return responseEntity.getBody().getResults();
        } else {
            throw new RuntimeException("Failed to fetch Pokemon list from PokeAPI");
        }
    }

    public PokemonDetails getPokemonDetails(String pokemonName) {
        String url = baseUrl + "pokemon/" + pokemonName;
        ResponseEntity<PokemonDetails> responseEntity = restTemplate.exchange(url, HttpMethod.GET, null, PokemonDetails.class);
        if (responseEntity.getStatusCode() == HttpStatus.OK && responseEntity.getBody() != null) {
            return responseEntity.getBody();
        } else {
            throw new RuntimeException("Failed to fetch details for Pokemon: " + pokemonName);
        }
    }
}
