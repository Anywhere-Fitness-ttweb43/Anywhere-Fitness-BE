package com.lambdaschool.foundation.repository;

import com.lambdaschool.foundation.models.Classes;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ClassRepository extends CrudRepository<Classes, Long>
{

    List<Classes> findByClassTime(String time);

    List<Classes> findByClassDate(String date);

    List<Classes> findByClassLength(String length);

    List<Classes> findByClassType(String type);

    List<Classes> findByClassIntensity(String intensity);

    List<Classes> findByClassLocation(String location);
}
