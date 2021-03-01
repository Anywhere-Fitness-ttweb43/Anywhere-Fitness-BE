package com.lambdaschool.foundation.models;


import javax.persistence.*;

@Entity
@Table(name = "classes")
public class Classes {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long classid;

    @Column(nullable = false)
    private String Time;

    @Column(nullable = false)
    private String date;

    @Column(nullable = false)
    private String duration;

    @Column(nullable = false)
    private String type;

    @Column(nullable = false)
    private String intensity;

    @Column(nullable = false)
    private String location;


    public Classes()
    {
    }

    public Classes(String time, String date, String duration, String type, String intensity, String location) {
        Time = time;
        this.date = date;
        this.duration = duration;
        this.type = type;
        this.intensity = intensity;
        this.location = location;
    }

    public long getClassid() {
        return classid;
    }

    public void setClassid(long classid) {
        this.classid = classid;
    }

    public String getTime() {
        return Time;
    }

    public void setTime(String time) {
        Time = time;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getIntensity() {
        return intensity;
    }

    public void setIntensity(String intensity) {
        this.intensity = intensity;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }


}
