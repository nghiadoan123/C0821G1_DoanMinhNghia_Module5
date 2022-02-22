package com.codegym.case_study_five.service.customer;

import com.codegym.case_study_five.model.customer.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICustomerService {

    List<Customer> getAll();

    Customer findById(Integer id);


    void save(Customer customer);

    List<Customer> findByName(String name);


    void remove(Integer id);

    Page<Customer> findAll(Pageable pageable);

    List<Customer> findByNameTwo(String name, String code);

    List<Customer> findByCode(String code);

}
