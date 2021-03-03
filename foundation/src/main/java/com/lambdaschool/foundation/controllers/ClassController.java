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



//catgeory = dropdown box state
//Search Term = search box state
// base_url/classes/{category}/{searchTerm}



@RestController
@RequestMapping("/classes")
public class ClassController
{
    @Autowired
    private ClassService classService;
    
//     Get Class Time Start
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping(value ="/time/{time}", produces = "application/json")
    public ResponseEntity<?> searchByTime(
            @PathVariable
            String time
    )
    {
        List<Classes> myClasses = classService.findByTime(time);
        return new ResponseEntity<>(myClasses, HttpStatus.OK);
    }

    // get Class Date
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping(value = "/date/{date}", produces = "application/json")
    public  ResponseEntity<?> searchByDate(
            @PathVariable
            String date
    )
    {
        List<Classes> myClasses = classService.findByDate(date);
        return new ResponseEntity<>(myClasses, HttpStatus.OK);
    }

    // get Class duration
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping(value = "/duration/{duration}", produces = "application/json")
    public ResponseEntity<?> searchByLength(
            @PathVariable
            String duration
    )
    {
        List<Classes> myClasses = classService.findByDuration(duration);
        return new ResponseEntity<>(myClasses, HttpStatus.OK);
    }

    // get Class type
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping(value = "/type/{type}", produces = "application/json")
    public ResponseEntity<?> searchByType(
            @PathVariable
            String type
    )
    {
        List<Classes> myClasses = classService.findByType(type);
        return new ResponseEntity<>(myClasses, HttpStatus.OK);
    }

    // get Intensity level
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping(value = "/intensity/{intensity}", produces = "application/json")
    public ResponseEntity<?> searchByIntensity(
            @PathVariable
            String intensity
    )
    {
        List<Classes> myClasses = classService.findByIntensity(intensity);
        return new ResponseEntity<>(myClasses, HttpStatus.OK);
    }

    // get Class Location
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping(value = "/location/{location}", produces = "application/json")
    public ResponseEntity<?> searchByLocation(
            @PathVariable
            String location
    )
    {
        List<Classes> myClasses = classService.findByLocation(location);
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
    @PostMapping(value = "/class", consumes = "application/json")
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
