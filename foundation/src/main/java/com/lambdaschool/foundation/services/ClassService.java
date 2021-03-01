package com.lambdaschool.foundation.services;

import com.lambdaschool.foundation.models.Classes;

import java.util.List;

public interface ClassService
{

    List<Classes> findAll();

    Classes save(Classes newclass);

    List<Classes> findByTime();

    List<Classes> findByDate();

    List<Classes> findByLength();

    List<Classes> findByType();

    List<Classes> findByIntensity();

    List<Classes> findByLocation();
}
