package com.wcc.pokemon.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

/**
 * Properties specific to Wcc Pokemon.
 * <p>
 * Properties are configured in the {@code application.yml} file.
 * See {@link tech.jhipster.config.JHipsterProperties} for a good example.
 */
@ConfigurationProperties(prefix = "application", ignoreUnknownFields = false)
public class ApplicationProperties {

    // jhipster-needle-application-properties-property

    // jhipster-needle-application-properties-property-getter

    // jhipster-needle-application-properties-property-class
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
