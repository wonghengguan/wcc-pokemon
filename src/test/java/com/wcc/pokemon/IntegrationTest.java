package com.wcc.pokemon;

import com.wcc.pokemon.config.AsyncSyncConfiguration;
import com.wcc.pokemon.config.JacksonConfiguration;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = { WccPokemonApp.class, JacksonConfiguration.class, AsyncSyncConfiguration.class })
public @interface IntegrationTest {
}
