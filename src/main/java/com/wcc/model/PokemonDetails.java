package com.wcc.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class PokemonDetails {

    private String name;
    private List<Type> types;
    private List<Ability> abilities;
    private List<Stat> stats;
    private Sprites sprites;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Type> getTypes() {
        return types;
    }

    public void setTypes(List<Type> types) {
        this.types = types;
    }

    public List<Ability> getAbilities() {
        return abilities;
    }

    public void setAbilities(List<Ability> abilities) {
        this.abilities = abilities;
    }

    public List<Stat> getStats() {
        return stats;
    }

    public void setStats(List<Stat> stats) {
        this.stats = stats;
    }

    public Sprites getSprites() {
        return sprites;
    }

    public void setSprites(Sprites sprites) {
        this.sprites = sprites;
    }
}

@JsonIgnoreProperties(ignoreUnknown = true)
class Type {

    private TypeDetail type;

    public TypeDetail getType() {
        return type;
    }

    public void setType(TypeDetail type) {
        this.type = type;
    }
}

@JsonIgnoreProperties(ignoreUnknown = true)
class TypeDetail {

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

@JsonIgnoreProperties(ignoreUnknown = true)
class Ability {

    private AbilityDetail ability;

    public AbilityDetail getAbility() {
        return ability;
    }

    public void setAbility(AbilityDetail ability) {
        this.ability = ability;
    }
}

@JsonIgnoreProperties(ignoreUnknown = true)
class AbilityDetail {

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

@JsonIgnoreProperties(ignoreUnknown = true)
class Stat {

    private StatDetail stat;
    private int base_stat;

    public StatDetail getStat() {
        return stat;
    }

    public void setStat(StatDetail stat) {
        this.stat = stat;
    }

    public int getBase_stat() {
        return base_stat;
    }

    public void setBase_stat(int base_stat) {
        this.base_stat = base_stat;
    }
}

@JsonIgnoreProperties(ignoreUnknown = true)
class StatDetail {

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

@JsonIgnoreProperties(ignoreUnknown = true)
class Sprites {

    private String front_default;

    public String getFront_default() {
        return front_default;
    }

    public void setFront_default(String front_default) {
        this.front_default = front_default;
    }
}
