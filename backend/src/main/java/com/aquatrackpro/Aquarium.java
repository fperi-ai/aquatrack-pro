package com.aquatrackpro;

import java.util.Map;
import java.util.UUID;

public class Aquarium {
    private UUID id;
    private String name;
    private String photoUrl;
    private double volume; // in liters
    private String type; // e.g., Planted, Community, Marine, Brackish, Coldwater
    private Map<String, String> targetParameters; // e.g., {"pH": "6.5-7.5", "Temperature": "24-26°C"}
    private String initialSetupNotes;

    // Constructor
    public Aquarium(String name, String photoUrl, double volume, String type, Map<String, String> targetParameters, String initialSetupNotes) {
        this.id = UUID.randomUUID();
        this.name = name;
        this.photoUrl = photoUrl;
        this.volume = volume;
        this.type = type;
        this.targetParameters = targetParameters;
        this.initialSetupNotes = initialSetupNotes;
    }

    // Getters
    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public double getVolume() {
        return volume;
    }

    public String getType() {
        return type;
    }

    public Map<String, String> getTargetParameters() {
        return targetParameters;
    }

    public String getInitialSetupNotes() {
        return initialSetupNotes;
    }

    // Setters
    public void setName(String name) {
        this.name = name;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }

    public void setVolume(double volume) {
        this.volume = volume;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setTargetParameters(Map<String, String> targetParameters) {
        this.targetParameters = targetParameters;
    }

    public void setInitialSetupNotes(String initialSetupNotes) {
        this.initialSetupNotes = initialSetupNotes;
    }

    @Override
    public String toString() {
        return "Aquarium{" +
               "id=" + id +
               ", name='" + name + '\'' +
               ", volume=" + volume +
               ", type='" + type + '\'' +
               '}';
    }
} 