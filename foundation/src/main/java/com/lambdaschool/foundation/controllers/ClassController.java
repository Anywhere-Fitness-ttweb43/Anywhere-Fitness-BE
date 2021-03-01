package com.lambdaschool.foundation.controllers;

import com.lambdaschool.foundation.models.Classes;
import com.lambdaschool.foundation.services.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/classes")
public class ClassController
{
    @Autowired
    private ClassService classService;
    
//     Get Class Time Start
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping(value ="/time", produces = "application/json")
    public ResponseEntity<?> searchByTime()
    {
        List<Classes> myClasses = classService.findByTime();
        return new ResponseEntity<>(myClasses, HttpStatus.OK);
    }
    // get Class Date
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping(value = "/date", produces = "application/json")
    public  ResponseEntity<?> searchByDate()
    {
        List<Classes> myClasses = classService.findByDate();
        return new ResponseEntity<>(myClasses, HttpStatus.OK);
    }

    // get Class duration
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping(value = "/length", produces = "application/json")
    public ResponseEntity<?> searchByLength()
    {
        List<Classes> myClasses = classService.findByLength();
        return new ResponseEntity<>(myClasses, HttpStatus.OK);
    }

    // get Class type
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping(value = "/type", produces = "application/json")
    public ResponseEntity<?> searchByType()
    {
        List<Classes> myClasses = classService.findByType();
        return new ResponseEntity<>(myClasses, HttpStatus.OK);
    }

    // get Intensity level
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping(value = "intensity", produces = "application/json")
    public ResponseEntity<?> searchByIntensity()
    {
        List<Classes> myClasses = classService.findByIntensity();
        return new ResponseEntity<>(myClasses, HttpStatus.OK);
    }

    // get Class Location
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping(value = "location", produces = "application/json")
    public ResponseEntity<?> searchByLocation()
    {
        List<Classes> myClasses = classService.findByLocation();
        return new ResponseEntity<>(myClasses, HttpStatus.OK);
    }

    // get All class
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping(value = "/all", produces = "application/json")
    public ResponseEntity<?> listAllClasses()
    {
        List<Classes> myClasses = classService.findAll();
        return new ResponseEntity<>(myClasses, HttpStatus.OK);
    }

    // add class
    @PostMapping(value = "class", consumes = "application/json")
    public ResponseEntity<?> addNewClass(
            @Valid
            @RequestBody
                Classes newclass) throws URISyntaxException
    {
        newclass.setClassid(0);
        newclass = classService.save(newclass);

        HttpHeaders responseHeaders = new HttpHeaders();
        URI newClassURI = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{classid}")
                .buildAndExpand(newclass.getClassid())
                .toUri();
        responseHeaders.setLocation(newClassURI);

        return new ResponseEntity<>(null, responseHeaders, HttpStatus.CREATED);

    }
    // delete class
}
