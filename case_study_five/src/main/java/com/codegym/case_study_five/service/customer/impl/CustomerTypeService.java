package com.codegym.case_study_five.service.customer.impl;

import com.codegym.case_study_five.model.customer.CustomerType;
import com.codegym.case_study_five.repository.customer.ICustomerTypeRepository;
import com.codegym.case_study_five.service.customer.ICustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CustomerTypeService implements ICustomerTypeService {

    @Autowired
    ICustomerTypeRepository iCustomerTypeRepository;

    @Override
    public List<CustomerType> getAll() {
        return iCustomerTypeRepository.findAll();
    }

    @Override
    public CustomerType findById(Integer id) {
        return iCustomerTypeRepository.findById(id).orElse(null);
    }

    @Override
    public void save(CustomerType customerType) {
        iCustomerTypeRepository.save(customerType);
    }

    @Override
    public List<CustomerType> findByName(String name) {
        return null;
    }

    @Override
    public void remove(Integer id) {
        iCustomerTypeRepository.deleteById(id);
    }

}
