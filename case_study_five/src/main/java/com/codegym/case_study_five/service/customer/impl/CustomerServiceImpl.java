package com.codegym.case_study_five.service.customer.impl;

import com.codegym.case_study_five.model.customer.Customer;
import com.codegym.case_study_five.repository.customer.ICustomerRepository;
import com.codegym.case_study_five.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements ICustomerService {

    @Autowired
    ICustomerRepository iCustomerRepository;

    @Override
    public List<Customer> getAll() {
        return iCustomerRepository.findAll();
    }

    @Override
    public Customer findById(Integer id) {
        return iCustomerRepository.findById(id).orElse(null);
    }

    @Override
    public void save(Customer customer) {
        iCustomerRepository.save(customer);
    }

    @Override
    public List<Customer> findByName(String name) {
        return null;
    }


    @Override
    public void remove(Integer id) {
        iCustomerRepository.deleteById(id);
    }

    @Override
    public Page<Customer> findAll(Pageable pageable) {
        return iCustomerRepository.findAll(pageable);
    }



    @Override
    public List<Customer> findByNameTwo(String name, String code) {
       return null;
    }

    @Override
    public List<Customer> findByCode(String code) {
        return null;
    }

}
