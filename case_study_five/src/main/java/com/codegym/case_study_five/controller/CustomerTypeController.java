package com.codegym.case_study_five.controller;

import com.codegym.case_study_five.model.customer.CustomerType;
import com.codegym.case_study_five.service.customer.ICustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/customerType")
public class CustomerTypeController {

    @Autowired
    ICustomerTypeService iCustomerTypeService;

    @GetMapping("/all")
    public ResponseEntity<List<CustomerType>> findAllCustomerType() {
        List<CustomerType> customerTypeList =iCustomerTypeService.getAll();
        if (customerTypeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(customerTypeList, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<CustomerType> findCustomerTypeById(@PathVariable Integer id) {
        CustomerType  customerType = iCustomerTypeService.findById(id);
        if (customerType == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(customerType, HttpStatus.OK);
    }

//    @PutMapping("/{id}")
//    public ResponseEntity<CustomerType> updateBlog(@PathVariable Integer id, @RequestBody CustomerType customerType) {
//        Category category1 = iCategoryService.findById(id);
//        if (category1 == null) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        category.setId(category1.getId());
//        iCategoryService.save(category);
//        return new ResponseEntity<>( HttpStatus.OK);
//    }
//
//
//    @PostMapping
//    public ResponseEntity<Category> saveCategory(@RequestBody Category category) {
//        if (category == null){
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        iCategoryService.save(category);
//        return new ResponseEntity<>(HttpStatus.CREATED);
//    }
//
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Category> deleteCategory(@PathVariable Integer id) {
//        Category category = iCategoryService.findById(id);
//        if (category == null) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        iCategoryService.remove(id);
//        return new ResponseEntity<>(category, HttpStatus.OK);
//    }

}
