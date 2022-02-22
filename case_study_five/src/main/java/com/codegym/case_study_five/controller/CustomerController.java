package com.codegym.case_study_five.controller;

import com.codegym.case_study_five.model.customer.Customer;
import com.codegym.case_study_five.service.customer.ICustomerService;
import com.codegym.case_study_five.service.customer.impl.CustomerServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/customer")

public class CustomerController {
    @Autowired
    ICustomerService iCustomerService;


    @GetMapping("/all")
    public ResponseEntity<List<Customer>> getAllCustomer() {
        List<Customer> customers = iCustomerService.getAll();
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Customer> getCustomerId(@PathVariable("id") Integer id) {
        Customer customer = iCustomerService.findById(id);
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Customer> addCustomer(@RequestBody Customer customer) {
        iCustomerService.save(customer);
        return new ResponseEntity<>(customer, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Customer> updateCustomer(@RequestBody Customer customer) {
        iCustomerService.save(customer);
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Integer id) {
        iCustomerService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
