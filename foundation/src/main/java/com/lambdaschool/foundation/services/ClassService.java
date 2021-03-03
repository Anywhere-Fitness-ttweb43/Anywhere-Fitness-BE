package com.lambdaschool.foundation.services;

import com.lambdaschool.foundation.models.Classes;

import java.util.List;

public interface ClassService
{
    List<Classes> findByName(String name);

    List<Classes> findByTime(String time);

    List<Classes> findByDate(String date);

    List<Classes> findByDuration(String duration);

    List<Classes> findByType(String type);

    List<Classes> findByIntensity(String intensity);

    List<Classes> findByLocation(String location);

    List<Classes> findAll();

    Classes save(Classes newclass);
}
