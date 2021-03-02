package com.lambdaschool.foundation.services;

import com.lambdaschool.foundation.exceptions.ResourceNotFoundException;
import com.lambdaschool.foundation.models.Classes;
import com.lambdaschool.foundation.repository.ClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;



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

        newClass.setTime(classes.getTime()
                .toLowerCase());
        newClass.setDate(classes.getDate());
        newClass.setDuration(classes.getDuration());
        newClass.setType(classes.getType());
        newClass.setIntensity(classes.getIntensity());
        newClass.setLocation(classes.getLocation());

        return classrepos.save(newClass);
    }

//    @Override
//    public List<Restaurant> findRestaurantByNameLike(String name)
//    {
//        List<Restaurant> list = restrepos.findByNameContainingIgnoreCase(name);
//        return list;
//    }

    @Override
    public List<Classes> findByTime(String time) {
        List<Classes> list = classrepos.findByClassTime(time);
        return list;
    }

    @Override
    public List<Classes> findByDate(String date) {
        List<Classes> list = classrepos.findByClassDate(date);
        return list;
    }

    @Override
    public Classes findByLength(String length) {
        Classes c = classrepos.findByClassLength(length);
        if (c == null)
        {
            throw new ResourceNotFoundException("Class with length of " + length " min not found");
        }
        return c;
    }

    @Override
    public Classes findByType(String type) {
        Classes c = classrepos.findByClassType(type);
        if (c == null)
        {
            throw new ResourceNotFoundException("Class with Type of " + type + " not found!");
        }
        return c;
    }

    @Override
    public Classes findByIntensity(String intensity) {
        Classes c = classrepos.findByClassIntensity(intensity);
        if (c == null)
        {
            throw new ResourceNotFoundException("Class with intensity level of " + intensity + " not found!");
        }
        return c;
    }

    @Override
    public Classes findByLocation(String location) {
        Classes c = classrepos.findByClassLocation(location);
        if (c == null)
        {
            throw new ResourceNotFoundException("Class at location " + location + " doesn't exist!");
        }
        return c;
    }
}
