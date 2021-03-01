package com.lambdaschool.foundation.controllers;

import com.lambdaschool.foundation.models.Classes;
import com.lambdaschool.foundation.services.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URISyntaxException;
import java.util.List;

public class ClassController
{
    @Autowired
    private ClassService classService;
    // Get Class Time Start
//    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
//    @GetMapping(value ="/time", produces = "application/json")
//    public ResponseEntity<?> listByTime()
//    {
//        List<Classes> myClasses = classService.
//    }
    // get Class Date

    // get Class duration

    // get Class type

    // get Intensity level

    // get Class Location

    // get All class
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping(value = "/all", produces = "application/json")
    public ResponseEntity<?> listAllClasses()
    {
        List<Classes> myClasses = classService.findAll();
        return new ResponseEntity<>(myClasses, HttpStatus.OK);
    }

    // add class
//    @PostMapping(value = "class", consumes = "application/json")
//    public ResponseEntity<?> addNewClass(
//            @Valid
//            @RequestBody
//                Classes newclass) throws URISyntaxException
//    {
//        newclass.setClassid(0);
//        newclass = classService.save(newclass);
//
//        HttpHeaders responseHeaders = new HttpHeaders();
//        URI newUserURI = ServletUriComponentsBuilder.fromCurrentRequest()
//                .path("/{classid}")
//                .buildAndExpand(newclass.getClassid())
//
//    }
    // delete class
}
