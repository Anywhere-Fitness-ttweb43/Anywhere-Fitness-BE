package com.lambdaschool.foundation.repository;

import com.lambdaschool.foundation.models.Classes;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ClassRepository extends CrudRepository<Classes, Long> {

    List<Classes> findByNameContainingIgnoreCase(String name);

    List<Classes> findByTime(String time);

    List<Classes> findByDate(String date);

    List<Classes> findByDuration(String duration);

    List<Classes> findByTypeIgnoreCase(String type);

    List<Classes> findByLocationContainingIgnoreCase(String location);

    List<Classes> findByIntensity(String intensity);
}
