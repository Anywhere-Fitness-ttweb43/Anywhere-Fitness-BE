package com.lambdaschool.foundation.services;

import com.lambdaschool.foundation.exceptions.ResourceNotFoundException;
import com.lambdaschool.foundation.models.Classes;
import com.lambdaschool.foundation.repository.ClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Transactional
@Service(value = "classService")
public class ClassServiceImpl implements ClassService
{
    @Autowired
    private ClassRepository classrepos;



    @Override
    public List<Classes> findAll()
    {
        List<Classes> list = new ArrayList<>();

        classrepos.findAll()
                .iterator()
                .forEachRemaining(list::add);
        return list;
    }

    @Transactional
    @Override
    public Classes save(Classes classes) {
        Classes newClass = new Classes();

        if (classes.getClassid() != 0)
        {
            classrepos.findById(classes.getClassid())
                    .orElseThrow(() -> new ResourceNotFoundException("Class id" + classes.getClassid() + " not found!"));
            newClass.setClassid(classes.getClassid());
        }
        newClass.setName(classes.getName());
        newClass.setTime(classes.getTime());
        newClass.setDate(classes.getDate());
        newClass.setDuration(classes.getDuration());
        newClass.setType(classes.getType());
        newClass.setIntensity(classes.getIntensity());
        newClass.setLocation(classes.getLocation());

        return classrepos.save(newClass);
    }

    @Override
    public List<Classes> findByName(String name)
    {
        List<Classes> list = classrepos.findByNameContainingIgnoreCase(name);
        return list;
    }


    @Override
    public List<Classes> findByTime(String time) {
        List<Classes> list = classrepos.findByTime(time);
        return list;
    }

    @Override
    public List<Classes> findByDate(String date) {
        List<Classes> list = classrepos.findByDate(date);
        if (list == null)
        {
            throw new ResourceNotFoundException("Nothing found using query!");
        }
        return list;
    }

    @Override
    public List<Classes> findByDuration(String duration) {
        List<Classes> list = classrepos.findByDuration(duration);
        if (list == null)
        {
            throw new ResourceNotFoundException("Nothing found using query!");
        }
        return list;
    }

    @Override
    public List<Classes> findByType(String type) {
        List<Classes> list = classrepos.findByTypeIgnoreCase(type);
        if (list == null)
        {
            throw new ResourceNotFoundException("Nothing found using query!");
        }
        return list;
    }

    @Override
    public List<Classes> findByIntensity(String intensity) {
        List<Classes> list = classrepos.findByIntensity(intensity);
        if (list == null)
        {
            throw new ResourceNotFoundException("Nothing found using query!");
        }
        return list;
    }

    @Override
    public List<Classes> findByLocation(String location) {
        List<Classes> list = classrepos.findByLocationContainingIgnoreCase(location);
        if (list == null)
            if (list == null)
            {
                throw new ResourceNotFoundException("Nothing found using query!");
            }
        return list;
    }

}
