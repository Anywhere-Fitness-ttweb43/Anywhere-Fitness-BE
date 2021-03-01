package com.lambdaschool.foundation.services;

import com.lambdaschool.foundation.models.Classes;
import com.lambdaschool.foundation.repository.ClassRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class ClassServiceImpl implements ClassService
{
    @Autowired
    private ClassRepository classRepository;

    @Override
    public List<Classes> findAll() {
        return null;
    }

    @Override
    public Classes save(Classes newclass) {
        return null;
    }

    @Override
    public List<Classes> findByTime() {
        return null;
    }

    @Override
    public List<Classes> findByDate() {
        return null;
    }

    @Override
    public List<Classes> findByLength() {
        return null;
    }

    @Override
    public List<Classes> findByType() {
        return null;
    }

    @Override
    public List<Classes> findByIntensity() {
        return null;
    }

    @Override
    public List<Classes> findByLocation() {
        return null;
    }
}
